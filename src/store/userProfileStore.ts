/**
 * User Profile Store
 * Manages student study goals, exam date, streaks, target bands, and bookmarks
 */

import { create } from 'zustand';

export interface UserStudyProfile {
  targetBand: number;
  currentEstimatedBand: number;
  examDate: string | null;
  dailyStudyMinutes: number;
  studyStreakDays: number;
  lastActiveDate: string | null;
  weakSkills: Array<'reading' | 'listening' | 'writing' | 'speaking'>;
  completedQuizzesCount: number;
  completedMockTestsCount: number;
  totalStudyMinutes: number;
  bookmarkedQuestionIds: string[];
  mistakeQuestionIds: string[];
}

export interface UserProfileState {
  profile: UserStudyProfile;
  setTargetBand: (band: number) => void;
  setExamDate: (date: string | null) => void;
  setDailyStudyMinutes: (minutes: number) => void;
  incrementStreak: () => void;
  recordStudySession: (minutes: number) => void;
  toggleBookmark: (questionId: string) => void;
  recordMistake: (questionId: string) => void;
  resolveMistake: (questionId: string) => void;
  updateWeakSkills: (skills: Array<'reading' | 'listening' | 'writing' | 'speaking'>) => void;
  recordCompletedQuiz: (score: number) => void;
  recordCompletedMockTest: (overallBand: number) => void;
  resetProfile: () => void;
}

const DEFAULT_PROFILE: UserStudyProfile = {
  targetBand: 7.5,
  currentEstimatedBand: 6.5,
  examDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 45 days ahead
  dailyStudyMinutes: 45,
  studyStreakDays: 5,
  lastActiveDate: new Date().toISOString().split('T')[0],
  weakSkills: ['writing', 'speaking'],
  completedQuizzesCount: 14,
  completedMockTestsCount: 3,
  totalStudyMinutes: 720,
  bookmarkedQuestionIds: ['Q_READ_001', 'Q_LIST_004', 'AWL_SUB1_003'],
  mistakeQuestionIds: ['Q_READ_007', 'Q_LIST_012', 'GRAM_COND_002'],
};

export const useUserProfileStore = create<UserProfileState>((set) => ({
  profile: DEFAULT_PROFILE,

  setTargetBand: (targetBand) =>
    set((state) => ({
      profile: { ...state.profile, targetBand: Math.max(1, Math.min(9, targetBand)) },
    })),

  setExamDate: (examDate) =>
    set((state) => ({
      profile: { ...state.profile, examDate },
    })),

  setDailyStudyMinutes: (dailyStudyMinutes) =>
    set((state) => ({
      profile: { ...state.profile, dailyStudyMinutes: Math.max(10, dailyStudyMinutes) },
    })),

  incrementStreak: () =>
    set((state) => {
      const today = new Date().toISOString().split('T')[0];
      const isConsecutive = state.profile.lastActiveDate !== today;
      return {
        profile: {
          ...state.profile,
          studyStreakDays: isConsecutive
            ? state.profile.studyStreakDays + 1
            : state.profile.studyStreakDays,
          lastActiveDate: today,
        },
      };
    }),

  recordStudySession: (minutes) =>
    set((state) => ({
      profile: {
        ...state.profile,
        totalStudyMinutes: state.profile.totalStudyMinutes + minutes,
        lastActiveDate: new Date().toISOString().split('T')[0],
      },
    })),

  toggleBookmark: (questionId) =>
    set((state) => {
      const exists = state.profile.bookmarkedQuestionIds.includes(questionId);
      const bookmarkedQuestionIds = exists
        ? state.profile.bookmarkedQuestionIds.filter((id) => id !== questionId)
        : [...state.profile.bookmarkedQuestionIds, questionId];
      return {
        profile: { ...state.profile, bookmarkedQuestionIds },
      };
    }),

  recordMistake: (questionId) =>
    set((state) => {
      if (state.profile.mistakeQuestionIds.includes(questionId)) return state;
      return {
        profile: {
          ...state.profile,
          mistakeQuestionIds: [...state.profile.mistakeQuestionIds, questionId],
        },
      };
    }),

  resolveMistake: (questionId) =>
    set((state) => ({
      profile: {
        ...state.profile,
        mistakeQuestionIds: state.profile.mistakeQuestionIds.filter((id) => id !== questionId),
      },
    })),

  updateWeakSkills: (weakSkills) =>
    set((state) => ({
      profile: { ...state.profile, weakSkills },
    })),

  recordCompletedQuiz: () =>
    set((state) => ({
      profile: {
        ...state.profile,
        completedQuizzesCount: state.profile.completedQuizzesCount + 1,
      },
    })),

  recordCompletedMockTest: (overallBand) =>
    set((state) => ({
      profile: {
        ...state.profile,
        completedMockTestsCount: state.profile.completedMockTestsCount + 1,
        currentEstimatedBand: overallBand,
      },
    })),

  resetProfile: () =>
    set(() => ({
      profile: DEFAULT_PROFILE,
    })),
}));
