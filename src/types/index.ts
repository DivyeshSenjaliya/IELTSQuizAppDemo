/**
 * Type definitions for the IELTS Quiz App
 */

// Auth Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl: string | null;
  isPaid: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// Quiz Types
export interface Question {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
  sortOrder: number;
  isActive: boolean;
}

export interface QuizAnswer {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
}

export interface QuizState {
  questions: Question[];
  answers: Record<string, string>; // questionId -> selectedOption
  currentQuestionIndex: number;
  isLoading: boolean;
  error: string | null;
  setQuestions: (questions: Question[]) => void;
  setAnswer: (questionId: string, option: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export interface UserAnswer {
  id: string;
  userId: string;
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
  createdAt: string;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  score: number;
}

// Payment Types
export interface Payment {
  id: string;
  userId: string;
  razorpayPaymentId: string;
  razorpayOrderId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
}

export interface PaymentState {
  isPaid: boolean;
  isPaymentLoading: boolean;
  paymentError: string | null;
  lastPayment: Payment | null;
  setIsPaid: (isPaid: boolean) => void;
  setPaymentLoading: (loading: boolean) => void;
  setPaymentError: (error: string | null) => void;
  setLastPayment: (payment: Payment) => void;
}

// Navigation Types
export type MainTabParamList = {
  Dashboard: undefined;
  PracticeHub: undefined;
  MockExamsHub: undefined;
  StudyHub: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  MainTabs: undefined;
  Quiz: undefined;
  Report: undefined;
  ReadingPractice: { passageId?: string } | undefined;
  ListeningPractice: { sectionIndex?: number } | undefined;
  WritingPractice: { taskType?: 1 | 2 } | undefined;
  SpeakingPractice: { partIndex?: 1 | 2 | 3 } | undefined;
  MockExamSession: { examId?: string } | undefined;
  VocabularyReview: undefined;
  GrammarPractice: undefined;
  MistakeNotebook: undefined;
  BookmarksScreen: undefined;
};

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Google Sign-In Types
export interface GoogleSignInResponse {
  idToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    photo: string;
  };
}
