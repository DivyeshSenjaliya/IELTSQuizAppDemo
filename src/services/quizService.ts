/**
 * Quiz Service
 * Handles quiz-related operations and calculations
 */

import { quizAPI, answersAPI } from './supabase';
import { Question, UserAnswer, QuizResult } from '../types';

/**
 * Fetch all quiz questions
 */
export const fetchQuestions = async (): Promise<Question[]> => {
  try {
    const data = await quizAPI.getQuestions();

    // Transform database field names to camelCase
    return data.map((q) => ({
      id: q.id,
      question: q.question,
      optionA: q.option_a,
      optionB: q.option_b,
      optionC: q.option_c,
      optionD: q.option_d,
      correctOption: q.correct_option,
      sortOrder: q.sort_order,
      isActive: q.is_active,
    }));
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

/**
 * Get question by ID
 */
export const getQuestionById = async (questionId: string): Promise<Question | null> => {
  try {
    const data = await quizAPI.getQuestionById(questionId);

    if (!data) return null;

    return {
      id: data.id,
      question: data.question,
      optionA: data.option_a,
      optionB: data.option_b,
      optionC: data.option_c,
      optionD: data.option_d,
      correctOption: data.correct_option,
      sortOrder: data.sort_order,
      isActive: data.is_active,
    };
  } catch (error) {
    console.error('Error fetching question:', error);
    throw error;
  }
};

/**
 * Save user answers to database
 */
export const saveUserAnswers = async (userId: string, answers: Record<string, string>, questions: Question[]) => {
  try {
    // Create answer records with correctness
    const answerRecords = Object.entries(answers).map(([questionId, selectedOption]) => {
      const question = questions.find((q) => q.id === questionId);
      const isCorrect = question?.correctOption === selectedOption;

      return {
        questionId,
        selectedOption,
        isCorrect,
      };
    });

    await answersAPI.saveUserAnswers(userId, answerRecords);
  } catch (error) {
    console.error('Error saving user answers:', error);
    throw error;
  }
};

/**
 * Get user answers
 */
export const getUserAnswers = async (userId: string): Promise<UserAnswer[]> => {
  try {
    const data = await answersAPI.getUserAnswers(userId);

    return data.map((a) => ({
      id: a.id,
      userId: a.user_id,
      questionId: a.question_id,
      selectedOption: a.selected_option,
      isCorrect: a.is_correct,
      createdAt: a.created_at,
    }));
  } catch (error) {
    console.error('Error fetching user answers:', error);
    throw error;
  }
};

/**
 * Calculate quiz result
 */
export const calculateQuizResult = (
  answers: Record<string, string>,
  questions: Question[]
): QuizResult => {
  const totalQuestions = questions.length;
  let correctAnswers = 0;

  Object.entries(answers).forEach(([questionId, selectedOption]) => {
    const question = questions.find((q) => q.id === questionId);

    if (question && question.correctOption === selectedOption) {
      correctAnswers += 1;
    }
  });

  const percentage = (correctAnswers / totalQuestions) * 100;
  const score = correctAnswers; // Simple score = number of correct answers

  return {
    totalQuestions,
    correctAnswers,
    percentage: Math.round(percentage),
    score,
  };
};

/**
 * Validate quiz is complete
 */
export const isQuizComplete = (
  answers: Record<string, string>,
  totalQuestions: number
): boolean => {
  return Object.keys(answers).length === totalQuestions;
};

/**
 * Get option key from option label
 */
export const getOptionKey = (option: string): 'A' | 'B' | 'C' | 'D' | null => {
  const mapping: Record<string, 'A' | 'B' | 'C' | 'D'> = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
  };

  return mapping[option] || null;
};
