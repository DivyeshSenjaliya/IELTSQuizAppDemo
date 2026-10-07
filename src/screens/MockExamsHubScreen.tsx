/**
 * Mock Exams Hub Screen
 * Cambridge-style full timed examination papers and historical attempt records
 */

import React, { useState } from 'react';
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

export const MockExamsHubScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filterType, setFilterType] = useState<'academic' | 'general'>('academic');

  const mockPapers = [
    {
      id: 'CAMBRIDGE_PAPER_1',
      title: 'Cambridge Official Practice Test 1',
      edition: 'Academic Examination Session',
      durationMinutes: 165,
      questionsCount: 82,
      lastScore: 'Band 7.0',
      lastAttempted: 'Oct 02, 2026',
      status: 'completed',
    },
    {
      id: 'CAMBRIDGE_PAPER_2',
      title: 'Cambridge Official Practice Test 2',
      edition: 'Academic Examination Session',
      durationMinutes: 165,
      questionsCount: 82,
      lastScore: 'Band 6.5',
      lastAttempted: 'Sep 27, 2026',
      status: 'completed',
    },
    {
      id: 'CAMBRIDGE_PAPER_3',
      title: 'Cambridge Official Practice Test 3',
      edition: 'Academic Examination Session',
      durationMinutes: 165,
      questionsCount: 82,
      lastScore: null,
      lastAttempted: null,
      status: 'not_started',
    },
    {
      id: 'CAMBRIDGE_PAPER_4',
      title: 'Cambridge Official Practice Test 4',
      edition: 'Academic Examination Session',
      durationMinutes: 165,
      questionsCount: 82,
      lastScore: null,
      lastAttempted: null,
      status: 'not_started',
    },
    {
      id: 'CAMBRIDGE_PAPER_5',
      title: 'Cambridge Official Practice Test 5',
      edition: 'Academic Examination Session',
      durationMinutes: 165,
      questionsCount: 82,
      lastScore: null,
      lastAttempted: null,
      status: 'not_started',
    },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <View style={styles.header}>
        <Text style={styles.title}>Full Mock Exams</Text>
        <Text style={styles.subtitle}>
          Simulate official test day under authentic Cambridge exam conditions
        </Text>
      </View>

      {/* Filter Selector */}
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={[styles.filterBtn, filterType === 'academic' && styles.filterBtnActive]}
          onPress={() => setFilterType('academic')}
        >
          <Text style={[styles.filterText, filterType === 'academic' && styles.filterTextActive]}>
            Academic Module
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterBtn, filterType === 'general' && styles.filterBtnActive]}
          onPress={() => setFilterType('general')}
        >
          <Text style={[styles.filterText, filterType === 'general' && styles.filterTextActive]}>
            General Training
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Exam Protocol Banner */}
        <View style={styles.protocolBanner}>
          <Text style={styles.protocolTitle}>📋 Official Exam Protocol</Text>
          <Text style={styles.protocolText}>
            • Listening: 30 mins audio + 10 mins transfer time{'\n'}
            • Reading: 60 mins (3 passages, 40 questions){'\n'}
            • Writing: 60 mins (Task 1 150w + Task 2 250w){'\n'}
            • Speaking: 11-14 mins audio evaluation interview
          </Text>
        </View>

        {/* Paper List */}
        {mockPapers.map((paper) => (
          <View key={paper.id} style={styles.paperCard}>
            <View style={styles.paperTop}>
              <View style={styles.paperTagRow}>
                <Text style={styles.paperTag}>CAMBRIDGE SIMULATION</Text>
                {paper.lastScore && (
                  <Text style={styles.lastScoreTag}>{paper.lastScore}</Text>
                )}
              </View>
              <Text style={styles.paperTitle}>{paper.title}</Text>
              <Text style={styles.paperEdition}>{paper.edition}</Text>
            </View>

            <View style={styles.paperDetailsRow}>
              <Text style={styles.paperDetail}>⏱ 2h 45m Timed</Text>
              <Text style={styles.paperDetail}>📊 All 4 Skills</Text>
              <Text style={styles.paperDetail}>🎯 Band 1-9 Calc</Text>
            </View>

            <View style={styles.paperActionRow}>
              <Text style={styles.attemptStatus}>
                {paper.lastAttempted
                  ? `Last attempt: ${paper.lastAttempted}`
                  : 'Ready to start'}
              </Text>
              <TouchableOpacity
                style={styles.startExamBtn}
                onPress={() => navigation.navigate('MockExamSession', { examId: paper.id })}
              >
                <Text style={styles.startExamText}>
                  {paper.lastAttempted ? 'Retake Exam' : 'Begin Exam'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 16,
  },
  filterBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
  },
  filterBtnActive: {
    backgroundColor: '#0F172A',
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  filterTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 14,
  },
  protocolBanner: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB',
  },
  protocolTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 6,
  },
  protocolText: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
  },
  paperCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  paperTop: {
    marginBottom: 12,
  },
  paperTagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  paperTag: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4F46E5',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  lastScoreTag: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  paperTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 2,
  },
  paperEdition: {
    fontSize: 12,
    color: '#64748B',
  },
  paperDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
    padding: 10,
    borderRadius: 8,
    marginBottom: 14,
  },
  paperDetail: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '500',
  },
  paperActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attemptStatus: {
    fontSize: 12,
    color: '#64748B',
  },
  startExamBtn: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  startExamText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});
