/**
 * Dashboard Screen
 * Central home view providing student progress metrics, daily challenges, and quick module actions
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { useAuthStore } from '../store/authStore';
import { useUserProfileStore } from '../store/userProfileStore';
import { DashboardService } from '../services/dashboardService';

export const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const user = useAuthStore((state) => state.user);
  const profile = useUserProfileStore((state) => state.profile);

  const metrics = DashboardService.getDashboardMetrics(
    profile.targetBand,
    profile.currentEstimatedBand,
    profile.examDate,
    profile.studyStreakDays,
    profile.dailyStudyMinutes,
    profile.bookmarkedQuestionIds.length,
    profile.mistakeQuestionIds.length
  );

  const recommendation = DashboardService.getReadinessRecommendation(
    metrics.bandGap,
    metrics.daysUntilExam
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.userName}>{user?.name || 'IELTS Candidate'}</Text>
          </View>
          <View style={styles.streakBadge}>
            <Text style={styles.streakIcon}>🔥</Text>
            <Text style={styles.streakCount}>{metrics.studyStreakDays}d Streak</Text>
          </View>
        </View>

        {/* Band Score & Exam Countdown Card */}
        <View style={styles.heroCard}>
          <View style={styles.heroHeader}>
            <View>
              <Text style={styles.heroSub}>TARGET BAND</Text>
              <Text style={styles.heroBand}>Band {metrics.targetBand.toFixed(1)}</Text>
            </View>
            <View style={styles.dividerVertical} />
            <View>
              <Text style={styles.heroSub}>ESTIMATED BAND</Text>
              <Text style={styles.currentBand}>Band {metrics.currentEstimatedBand.toFixed(1)}</Text>
            </View>
            <View style={styles.dividerVertical} />
            <View>
              <Text style={styles.heroSub}>EXAM IN</Text>
              <Text style={styles.heroDays}>{metrics.daysUntilExam} Days</Text>
            </View>
          </View>

          {/* Daily Goal Progress Bar */}
          <View style={styles.progressSection}>
            <View style={styles.progressLabelRow}>
              <Text style={styles.progressLabel}>Daily Study Goal</Text>
              <Text style={styles.progressValue}>
                {metrics.todayMinutesStudied} / {metrics.dailyGoalMinutes} mins ({metrics.todayGoalCompletionPercent}%)
              </Text>
            </View>
            <View style={styles.progressBarTrack}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${metrics.todayGoalCompletionPercent}%` },
                ]}
              />
            </View>
          </View>

          {/* Intelligent Recommendation */}
          <View style={styles.recommendationBox}>
            <Text style={styles.recommendationIcon}>💡</Text>
            <Text style={styles.recommendationText}>{recommendation}</Text>
          </View>
        </View>

        {/* Daily Challenge Card */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Daily Challenge</Text>
          <Text style={styles.badgeNew}>TODAY</Text>
        </View>
        <TouchableOpacity
          style={styles.challengeCard}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('ReadingPractice')}
        >
          <View style={styles.challengeLeft}>
            <Text style={styles.challengeSkill}>{metrics.dailyChallenge.skill.toUpperCase()}</Text>
            <Text style={styles.challengeTitle}>{metrics.dailyChallenge.title}</Text>
            <View style={styles.challengeMetaRow}>
              <Text style={styles.challengeMeta}>⏱ {metrics.dailyChallenge.estimatedMinutes} mins</Text>
              <Text style={styles.challengeMeta}>🎯 {metrics.dailyChallenge.difficulty}</Text>
            </View>
          </View>
          <View style={styles.startChallengeButton}>
            <Text style={styles.startChallengeText}>Start</Text>
          </View>
        </TouchableOpacity>

        {/* Quick Skill Practice Grid */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>IELTS Skill Modules</Text>
        </View>
        <View style={styles.skillGrid}>
          {metrics.skillsProgress.map((item) => (
            <TouchableOpacity
              key={item.skill}
              style={[styles.skillCard, { borderTopColor: item.themeColor }]}
              activeOpacity={0.8}
              onPress={() => {
                if (item.skill === 'reading') navigation.navigate('ReadingPractice');
                else if (item.skill === 'listening') navigation.navigate('ListeningPractice');
                else if (item.skill === 'writing') navigation.navigate('WritingPractice');
                else if (item.skill === 'speaking') navigation.navigate('SpeakingPractice');
              }}
            >
              <View style={styles.skillIconContainer}>
                <Text style={styles.skillIcon}>{item.icon}</Text>
                <Text style={[styles.skillBand, { color: item.themeColor }]}>
                  {item.estimatedBand.toFixed(1)}
                </Text>
              </View>
              <Text style={styles.skillTitle}>{item.title}</Text>
              <Text style={styles.skillProgressSub}>
                {item.completedExercises}/{item.totalAvailableExercises} completed • {item.accuracyRate}% acc
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Study Tools & Quick Practice */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Study Tools & Review</Text>
        </View>
        <View style={styles.toolsRow}>
          <TouchableOpacity
            style={styles.toolCard}
            onPress={() => navigation.navigate('VocabularyReview')}
          >
            <Text style={styles.toolIcon}>🧠</Text>
            <Text style={styles.toolTitle}>Vocab SRS</Text>
            <Text style={styles.toolSub}>{metrics.spacedRepetitionDueCount} due</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.toolCard}
            onPress={() => navigation.navigate('MistakeNotebook')}
          >
            <Text style={styles.toolIcon}>📝</Text>
            <Text style={styles.toolTitle}>Mistakes</Text>
            <Text style={styles.toolSub}>{metrics.mistakesCount} logged</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.toolCard}
            onPress={() => navigation.navigate('BookmarksScreen')}
          >
            <Text style={styles.toolIcon}>🔖</Text>
            <Text style={styles.toolTitle}>Bookmarks</Text>
            <Text style={styles.toolSub}>{metrics.bookmarksCount} saved</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.toolCard}
            onPress={() => navigation.navigate('Quiz')}
          >
            <Text style={styles.toolIcon}>⚡️</Text>
            <Text style={styles.toolTitle}>Diagnostic</Text>
            <Text style={styles.toolSub}>Rapid quiz</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  streakIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  streakCount: {
    fontSize: 13,
    fontWeight: '700',
    color: '#D97706',
  },
  heroCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  heroSub: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  heroBand: {
    fontSize: 22,
    fontWeight: '800',
    color: '#38BDF8',
  },
  currentBand: {
    fontSize: 22,
    fontWeight: '800',
    color: '#34D399',
  },
  heroDays: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FBBF24',
  },
  dividerVertical: {
    width: 1,
    height: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  progressSection: {
    marginBottom: 16,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 12,
    color: '#CBD5E1',
    fontWeight: '500',
  },
  progressValue: {
    fontSize: 12,
    color: '#94A3B8',
  },
  progressBarTrack: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#38BDF8',
    borderRadius: 4,
  },
  recommendationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    padding: 12,
    borderRadius: 10,
  },
  recommendationIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  recommendationText: {
    fontSize: 12,
    color: '#E2E8F0',
    flex: 1,
    lineHeight: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },
  badgeNew: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2563EB',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  challengeCard: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  challengeLeft: {
    flex: 1,
    marginRight: 12,
  },
  challengeSkill: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 4,
  },
  challengeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 6,
  },
  challengeMetaRow: {
    flexDirection: 'row',
    gap: 12,
  },
  challengeMeta: {
    fontSize: 12,
    color: '#64748B',
  },
  startChallengeButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  startChallengeText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  skillCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    borderTopWidth: 4,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  skillIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  skillIcon: {
    fontSize: 22,
  },
  skillBand: {
    fontSize: 15,
    fontWeight: '800',
  },
  skillTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 4,
  },
  skillProgressSub: {
    fontSize: 11,
    color: '#64748B',
    lineHeight: 14,
  },
  toolsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  toolCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  toolIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  toolTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 2,
  },
  toolSub: {
    fontSize: 10,
    color: '#64748B',
  },
});
