/**
 * Login Screen
 * User authentication with native Google Sign-In
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useAuthStore } from '../store/authStore';
import { usePaymentStore } from '../store/paymentStore';
import { signInWithGoogle } from '../services/authService';
import { hasUserPaid } from '../services/paymentService';
import { Button } from '../components/Button';
import { ErrorMessage } from '../components/ErrorMessage';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);
  const error = useAuthStore((state) => state.error);
  const setError = useAuthStore((state) => state.setError);
  const setIsPaid = usePaymentStore((state) => state.setIsPaid);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);

      // Native Google Sign-In sheet → Supabase session
      const user = await signInWithGoogle();
      setUser(user);

      // Check payment status
      const isPaid = await hasUserPaid(user.id);
      setIsPaid(isPaid);

      // Navigate to quiz
      navigation.replace('Quiz');
    } catch (err: any) {
      if (err.message !== 'Sign-in cancelled by user') {
        console.error('Sign-in error:', err);
        setError(err.message || 'Failed to sign in');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.logo}>📚</Text>
          <Text style={styles.title}>IELTS Quiz App</Text>
          <Text style={styles.subtitle}>Test Your English Skills</Text>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Take Our Quiz?</Text>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Practice with real IELTS questions</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Get detailed performance report</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Track your progress</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Instant score evaluation</Text>
          </View>
        </View>

        {/* Error Message */}
        {error && (
          <ErrorMessage
            message={error}
            onRetry={handleGoogleSignIn}
            style={styles.errorMessage}
          />
        )}

        {/* Sign In Button */}
        <View style={styles.buttonContainer}>
          <Button
            title={loading ? 'Signing in...' : 'Sign in with Google'}
            onPress={handleGoogleSignIn}
            loading={loading}
            disabled={loading}
          />

          <Text style={styles.termsText}>
            By signing in, you agree to our terms of service
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  featuresSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#07a41e',
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  errorMessage: {
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 32,
  },
  termsText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 12,
  },
});
