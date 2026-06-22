/**
 * Quiz Screen
 * Main quiz interface where users answer questions
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useQuizStore } from '../store/quizStore';
import { useAuthStore } from '../store/authStore';
import { fetchQuestions, saveUserAnswers, calculateQuizResult } from '../services/quizService';
import { QuestionCard } from '../components/QuestionCard';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { EmptyState } from '../components/EmptyState';

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

export const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const user = useAuthStore((state) => state.user);
  const questions = useQuizStore((state) => state.questions);
  const answers = useQuizStore((state) => state.answers);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const error = useQuizStore((state) => state.error);

  const setQuestions = useQuizStore((state) => state.setQuestions);
  const setAnswer = useQuizStore((state) => state.setAnswer);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const previousQuestion = useQuizStore((state) => state.previousQuestion);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const setError = useQuizStore((state) => state.setError);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      setLoadingQuestions(true);
      setError(null);

      const fetchedQuestions = await fetchQuestions();

      if (fetchedQuestions.length === 0) {
        setError('No questions available at the moment');
      } else {
        setQuestions(fetchedQuestions);
      }
    } catch (err: any) {
      console.error('Error loading questions:', err);
      setError(err.message || 'Failed to load questions');
    } finally {
      setLoadingQuestions(false);
    }
  };

  const handleSelectOption = (option: string) => {
    if (currentQuestion) {
      setAnswer(currentQuestion.id, option);
    }
  };

  const handleSubmitQuiz = async () => {
    if (!user) {
      Alert.alert('Error', 'User not found');
      return;
    }

    if (Object.keys(answers).length !== questions.length) {
      Alert.alert('Incomplete Quiz', 'Please answer all questions before submitting');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      // Save answers to database
      await saveUserAnswers(user.id, answers, questions);

      // Calculate result
      const result = calculateQuizResult(answers, questions);

      // Navigate to report screen
      navigation.replace('Report');
    } catch (err: any) {
      console.error('Error submitting quiz:', err);
      Alert.alert('Error', err.message || 'Failed to submit quiz');
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingQuestions) {
    return (
      <SafeAreaView style={styles.container}>
        <Loading message="Loading questions..." />
      </SafeAreaView>
    );
  }

  if (questions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {error ? (
            <ErrorMessage message={error} onRetry={loadQuestions} />
          ) : (
            <EmptyState
              icon="🚫"
              title="No Questions Available"
              message="There are no questions available at the moment. Please try again later."
            />
          )}

          <Button
            title="Retry"
            onPress={loadQuestions}
            style={styles.retryButton}
            variant="primary"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = answers[currentQuestion?.id] || null;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {error && (
          <ErrorMessage message={error} onRetry={loadQuestions} style={styles.errorMessage} />
        )}

        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            selectedOption={selectedOption}
            onSelectOption={handleSelectOption}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        )}

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <Button
            title="Previous"
            onPress={previousQuestion}
            disabled={currentQuestionIndex === 0}
            variant="secondary"
            style={styles.navButton}
          />

          {!isLastQuestion ? (
            <Button
              title="Next"
              onPress={nextQuestion}
              disabled={!selectedOption}
              style={styles.navButton}
            />
          ) : (
            <Button
              title={allAnswered && submitting ? 'Submitting...' : 'Submit Quiz'}
              onPress={handleSubmitQuiz}
              disabled={!allAnswered || submitting}
              loading={submitting}
              style={styles.navButton}
            />
          )}
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressIndicator}>
            {questions.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.progressDot,
                  index === currentQuestionIndex && styles.progressDotActive,
                  answers[questions[index].id] && styles.progressDotAnswered,
                ]}
              />
            ))}
          </View>
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
  errorMessage: {
    marginBottom: 16,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 24,
  },
  navButton: {
    flex: 1,
  },
  progressContainer: {
    marginTop: 24,
    marginBottom: 16,
  },
  progressIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  progressDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressDotActive: {
    backgroundColor: '#007AFF',
    borderWidth: 2,
    borderColor: '#0056b3',
  },
  progressDotAnswered: {
    backgroundColor: '#07a41e',
  },
  retryButton: {
    marginTop: 24,
  },
});
