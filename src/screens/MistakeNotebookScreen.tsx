/**
 * Mistake Notebook Screen
 * Dedicated dashboard to analyze incorrect questions, study examiner explanations, and retry errors
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useUserProfileStore } from '../store/userProfileStore';

type Props = NativeStackScreenProps<RootStackParamList, 'MistakeNotebook'>;

export const MistakeNotebookScreen: React.FC<Props> = ({ navigation }) => {
  const profile = useUserProfileStore((state) => state.profile);
  const resolveMistake = useUserProfileStore((state) => state.resolveMistake);

  const [filterSkill, setFilterSkill] = useState<string>('all');
  const [notes, setNotes] = useState<Record<string, string>>({
    Q_READ_007: 'Watch out for extreme qualifiers like "exclusively" and "invariably".',
  });

  const sampleMistakes = [
    {
      id: 'Q_READ_007',
      skill: 'reading',
      title: 'Reading: True / False / Not Given',
      question:
        'Scientists have conclusively verified that deep-sea hydrothermal vents are the sole birthplace of cellular organisms on Earth.',
      userAnswer: 'TRUE',
      correctAnswer: 'NOT GIVEN',
      explanation:
        'The passage mentions that hydrothermal vents are a plausible origin of life, but never affirms they are the sole verified birthplace. Always differentiate between possibilities and confirmed facts in IELTS Reading.',
    },
    {
      id: 'Q_LIST_012',
      skill: 'listening',
      title: 'Listening: Section 2 Map Labelling',
      question: 'The library reference archive is located [ .......... ]',
      userAnswer: 'behind reception',
      correctAnswer: 'adjacent to the east wing',
      explanation:
        'The speaker used a distraction trap: "Many expect it behind reception, but following renovations it was relocated adjacent to the east wing."',
    },
    {
      id: 'GRAM_COND_002',
      skill: 'grammar',
      title: 'Grammar: Mixed Conditionals',
      question: 'Rewrite: If they had invested earlier, their returns would be higher today.',
      userAnswer: 'Had they invested earlier, their returns will be higher today.',
      correctAnswer: 'Had they invested earlier, their returns would be higher today.',
      explanation:
        'A past hypothetical condition with a present result requires "Had + past participle" in the condition clause and "would + base verb" in the result clause.',
    },
  ];

  const filteredMistakes = sampleMistakes.filter(
    (m) => filterSkill === 'all' || m.skill === filterSkill
  );

  const handleResolve = (id: string) => {
    resolveMistake(id);
    Alert.alert('Resolved', 'Great job! Question marked as reviewed.');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mistake Notebook</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterRow}>
        {['all', 'reading', 'listening', 'grammar'].map((skill) => (
          <TouchableOpacity
            key={skill}
            style={[styles.filterBtn, filterSkill === skill && styles.filterBtnActive]}
            onPress={() => setFilterSkill(skill)}
          >
            <Text style={[styles.filterText, filterSkill === skill && styles.filterTextActive]}>
              {skill.charAt(0).toUpperCase() + skill.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {filteredMistakes.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🎉</Text>
            <Text style={styles.emptyTitle}>No Pending Mistakes</Text>
            <Text style={styles.emptySub}>All logged errors have been resolved!</Text>
          </View>
        ) : (
          filteredMistakes.map((item) => (
            <View key={item.id} style={styles.mistakeCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.skillTag}>{item.title}</Text>
                <TouchableOpacity onPress={() => handleResolve(item.id)}>
                  <Text style={styles.resolveAction}>✓ Mark Resolved</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.questionText}>{item.question}</Text>

              {/* Answers Comparison */}
              <View style={styles.answerComparison}>
                <View style={styles.ansBoxWrong}>
                  <Text style={styles.ansLabelWrong}>Your Answer:</Text>
                  <Text style={styles.ansTextWrong}>{item.userAnswer}</Text>
                </View>
                <View style={styles.ansBoxRight}>
                  <Text style={styles.ansLabelRight}>Correct Answer:</Text>
                  <Text style={styles.ansTextRight}>{item.correctAnswer}</Text>
                </View>
              </View>

              {/* Examiner Explanation */}
              <View style={styles.explanationBox}>
                <Text style={styles.expTitle}>Examiner Insight:</Text>
                <Text style={styles.expContent}>{item.explanation}</Text>
              </View>

              {/* Personal Notes */}
              <View style={styles.notesBox}>
                <Text style={styles.notesTitle}>Personal Learning Note:</Text>
                <TextInput
                  style={styles.notesInput}
                  value={notes[item.id] || ''}
                  placeholder="Add note on why you made this mistake..."
                  placeholderTextColor="#94A3B8"
                  onChangeText={(txt) => setNotes({ ...notes, [item.id]: txt })}
                  multiline
                />
              </View>
            </View>
          ))
        )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  backBtn: {
    padding: 6,
  },
  backBtnText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  filterBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
  },
  filterBtnActive: {
    backgroundColor: '#DC2626',
  },
  filterText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  filterTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    gap: 8,
  },
  emptyIcon: {
    fontSize: 48,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  emptySub: {
    fontSize: 13,
    color: '#64748B',
  },
  mistakeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FECACA',
    gap: 12,
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
  },
  skillTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#DC2626',
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  resolveAction: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  questionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
    lineHeight: 20,
  },
  answerComparison: {
    flexDirection: 'row',
    gap: 10,
  },
  ansBoxWrong: {
    flex: 1,
    backgroundColor: '#FEF2F2',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  ansLabelWrong: {
    fontSize: 10,
    fontWeight: '700',
    color: '#DC2626',
    marginBottom: 2,
  },
  ansTextWrong: {
    fontSize: 12,
    fontWeight: '600',
    color: '#991B1B',
  },
  ansBoxRight: {
    flex: 1,
    backgroundColor: '#F0FDF4',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  ansLabelRight: {
    fontSize: 10,
    fontWeight: '700',
    color: '#16A34A',
    marginBottom: 2,
  },
  ansTextRight: {
    fontSize: 12,
    fontWeight: '600',
    color: '#14532D',
  },
  explanationBox: {
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  expTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    marginBottom: 4,
  },
  expContent: {
    fontSize: 12,
    color: '#334155',
    lineHeight: 18,
  },
  notesBox: {
    backgroundColor: '#FFFBEB',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  notesTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#B45309',
    marginBottom: 4,
  },
  notesInput: {
    fontSize: 12,
    color: '#78350F',
    minHeight: 40,
    padding: 0,
  },
});
