/**
 * Dashboard Service Unit Tests
 */

import { DashboardService } from '../dashboardService';

describe('DashboardService', () => {
  describe('calculateDaysRemaining', () => {
    it('returns 60 as default if examDate is null', () => {
      expect(DashboardService.calculateDaysRemaining(null)).toBe(60);
    });

    it('returns positive days count for future date', () => {
      const futureDate = new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const days = DashboardService.calculateDaysRemaining(futureDate);
      expect(days).toBeGreaterThanOrEqual(19);
      expect(days).toBeLessThanOrEqual(21);
    });

    it('returns 0 for past date', () => {
      const pastDate = '2020-01-01';
      expect(DashboardService.calculateDaysRemaining(pastDate)).toBe(0);
    });
  });

  describe('getDashboardMetrics', () => {
    it('computes correct band gap and goal percentages', () => {
      const metrics = DashboardService.getDashboardMetrics(
        7.5,
        6.5,
        '2026-12-31',
        10,
        50,
        5,
        3
      );

      expect(metrics.targetBand).toBe(7.5);
      expect(metrics.currentEstimatedBand).toBe(6.5);
      expect(metrics.bandGap).toBe(1.0);
      expect(metrics.studyStreakDays).toBe(10);
      expect(metrics.todayMinutesStudied).toBe(25);
      expect(metrics.todayGoalCompletionPercent).toBe(50); // 25 / 50 * 100
      expect(metrics.bookmarksCount).toBe(5);
      expect(metrics.mistakesCount).toBe(3);
      expect(metrics.skillsProgress).toHaveLength(4);
      expect(metrics.dailyChallenge.skill).toBe('Reading');
    });
  });

  describe('getReadinessRecommendation', () => {
    it('flags critical exam phase when days <= 14 and gap > 0.5', () => {
      const rec = DashboardService.getReadinessRecommendation(1.0, 10);
      expect(rec).toContain('Critical preparation phase');
    });

    it('provides positive reinforcement when band gap <= 0.5', () => {
      const rec = DashboardService.getReadinessRecommendation(0.5, 30);
      expect(rec).toContain('On track for target band');
    });

    it('suggests daily practice when further out', () => {
      const rec = DashboardService.getReadinessRecommendation(1.5, 45);
      expect(rec).toContain('Consistent daily practice recommended');
    });
  });
});
