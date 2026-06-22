/**
 * Supabase Client Initialization
 * Handles all Supabase API interactions
 */

import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { config } from './config';

// Initialize Supabase client with AsyncStorage so the session is persisted
// across app restarts and background/foreground cycles.
// Without this, React Native uses in-memory storage and the session is lost
// whenever the app is killed or the JS bundle reloads.
export const supabase = createClient(config.supabase.url, config.supabase.anonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

/**
 * Auth table operations
 */
export const authAPI = {
  /**
   * Get user by ID
   */
  getUserById: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  /**
   * Get user by email
   */
  getUserByEmail: async (email: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

      // It's ok if user doesn't exist yet
      if (error?.code === 'PGRST116') return null;
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
    }
  },

  /**
   * Create or update user
   */
  upsertUser: async (userId: string, email: string, name: string, avatarUrl: string | null) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .upsert(
          {
            id: userId,
            email,
            name,
            avatar_url: avatarUrl,
            created_at: new Date().toISOString(),
          },
          { onConflict: 'id' }
        )
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error upserting user:', error);
      throw error;
    }
  },

  /**
   * Check if user has paid
   */
  checkIfUserPaid: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('is_paid')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data?.is_paid || false;
    } catch (error) {
      console.error('Error checking payment status:', error);
      throw error;
    }
  },

  /**
   * Update user payment status
   */
  updatePaymentStatus: async (userId: string, isPaid: boolean) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ is_paid: isPaid })
        .eq('id', userId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating payment status:', error);
      throw error;
    }
  },
};

/**
 * Questions table operations
 */
export const quizAPI = {
  /**
   * Fetch all active questions
   */
  getQuestions: async () => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error;
    }
  },

  /**
   * Get specific question by ID
   */
  getQuestionById: async (questionId: string) => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('id', questionId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching question:', error);
      throw error;
    }
  },
};

/**
 * User Answers table operations
 */
export const answersAPI = {
  /**
   * Save user answers
   */
  saveUserAnswers: async (userId: string, answers: Array<{ questionId: string; selectedOption: string; isCorrect: boolean }>) => {
    try {
      const answersData = answers.map((answer) => ({
        user_id: userId,
        question_id: answer.questionId,
        selected_option: answer.selectedOption,
        is_correct: answer.isCorrect,
        created_at: new Date().toISOString(),
      }));

      const { data, error } = await supabase.from('user_answers').insert(answersData).select();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error saving user answers:', error);
      throw error;
    }
  },

  /**
   * Get user answers for a specific quiz
   */
  getUserAnswers: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_answers')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching user answers:', error);
      throw error;
    }
  },
};

/**
 * Payments table operations
 */
export const paymentAPI = {
  /**
   * Save payment record
   */
  savePayment: async (
    userId: string,
    razorpayPaymentId: string,
    razorpayOrderId: string,
    amount: number,
    status: string
  ) => {
    try {
      const { data, error } = await supabase
        .from('payments')
        .insert({
          user_id: userId,
          razorpay_payment_id: razorpayPaymentId,
          razorpay_order_id: razorpayOrderId,
          amount,
          status,
          created_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error saving payment:', error);
      throw error;
    }
  },

  /**
   * Get latest payment for user
   */
  getLatestPayment: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error?.code === 'PGRST116') return null;
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching payment:', error);
      throw error;
    }
  },
};
