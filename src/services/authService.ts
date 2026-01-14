/**
 * Authentication Service
 * Handles native Google Sign-In + Supabase session
 */

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { supabase } from './supabase';
import { authAPI } from './supabase';
import { User } from '../types';
import { GOOGLE_CONFIG } from './config';

/**
 * Configure Google Sign-In — call this once on app startup
 */
export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: GOOGLE_CONFIG.webClientId,
    iosClientId: GOOGLE_CONFIG.iosClientId,
    scopes: ['profile', 'email', 'openid'],
    offlineAccess: false,
  });
};

/**
 * Initialize authentication and restore session
 */
export const initializeAuth = async (): Promise<User | null> => {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error('Error getting session:', error);
      return null;
    }

    if (data.session) {
      return getUserProfile(data.session.user.id);
    }

    return null;
  } catch (error) {
    console.error('Error initializing auth:', error);
    return null;
  }
};

/**
 * Sign in with Google using the native sign-in sheet,
 * then create a Supabase session via signInWithIdToken.
 */
export const signInWithGoogle = async (): Promise<User> => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const response = await GoogleSignin.signIn();
    console.log('GOOGLE RESPONSE:', JSON.stringify(response, null, 2));

    // Extract idToken from the response
    const idToken = response.data?.idToken ?? (response as any).idToken;

    if (!idToken) {
      throw new Error('No ID token returned from Google Sign-In');
    }

    // Exchange Google ID token for a Supabase session
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: idToken,
    });

    if (error) throw error;
    if (!data.user) throw new Error('No user returned from Supabase');

    const googleUser = data.user;

    // Upsert the user profile into our users table
    const userProfile = await authAPI.upsertUser(
      googleUser.id,
      googleUser.email || '',
      googleUser.user_metadata?.full_name ||
      googleUser.user_metadata?.name ||
      googleUser.email?.split('@')[0] ||
      'User',
      googleUser.user_metadata?.avatar_url ||
      googleUser.user_metadata?.picture ||
      null
    );

    return {
      id: userProfile.id,
      email: userProfile.email,
      name: userProfile.name,
      avatarUrl: userProfile.avatar_url,
      isPaid: userProfile.is_paid,
      createdAt: userProfile.created_at,
    };
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      throw new Error('Sign-in cancelled by user');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      throw new Error('Sign-in already in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      throw new Error('Google Play Services not available');
    }
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

/**
 * Get user profile from database
 */
export const getUserProfile = async (userId: string): Promise<User | null> => {
  try {
    const userProfile = await authAPI.getUserById(userId);

    if (!userProfile) {
      return null;
    }

    return {
      id: userProfile.id,
      email: userProfile.email,
      name: userProfile.name,
      avatarUrl: userProfile.avatar_url,
      isPaid: userProfile.is_paid,
      createdAt: userProfile.created_at,
    };
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
};

/**
 * Get current authenticated user
 */
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      return null;
    }

    return getUserProfile(data.user.id);
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

/**
 * Sign out user and clean up session.
 * Each step is attempted independently so a network failure
 * in one step does not prevent the others from running.
 * The function never throws — the caller should always clear
 * local state and navigate away regardless.
 */
export const signOutUser = async (): Promise<void> => {
  // Revoke Google access token (best-effort)
  try {
    await GoogleSignin.revokeAccess();
  } catch (error: any) {
    console.warn('GoogleSignin.revokeAccess failed (ignored):', error?.message);
  }

  // Sign out of Google locally (best-effort)
  try {
    await GoogleSignin.signOut();
  } catch (error: any) {
    console.warn('GoogleSignin.signOut failed (ignored):', error?.message);
  }

  // Sign out of Supabase using local scope — clears the local session
  // without making any network request, avoiding fetch/network errors.
  try {
    await supabase.auth.signOut({ scope: 'local' });
  } catch (error: any) {
    console.warn('supabase.auth.signOut failed (ignored):', error?.message);
  }
};

/**
 * Listen to authentication state changes
 */
export const onAuthStateChange = (
  callback: (user: User | null) => void
): (() => void) => {
  const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
      const user = await getUserProfile(session.user.id);
      callback(user);
    } else if (event === 'SIGNED_OUT') {
      callback(null);
    } else if (event === 'USER_UPDATED' && session?.user) {
      const user = await getUserProfile(session.user.id);
      callback(user);
    }
  });

  return () => {
    data?.subscription.unsubscribe();
  };
};
