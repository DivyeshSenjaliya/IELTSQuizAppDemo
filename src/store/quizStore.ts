import { create } from 'zustand';
import { QuizState, Question } from '../types';

/**
 * Quiz Store - Manages quiz questions, answers, and navigation
 */
export const useQuizStore = create<QuizState>((set, get) => ({
  questions: [],
  answers: {},
  currentQuestionIndex: 0,
  isLoading: false,
  error: null,

  setQuestions: (questions: Question[]) => set({ questions, error: null }),

  setAnswer: (questionId: string, option: string) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: option,
      },
    })),

  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.min(
        state.currentQuestionIndex + 1,
        state.questions.length - 1
      ),
    })),

  previousQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
    })),

  resetQuiz: () =>
    set({
      answers: {},
      currentQuestionIndex: 0,
      questions: [],
      error: null,
    }),

  setLoading: (loading: boolean) => set({ isLoading: loading }),

  setError: (error: string | null) => set({ error }),
}));
