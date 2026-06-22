/**
 * Report Screen
 * Displays quiz results and handles payment for unlocking full report
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BlurView } from '@react-native-community/blur';
import { RootStackParamList, QuizResult } from '../types';
import { useAuthStore } from '../store/authStore';
import { usePaymentStore } from '../store/paymentStore';
import { useQuizStore } from '../store/quizStore';
import { calculateQuizResult, getUserAnswers } from '../services/quizService';
import { openRazorpayCheckout } from '../services/paymentService';
import { signOutUser } from '../services/authService';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';

type Props = NativeStackScreenProps<RootStackParamList, 'Report'>;

export const ReportScreen: React.FC<Props> = ({ navigation }) => {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  const questions = useQuizStore((state) => state.questions);
  const answers = useQuizStore((state) => state.answers);
  const isPaid = usePaymentStore((state) => state.isPaid);
  const setIsPaid = usePaymentStore((state) => state.setIsPaid);
  const paymentError = usePaymentStore((state) => state.paymentError);
  const setPaymentError = usePaymentStore((state) => state.setPaymentError);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    try {
      setLoading(true);

      // Calculate result
      const quizResult = calculateQuizResult(answers, questions);
      setResult(quizResult);

      // Fetch user answers
      if (user) {
        const answers = await getUserAnswers(user.id);
        setUserAnswers(answers);
      }
    } catch (error) {
      console.error('Error loading results:', error);
      Alert.alert('Error', 'Failed to load results');
    } finally {
      setLoading(false);
    }
  };

  const handleUnlockReport = async () => {
    if (!user) {
      Alert.alert('Error', 'User not found');
      return;
    }

    try {
      setProcessing(true);
      setPaymentError(null);

      const payment = await openRazorpayCheckout(user.id, user.email, user.name);

      if (payment) {
        setIsPaid(true);
        Alert.alert('Success', 'Payment successful! Report unlocked.');
      }
    } catch (error: any) {
      console.error('Payment error:', error);
      setPaymentError(error.message || 'Payment failed');
      Alert.alert('Payment Error', error.message || 'Failed to process payment');
    } finally {
      setProcessing(false);
    }
  };

  const handleRetakeQuiz = () => {
    useQuizStore.getState().resetQuiz();
    navigation.navigate('Quiz');
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await signOutUser();
            } catch (error) {
              // Ignore sign-out errors (e.g. already signed out)
            } finally {
              clearUser();
              navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Loading message="Loading results..." />
      </SafeAreaView>
    );
  }

  if (!result) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Failed to load results</Text>
          <Button title="Retry" onPress={loadResults} style={styles.retryButton} />
        </View>
      </SafeAreaView>
    );
  }

  const scorePercentage = result.percentage;
  const scoreColor =
    scorePercentage >= 70 ? '#07a41e' : scorePercentage >= 50 ? '#FF9800' : '#FF3B30';

  const reportContent = (
    <View>
      {/* Score Card */}
      <View style={[styles.scoreCard, { borderTopColor: scoreColor }]}>
        <Text style={styles.scoreLabel}>Your Score</Text>
        <Text style={[styles.scorePercentage, { color: scoreColor }]}>
          {scorePercentage}%
        </Text>
        <Text style={styles.scoreDetails}>
          {result.correctAnswers} out of {result.totalQuestions} correct
        </Text>
      </View>

      {/* Performance Feedback */}
      <View style={styles.feedbackCard}>
        <Text style={styles.feedbackTitle}>Performance Summary</Text>

        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Correct Answers:</Text>
          <Text style={[styles.feedbackValue, { color: '#07a41e' }]}>
            {result.correctAnswers}
          </Text>
        </View>

        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Incorrect Answers:</Text>
          <Text style={[styles.feedbackValue, { color: '#FF3B30' }]}>
            {result.totalQuestions - result.correctAnswers}
          </Text>
        </View>

        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Accuracy:</Text>
          <Text style={[styles.feedbackValue, { color: scoreColor }]}>
            {result.percentage}%
          </Text>
        </View>

        {/* Feedback Message */}
        <View style={styles.feedbackMessage}>
          <Text style={styles.feedbackMessageText}>
            {scorePercentage >= 80
              ? '🎉 Excellent! Keep up the great work!'
              : scorePercentage >= 60
              ? '👍 Good effort! Review the topics you struggled with.'
              : '💪 Keep practicing! You\'ll improve with more attempts.'}
          </Text>
        </View>
      </View>

      {/* Detailed Answers */}
      {userAnswers.length > 0 && (
        <View style={styles.detailedCard}>
          <Text style={styles.detailedTitle}>Detailed Answers</Text>

          {userAnswers.map((answer, index) => {
            const question = questions.find((q) => q.id === answer.questionId);
            return (
              <View
                key={answer.id}
                style={[
                  styles.answerItem,
                  {
                    borderLeftColor: answer.isCorrect ? '#07a41e' : '#FF3B30',
                  },
                ]}
              >
                <View style={styles.answerHeader}>
                  <Text style={styles.answerNumber}>Q{index + 1}</Text>
                  <Text
                    style={[
                      styles.answerStatus,
                      { color: answer.isCorrect ? '#07a41e' : '#FF3B30' },
                    ]}
                  >
                    {answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </Text>
                </View>

                <Text style={styles.answerQuestion}>{question?.question}</Text>

                <View style={styles.answerOptions}>
                  <Text style={styles.answerLabel}>
                    Your Answer: <Text style={styles.answerValue}>{answer.selectedOption}</Text>
                  </Text>
                  {!answer.isCorrect && (
                    <Text style={styles.correctAnswer}>
                      Correct: <Text style={styles.correctValue}>{question?.correctOption}</Text>
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with logout */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Report</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {!isPaid ? (
          // Locked Report
          <View style={styles.lockedContent}>
            <Text style={styles.lockedIcon}>🔒</Text>
            <Text style={styles.lockedTitle}>Report Locked</Text>
            <Text style={styles.lockedMessage}>
              Unlock your detailed report to see all answers and improvements needed
            </Text>

            {/* Show basic score when locked */}
            <View style={styles.basicScoreCard}>
              <Text style={styles.scoreLabel}>Your Score</Text>
              <Text style={[styles.scorePercentage, { color: scoreColor }]}>
                {scorePercentage}%
              </Text>
            </View>

            {paymentError && (
              <View style={styles.errorAlert}>
                <Text style={styles.errorAlertText}>{paymentError}</Text>
              </View>
            )}

            <Button
              title={processing ? 'Processing...' : 'Unlock Report - ₹99'}
              onPress={handleUnlockReport}
              loading={processing}
              disabled={processing}
              style={styles.unlockButton}
            />
          </View>
        ) : (
          // Unlocked Report
          reportContent
        )}

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <Button
            title="Retake Quiz"
            onPress={handleRetakeQuiz}
            variant="primary"
            style={styles.actionButton}
          />

          <Button
            title="Share Result"
            onPress={() => Alert.alert('Share', 'Share feature coming soon')}
            variant="secondary"
            style={styles.actionButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  lockedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  blurContainer: {
    flex: 1,
  },
  lockedContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    position: 'relative',
    zIndex: 2,
  },
  lockedIcon: {
    fontSize: 80,
    marginBottom: 16,
  },
  lockedTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  lockedMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  basicScoreCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 4,
    borderTopColor: '#007AFF',
  },
  unlockButton: {
    width: '100%',
    marginTop: 16,
  },
  errorAlert: {
    backgroundColor: '#FFF3E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
    width: '100%',
  },
  errorAlertText: {
    fontSize: 14,
    color: '#E65100',
  },
  scoreCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderTopWidth: 4,
    borderTopColor: '#007AFF',
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  scorePercentage: {
    fontSize: 48,
    fontWeight: '700',
    marginBottom: 8,
  },
  scoreDetails: {
    fontSize: 14,
    color: '#666',
  },
  feedbackCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  feedbackItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  feedbackLabel: {
    fontSize: 14,
    color: '#666',
  },
  feedbackValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  feedbackMessage: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  feedbackMessageText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  detailedCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  detailedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  answerItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderLeftWidth: 4,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  answerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  answerNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  answerStatus: {
    fontSize: 12,
    fontWeight: '600',
  },
  answerQuestion: {
    fontSize: 13,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  answerOptions: {
    gap: 4,
  },
  answerLabel: {
    fontSize: 12,
    color: '#666',
  },
  answerValue: {
    fontWeight: '600',
    color: '#000',
  },
  correctAnswer: {
    fontSize: 12,
    color: '#07a41e',
  },
  correctValue: {
    fontWeight: '600',
    color: '#07a41e',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  errorText: {
    fontSize: 16,
    color: '#FF3B30',
    marginBottom: 16,
    textAlign: 'center',
  },
  retryButton: {
    minWidth: 120,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    marginBottom: 32,
  },
  actionButton: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  logoutButton: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#FF3B3015',
    borderWidth: 1,
    borderColor: '#FF3B30',
  },
  logoutText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FF3B30',
  },
});
