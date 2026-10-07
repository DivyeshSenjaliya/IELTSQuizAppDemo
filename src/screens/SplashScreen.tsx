/**
 * Splash Screen
 * Initial screen that checks authentication status and redirects accordingly
 */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useAuthStore } from '../store/authStore';
import { usePaymentStore } from '../store/paymentStore';
import { initializeAuth } from '../services/authService';
import { hasUserPaid } from '../services/paymentService';
import { validateConfig } from '../services/config';
import { Loading } from '../components/Loading';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const setUser = useAuthStore((state) => state.setUser);
  const setError = useAuthStore((state) => state.setError);
  const setIsPaid = usePaymentStore((state) => state.setIsPaid);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Validate configuration first
      const isConfigValid = validateConfig();
      if (!isConfigValid) {
        console.warn('⚠️ Configuration incomplete. Some features may not work.');
      }

      // Initialize auth and restore session
      const user = await initializeAuth();

      if (user) {
        // User is logged in, set user state
        setUser(user);

        // Check payment status
        const isPaid = await hasUserPaid(user.id);
        setIsPaid(isPaid);

        // Navigate to main application dashboard
        navigation.replace('MainTabs');
      } else {
        // User not logged in, navigate to login screen
        navigation.replace('Login');
      }
    } catch (error: any) {
      console.error('Error initializing app:', error);
      setError(error.message || 'Failed to initialize app');
      // On error, go to login screen
      navigation.replace('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>📚</Text>
        <Text style={styles.title}>IELTS Quiz</Text>
        <Text style={styles.subtitle}>Master Your English</Text>

        <Loading message="Loading..." fullScreen={false} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    fontSize: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
});
