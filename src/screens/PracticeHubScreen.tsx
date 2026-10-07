/**
 * Practice Hub Screen
 * Allows candidates to drill individual IELTS modules and specific question types
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

type ModuleTab = 'reading' | 'listening' | 'writing' | 'speaking';

export const PracticeHubScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeTab, setActiveTab] = useState<ModuleTab>('reading');

  const readingModules = [
    {
      id: 'READ_ACAD_01',
      title: 'Academic Reading - Passage 1: Biodiversity in Marine Sanctuaries',
      type: 'True/False/Not Given & Summary Completion',
      difficulty: 'Band 6.5 - 7.5',
      questionsCount: 13,
      durationMinutes: 20,
    },
    {
      id: 'READ_ACAD_02',
      title: 'Academic Reading - Passage 2: The Evolution of Ancient Metallurgy',
      type: 'Matching Headings & Sentence Completion',
      difficulty: 'Band 7.0 - 8.0',
      questionsCount: 13,
      durationMinutes: 20,
    },
    {
      id: 'READ_ACAD_03',
      title: 'Academic Reading - Passage 3: Cognitive Neural Plasticity',
      type: 'Multiple Choice & Matching Features',
      difficulty: 'Band 7.5 - 9.0',
      questionsCount: 14,
      durationMinutes: 20,
    },
    {
      id: 'READ_GT_01',
      title: 'General Training - Section 1: Community Notice Boards',
      type: 'Short Answer & Note Completion',
      difficulty: 'General Training',
      questionsCount: 14,
      durationMinutes: 20,
    },
  ];

  const listeningModules = [
    {
      id: 'LIST_SEC_1',
      title: 'Section 1: Rental Car & Insurance Inquiries',
      type: 'Form & Note Completion',
      difficulty: 'Conversational / Everyday',
      questionsCount: 10,
      durationMinutes: 7,
    },
    {
      id: 'LIST_SEC_2',
      title: 'Section 2: Botanical Gardens Guided Tour',
      type: 'Map Labeling & Multiple Choice',
      difficulty: 'Monologue / Social Context',
      questionsCount: 10,
      durationMinutes: 8,
    },
    {
      id: 'LIST_SEC_3',
      title: 'Section 3: Academic Tutor Consultation on Thesis Draft',
      type: 'Discussion Matching & Table Completion',
      difficulty: 'Educational Dialogue',
      questionsCount: 10,
      durationMinutes: 9,
    },
    {
      id: 'LIST_SEC_4',
      title: 'Section 4: University Lecture on Deep-Sea Bioluminescence',
      type: 'Academic Lecture Summary Completion',
      difficulty: 'Academic Monologue',
      questionsCount: 10,
      durationMinutes: 10,
    },
  ];

  const writingModules = [
    {
      id: 'WRITE_TASK_1_ACAD',
      title: 'Task 1 (Academic): Renewable Energy Adoption (Line Graph & Bar Chart)',
      type: 'Data Matrix Analysis & Overview Synthesis',
      difficulty: '150+ Words • 20 mins',
      taskType: 1 as const,
    },
    {
      id: 'WRITE_TASK_1_MAP',
      title: 'Task 1 (Academic): Urban Waterfront Redevelopment (1995 vs Present)',
      type: 'Map Comparison & Spatial Evolution',
      difficulty: '150+ Words • 20 mins',
      taskType: 1 as const,
    },
    {
      id: 'WRITE_TASK_2_OPINION',
      title: 'Task 2: Artificial Intelligence & Future Workforce Displacement',
      type: 'To What Extent Do You Agree or Disagree?',
      difficulty: '250+ Words • 40 mins',
      taskType: 2 as const,
    },
    {
      id: 'WRITE_TASK_2_PROBLEM',
      title: 'Task 2: Urban Congestion and Deteriorating Public Transit',
      type: 'Causes & Solutions Essay',
      difficulty: '250+ Words • 40 mins',
      taskType: 2 as const,
    },
  ];

  const speakingModules = [
    {
      id: 'SPEAK_PART_1',
      title: 'Part 1: Hometown, Studies & Technological Routine',
      type: 'Familiar Topics & Fluency Warmup',
      difficulty: '4-5 mins',
      partIndex: 1 as const,
    },
    {
      id: 'SPEAK_PART_2',
      title: 'Part 2: Describe an Environmental Initiative You Participated In',
      type: 'Cue Card & 1-min Prep + 2-min Speech',
      difficulty: '3-4 mins',
      partIndex: 2 as const,
    },
    {
      id: 'SPEAK_PART_3',
      title: 'Part 3: Global Climate Policy & Individual Responsibility',
      type: 'Abstract Discussion & Complex Reasoning',
      difficulty: '4-5 mins',
      partIndex: 3 as const,
    },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <View style={styles.header}>
        <Text style={styles.title}>Practice Center</Text>
        <Text style={styles.subtitle}>Targeted drills by skill, section, and question type</Text>
      </View>

      {/* Module Selector Tabs */}
      <View style={styles.tabContainer}>
        {(['reading', 'listening', 'writing', 'speaking'] as ModuleTab[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'reading' &&
          readingModules.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('ReadingPractice', { passageId: item.id })}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardTag}>READING DRILL</Text>
                <Text style={styles.cardDifficulty}>{item.difficulty}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardType}>{item.type}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardMeta}>📝 {item.questionsCount} questions</Text>
                <Text style={styles.cardMeta}>⏱ {item.durationMinutes} minutes</Text>
                <Text style={styles.actionLink}>Start Passage →</Text>
              </View>
            </TouchableOpacity>
          ))}

        {activeTab === 'listening' &&
          listeningModules.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('ListeningPractice')}
            >
              <View style={styles.cardHeader}>
                <Text style={[styles.cardTag, { color: '#059669', backgroundColor: '#D1FAE5' }]}>
                  LISTENING SECTION
                </Text>
                <Text style={styles.cardDifficulty}>{item.difficulty}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardType}>{item.type}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardMeta}>🎧 {item.questionsCount} questions</Text>
                <Text style={styles.cardMeta}>⏱ {item.durationMinutes} mins audio</Text>
                <Text style={[styles.actionLink, { color: '#059669' }]}>Play & Answer →</Text>
              </View>
            </TouchableOpacity>
          ))}

        {activeTab === 'writing' &&
          writingModules.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('WritingPractice', { taskType: item.taskType })}
            >
              <View style={styles.cardHeader}>
                <Text style={[styles.cardTag, { color: '#D97706', backgroundColor: '#FEF3C7' }]}>
                  TASK {item.taskType}
                </Text>
                <Text style={styles.cardDifficulty}>{item.difficulty}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardType}>{item.type}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardMeta}>✍️ Draft & Evaluate</Text>
                <Text style={[styles.actionLink, { color: '#D97706' }]}>Open Workspace →</Text>
              </View>
            </TouchableOpacity>
          ))}

        {activeTab === 'speaking' &&
          speakingModules.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('SpeakingPractice', { partIndex: item.partIndex })}
            >
              <View style={styles.cardHeader}>
                <Text style={[styles.cardTag, { color: '#7C3AED', backgroundColor: '#EDE9FE' }]}>
                  SPEAKING PART {item.partIndex}
                </Text>
                <Text style={styles.cardDifficulty}>{item.difficulty}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardType}>{item.type}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardMeta}>🎙️ Interactive Voice Flow</Text>
                <Text style={[styles.actionLink, { color: '#7C3AED' }]}>Start Interview →</Text>
              </View>
            </TouchableOpacity>
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
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
  },
  tabButtonActive: {
    backgroundColor: '#2563EB',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 14,
  },
  card: {
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTag: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2563EB',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  cardDifficulty: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    lineHeight: 20,
    marginBottom: 6,
  },
  cardType: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 10,
  },
  cardMeta: {
    fontSize: 12,
    color: '#64748B',
  },
  actionLink: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
  },
});
