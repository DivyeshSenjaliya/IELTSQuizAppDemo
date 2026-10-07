/**
 * Profile Screen
 * Candidate study plan configuration, exam target adjustments, subscription status, and account settings
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { useAuthStore } from '../store/authStore';
import { useUserProfileStore } from '../store/userProfileStore';
import { usePaymentStore } from '../store/paymentStore';
import { signOutUser } from '../services/authService';

export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  const profile = useUserProfileStore((state) => state.profile);
  const setTargetBand = useUserProfileStore((state) => state.setTargetBand);
  const isPaid = usePaymentStore((state) => state.isPaid);

  const handleLogout = async () => {
    try {
      await signOutUser();
      clearUser();
      navigation.replace('Login');
    } catch (err: any) {
      Alert.alert('Logout Error', err.message || 'Failed to logout');
    }
  };

  const bandOptions = [6.5, 7.0, 7.5, 8.0, 8.5, 9.0];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.name ? user.name.charAt(0).toUpperCase() : 'C'}
            </Text>
          </View>
          <Text style={styles.userName}>{user?.name || 'IELTS Candidate'}</Text>
          <Text style={styles.userEmail}>{user?.email || 'candidate@example.com'}</Text>
          <View style={styles.tierBadge}>
            <Text style={styles.tierText}>
              {isPaid ? '⭐ IELTS Pro Premium' : 'Free Candidate Tier'}
            </Text>
          </View>
        </View>

        {/* Study Goals Configuration */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎯 Target Band Goal</Text>
          <View style={styles.bandOptionsRow}>
            {bandOptions.map((band) => (
              <TouchableOpacity
                key={band}
                style={[
                  styles.bandButton,
                  profile.targetBand === band && styles.bandButtonActive,
                ]}
                onPress={() => setTargetBand(band)}
              >
                <Text
                  style={[
                    styles.bandButtonText,
                    profile.targetBand === band && styles.bandButtonTextActive,
                  ]}
                >
                  {band.toFixed(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Study Statistics Card */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 Study Lifetime Statistics</Text>
          <View style={styles.statsCard}>
            <View style={styles.statCol}>
              <Text style={styles.statNum}>{profile.studyStreakDays} days</Text>
              <Text style={styles.statLabel}>Current Streak</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statCol}>
              <Text style={styles.statNum}>{profile.completedQuizzesCount}</Text>
              <Text style={styles.statLabel}>Quizzes Done</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statCol}>
              <Text style={styles.statNum}>{profile.completedMockTestsCount}</Text>
              <Text style={styles.statLabel}>Mocks Done</Text>
            </View>
          </View>
        </View>

        {/* Exam Schedule */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📅 Exam Schedule</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoKey}>Exam Target Date</Text>
            <Text style={styles.infoVal}>{profile.examDate || 'Not scheduled'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoKey}>Daily Study Time Target</Text>
            <Text style={styles.infoVal}>{profile.dailyStudyMinutes} mins / day</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoKey}>Focus Areas</Text>
            <Text style={styles.infoVal}>{profile.weakSkills.join(', ').toUpperCase()}</Text>
          </View>
        </View>

        {/* Subscription & Reports */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💳 Membership & Diagnostic Reports</Text>
          <TouchableOpacity
            style={styles.membershipCard}
            onPress={() => navigation.navigate('Report')}
          >
            <View>
              <Text style={styles.membershipTitle}>Diagnostic Performance Report</Text>
              <Text style={styles.membershipSub}>
                {isPaid ? 'Full breakdown unlocked' : 'Unlock detailed score evaluation'}
              </Text>
            </View>
            <Text style={styles.membershipAction}>{isPaid ? 'View →' : 'Upgrade →'}</Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
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
    gap: 20,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  userName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
  },
  userEmail: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  tierBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 8,
  },
  tierText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#B45309',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },
  bandOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  bandButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
  },
  bandButtonActive: {
    backgroundColor: '#2563EB',
  },
  bandButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  bandButtonTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 10,
  },
  statCol: {
    flex: 1,
    alignItems: 'center',
  },
  statNum: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  statLabel: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E2E8F0',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  infoKey: {
    fontSize: 13,
    color: '#64748B',
  },
  infoVal: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
  },
  membershipCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    padding: 14,
    borderRadius: 10,
  },
  membershipTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  membershipSub: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  membershipAction: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
  },
  logoutButton: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#DC2626',
  },
});
