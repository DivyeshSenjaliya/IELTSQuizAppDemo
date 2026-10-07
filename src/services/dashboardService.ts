/**
 * Dashboard Service
 * Aggregates study statistics, readiness projections, and daily recommendations
 */

export interface SkillProgressSummary {
  skill: 'reading' | 'listening' | 'writing' | 'speaking';
  title: string;
  estimatedBand: number;
  completedExercises: number;
  totalAvailableExercises: number;
  accuracyRate: number;
  icon: string;
  themeColor: string;
}

export interface DashboardMetrics {
  targetBand: number;
  currentEstimatedBand: number;
  bandGap: number;
  daysUntilExam: number;
  studyStreakDays: number;
  dailyGoalMinutes: number;
  todayMinutesStudied: number;
  todayGoalCompletionPercent: number;
  spacedRepetitionDueCount: number;
  mistakesCount: number;
  bookmarksCount: number;
  skillsProgress: SkillProgressSummary[];
  dailyChallenge: {
    id: string;
    skill: string;
    title: string;
    difficulty: string;
    estimatedMinutes: number;
    completed: boolean;
  };
}

export class DashboardService {
  public static calculateDaysRemaining(examDate: string | null): number {
    if (!examDate) return 60;
    const target = new Date(examDate).getTime();
    const now = Date.now();
    const diff = target - now;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }

  public static getDashboardMetrics(
    targetBand: number,
    currentEstimatedBand: number,
    examDate: string | null,
    streakDays: number,
    dailyGoalMinutes: number,
    bookmarksCount: number,
    mistakesCount: number
  ): DashboardMetrics {
    const daysUntilExam = this.calculateDaysRemaining(examDate);
    const bandGap = Math.max(0, Math.round((targetBand - currentEstimatedBand) * 10) / 10);
    const todayMinutesStudied = 25; // Recorded today
    const todayGoalCompletionPercent = Math.min(100, Math.round((todayMinutesStudied / dailyGoalMinutes) * 100));

    const skillsProgress: SkillProgressSummary[] = [
      {
        skill: 'reading',
        title: 'IELTS Reading',
        estimatedBand: 7.0,
        completedExercises: 24,
        totalAvailableExercises: 60,
        accuracyRate: 76,
        icon: '📖',
        themeColor: '#3B82F6',
      },
      {
        skill: 'listening',
        title: 'IELTS Listening',
        estimatedBand: 7.5,
        completedExercises: 31,
        totalAvailableExercises: 50,
        accuracyRate: 82,
        icon: '🎧',
        themeColor: '#10B981',
      },
      {
        skill: 'writing',
        title: 'IELTS Writing',
        estimatedBand: 6.0,
        completedExercises: 12,
        totalAvailableExercises: 40,
        accuracyRate: 65,
        icon: '✍️',
        themeColor: '#F59E0B',
      },
      {
        skill: 'speaking',
        title: 'IELTS Speaking',
        estimatedBand: 6.5,
        completedExercises: 18,
        totalAvailableExercises: 45,
        accuracyRate: 71,
        icon: '🎙️',
        themeColor: '#8B5CF6',
      },
    ];

    return {
      targetBand,
      currentEstimatedBand,
      bandGap,
      daysUntilExam,
      studyStreakDays: streakDays,
      dailyGoalMinutes,
      todayMinutesStudied,
      todayGoalCompletionPercent,
      spacedRepetitionDueCount: 16,
      mistakesCount,
      bookmarksCount,
      skillsProgress,
      dailyChallenge: {
        id: 'DC_2026_10_07',
        skill: 'Reading',
        title: 'Matching Headings: The Architecture of Coral Reefs',
        difficulty: 'Academic Band 7.5',
        estimatedMinutes: 12,
        completed: false,
      },
    };
  }

  public static getReadinessRecommendation(bandGap: number, daysRemaining: number): string {
    if (daysRemaining <= 14 && bandGap > 0.5) {
      return 'Critical preparation phase: Focus heavily on full timed mock exams and error analysis.';
    }
    if (bandGap <= 0.5) {
      return 'On track for target band! Refine complex sentence structures and expand band 8+ academic collocations.';
    }
    return 'Consistent daily practice recommended: Complete 1 full passage and 1 writing Task 2 outline every day.';
  }
}
