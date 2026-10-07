/**
 * Grammar Practice Screen
 * Interactive IELTS complex sentence combining, negative inversion, and syntax drills
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { GrammarExerciseEvaluator } from '../modules/grammar/evaluators/GrammarExerciseEvaluator';

type Props = NativeStackScreenProps<RootStackParamList, 'GrammarPractice'>;

export const GrammarPracticeScreen: React.FC<Props> = ({ navigation }) => {
  const [exercises, setExercises] = useState([
    {
      id: 'GRAM_INV_01',
      category: 'Negative Inversion',
      targetBand: 'Band 8.0+',
      prompt: 'Rewrite using "Rarely": Governments seldom allocate adequate fiscal resources to ecological preservation.',
      validAnswers: [
        'Rarely do governments allocate adequate fiscal resources to ecological preservation.',
        'Rarely do governments allocate adequate fiscal resources to ecological preservation',
      ],
      userInput: '',
      isEvaluated: false,
      isCorrect: false,
    },
    {
      id: 'GRAM_COND_01',
      category: 'Inverted Conditionals',
      targetBand: 'Band 7.5+',
      prompt: 'Rewrite using "Should": If candidates encounter unexpected technical discrepancies, they must inform examiners immediately.',
      validAnswers: [
        'Should candidates encounter unexpected technical discrepancies, they must inform examiners immediately.',
        'Should candidates encounter unexpected technical discrepancies, they must inform examiners immediately',
      ],
      userInput: '',
      isEvaluated: false,
      isCorrect: false,
    },
    {
      id: 'GRAM_CLEFT_01',
      category: 'Cleft Sentences',
      targetBand: 'Band 8.0+',
      prompt: 'Rewrite as a "What" pseudo-cleft: Excessive urban traffic congestion causes profound economic stagnation.',
      validAnswers: [
        'What causes profound economic stagnation is excessive urban traffic congestion.',
        'What causes profound economic stagnation is excessive urban traffic congestion',
      ],
      userInput: '',
      isEvaluated: false,
      isCorrect: false,
    },
  ]);

  const handleInputChange = (id: string, text: string) => {
    setExercises(
      exercises.map((ex) => (ex.id === id ? { ...ex, userInput: text, isEvaluated: false } : ex))
    );
  };

  const handleVerify = (id: string) => {
    setExercises(
      exercises.map((ex) => {
        if (ex.id !== id) return ex;
        const correct = GrammarExerciseEvaluator.evaluateAttempt(ex.userInput, ex.validAnswers);
        return { ...ex, isEvaluated: true, isCorrect: correct };
      })
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Exit</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Grammar Mastery</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Elevate Grammatical Range (Band 7 - 9)</Text>
          <Text style={styles.bannerText}>
            Examiners reward candidates who demonstrate a wide range of structures with full flexibility
            and rare minor errors.
          </Text>
        </View>

        {exercises.map((ex, idx) => (
          <View key={ex.id} style={styles.exerciseCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.categoryBadge}>{ex.category}</Text>
              <Text style={styles.targetBand}>{ex.targetBand}</Text>
            </View>

            <Text style={styles.promptText}>
              <Text style={styles.qNum}>{idx + 1}. </Text>
              {ex.prompt}
            </Text>

            <TextInput
              style={[
                styles.textInput,
                ex.isEvaluated && (ex.isCorrect ? styles.inputCorrect : styles.inputIncorrect),
              ]}
              value={ex.userInput}
              onChangeText={(txt) => handleInputChange(ex.id, txt)}
              placeholder="Type your transformed sentence..."
              placeholderTextColor="#94A3B8"
              multiline
            />

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.verifyBtn} onPress={() => handleVerify(ex.id)}>
                <Text style={styles.verifyBtnText}>Check Structure</Text>
              </TouchableOpacity>

              {ex.isEvaluated && (
                <Text
                  style={[
                    styles.resultBadge,
                    ex.isCorrect ? styles.badgeSuccess : styles.badgeFail,
                  ]}
                >
                  {ex.isCorrect ? '✓ Grammatically Accurate' : '✕ Syntax Discrepancy'}
                </Text>
              )}
            </View>

            {ex.isEvaluated && !ex.isCorrect && (
              <View style={styles.solutionBox}>
                <Text style={styles.solutionTitle}>Model Target Structure:</Text>
                <Text style={styles.solutionText}>{ex.validAnswers[0]}</Text>
              </View>
            )}
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
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  banner: {
    backgroundColor: '#FFFBEB',
    borderRadius: 14,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#B45309',
    marginBottom: 4,
  },
  bannerText: {
    fontSize: 13,
    color: '#78350F',
    lineHeight: 18,
  },
  exerciseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 12,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBadge: {
    fontSize: 11,
    fontWeight: '700',
    color: '#D97706',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  targetBand: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
  },
  promptText: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '600',
    lineHeight: 20,
  },
  qNum: {
    color: '#2563EB',
  },
  textInput: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: '#0F172A',
    minHeight: 60,
  },
  inputCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  inputIncorrect: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verifyBtn: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  verifyBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  resultBadge: {
    fontSize: 12,
    fontWeight: '700',
  },
  badgeSuccess: {
    color: '#10B981',
  },
  badgeFail: {
    color: '#EF4444',
  },
  solutionBox: {
    backgroundColor: '#F1F5F9',
    padding: 12,
    borderRadius: 8,
  },
  solutionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    marginBottom: 2,
  },
  solutionText: {
    fontSize: 13,
    color: '#0F172A',
    fontWeight: '600',
  },
});
