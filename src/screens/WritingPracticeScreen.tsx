/**
 * Writing Practice Screen
 * Interactive IELTS Writing workspace with real-time word counter, timer, and automated rubric evaluator
 */

import React, { useState, useEffect } from 'react';
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
import { WritingEvaluationEngine } from '../modules/writing/WritingEvaluationEngine';
import { Task2RubricEvaluation } from '../modules/writing/rubrics/Task2EssayRubrics';

type Props = NativeStackScreenProps<RootStackParamList, 'WritingPractice'>;

export const WritingPracticeScreen: React.FC<Props> = ({ route, navigation }) => {
  const initialTaskType = route.params?.taskType || 2;
  const [taskType, setTaskType] = useState<1 | 2>(initialTaskType);
  const [essayText, setEssayText] = useState('');
  const [secondsRemaining, setSecondsRemaining] = useState(taskType === 1 ? 1200 : 2400); // 20m or 40m
  const [evaluationResult, setEvaluationResult] = useState<Task2RubricEvaluation | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const prompts = {
    task1: {
      title: 'Task 1: Renewable Energy Investment (2010 - 2025)',
      description:
        'The chart below shows public and private capital investment in solar and wind infrastructure across four OECD countries between 2010 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      minWords: 150,
    },
    task2: {
      title: 'Task 2: Artificial Intelligence in Modern Workplace',
      description:
        'Some people believe that artificial intelligence and automation will eliminate more jobs than they create, causing widespread economic hardship. Others argue that technological shifts invariably generate higher-skilled employment opportunities.\n\nDiscuss both views and give your own opinion.',
      minWords: 250,
    },
  };

  const activePrompt = taskType === 1 ? prompts.task1 : prompts.task2;

  useEffect(() => {
    if (secondsRemaining <= 0) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsRemaining]);

  const wordCount = essayText.trim().length > 0 ? essayText.trim().split(/\s+/).filter(Boolean).length : 0;
  const minRequired = activePrompt.minWords;
  const wordCountProgress = Math.min(100, Math.round((wordCount / minRequired) * 100));

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleEvaluate = () => {
    if (wordCount < 50) {
      Alert.alert('Essay Too Short', 'Please write at least 50 words to run the diagnostic rubric evaluation.');
      return;
    }

    setIsEvaluating(true);
    try {
      const result = WritingEvaluationEngine.evaluateTask2Submission(essayText);
      setEvaluationResult(result);
    } catch (err: any) {
      Alert.alert('Evaluation Error', err.message || 'Failed to evaluate essay.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Exit</Text>
        </TouchableOpacity>
        <Text style={styles.timerText}>⏱ {formatTimer(secondsRemaining)}</Text>
        <TouchableOpacity
          onPress={handleEvaluate}
          style={[styles.evaluateBtn, isEvaluating && styles.evaluateBtnDisabled]}
          disabled={isEvaluating}
        >
          <Text style={styles.evaluateBtnText}>{isEvaluating ? 'Evaluating...' : 'Evaluate Essay'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Task Selector Switch */}
        <View style={styles.selectorRow}>
          <TouchableOpacity
            style={[styles.selectorBtn, taskType === 1 && styles.selectorBtnActive]}
            onPress={() => {
              setTaskType(1);
              setSecondsRemaining(1200);
              setEvaluationResult(null);
            }}
          >
            <Text style={[styles.selectorText, taskType === 1 && styles.selectorTextActive]}>
              Academic Task 1 (150 words)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.selectorBtn, taskType === 2 && styles.selectorBtnActive]}
            onPress={() => {
              setTaskType(2);
              setSecondsRemaining(2400);
              setEvaluationResult(null);
            }}
          >
            <Text style={[styles.selectorText, taskType === 2 && styles.selectorTextActive]}>
              Task 2 Essay (250 words)
            </Text>
          </TouchableOpacity>
        </View>

        {/* Prompt Card */}
        <View style={styles.promptCard}>
          <Text style={styles.promptTitle}>{activePrompt.title}</Text>
          <Text style={styles.promptDesc}>{activePrompt.description}</Text>
        </View>

        {/* Word Count Indicator */}
        <View style={styles.wordCountContainer}>
          <View style={styles.wordCountRow}>
            <Text style={styles.wordCountLabel}>
              Word Count: <Text style={styles.wordCountValue}>{wordCount}</Text> / {minRequired} words
            </Text>
            <Text
              style={[
                styles.wordStatusText,
                wordCount >= minRequired ? styles.wordStatusValid : styles.wordStatusShort,
              ]}
            >
              {wordCount >= minRequired ? '✓ Minimum Met' : `${minRequired - wordCount} words needed`}
            </Text>
          </View>
          <View style={styles.wordCountTrack}>
            <View
              style={[
                styles.wordCountFill,
                { width: `${wordCountProgress}%` },
                wordCount >= minRequired ? styles.fillSuccess : styles.fillWarning,
              ]}
            />
          </View>
        </View>

        {/* Text Input Editor */}
        <View style={styles.editorCard}>
          <TextInput
            style={styles.textEditor}
            multiline
            textAlignVertical="top"
            value={essayText}
            onChangeText={setEssayText}
            placeholder="Type your IELTS essay response here..."
            placeholderTextColor="#94A3B8"
          />
        </View>

        {/* Diagnostic Rubric Evaluation Report */}
        {evaluationResult && (
          <View style={styles.resultsCard}>
            <Text style={styles.resultsHeader}>📊 Official 4-Criteria Band Evaluation</Text>
            <View style={styles.bandOverallRow}>
              <Text style={styles.overallLabel}>Composite Writing Score</Text>
              <Text style={styles.overallBand}>Band {evaluationResult.overallWritingBand.toFixed(1)}</Text>
            </View>

            <View style={styles.criteriaGrid}>
              <View style={styles.criteriaItem}>
                <Text style={styles.critKey}>Task Response</Text>
                <Text style={styles.critVal}>{evaluationResult.taskResponseBand.toFixed(1)}</Text>
              </View>
              <View style={styles.criteriaItem}>
                <Text style={styles.critKey}>Coherence & Cohesion</Text>
                <Text style={styles.critVal}>{evaluationResult.coherenceCohesionBand.toFixed(1)}</Text>
              </View>
              <View style={styles.criteriaItem}>
                <Text style={styles.critKey}>Lexical Resource</Text>
                <Text style={styles.critVal}>{evaluationResult.lexicalResourceBand.toFixed(1)}</Text>
              </View>
              <View style={styles.criteriaItem}>
                <Text style={styles.critKey}>Grammatical Range</Text>
                <Text style={styles.critVal}>{evaluationResult.grammaticalRangeBand.toFixed(1)}</Text>
              </View>
            </View>

            <View style={styles.commentsBox}>
              <Text style={styles.commentsTitle}>Examiner Feedback Observations:</Text>
              {evaluationResult.examinerComments.map((comment, index) => (
                <Text key={index} style={styles.commentItem}>
                  • {comment}
                </Text>
              ))}
            </View>
          </View>
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
  timerText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  evaluateBtn: {
    backgroundColor: '#D97706',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  evaluateBtnDisabled: {
    opacity: 0.5,
  },
  evaluateBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  scrollContent: {
    padding: 16,
    gap: 14,
  },
  selectorRow: {
    flexDirection: 'row',
    gap: 8,
  },
  selectorBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
  },
  selectorBtnActive: {
    backgroundColor: '#0F172A',
  },
  selectorText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  selectorTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  promptCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  promptTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  promptDesc: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
  },
  wordCountContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  wordCountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  wordCountLabel: {
    fontSize: 12,
    color: '#64748B',
  },
  wordCountValue: {
    fontWeight: '700',
    color: '#0F172A',
  },
  wordStatusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  wordStatusValid: {
    color: '#10B981',
  },
  wordStatusShort: {
    color: '#F59E0B',
  },
  wordCountTrack: {
    height: 6,
    backgroundColor: '#F1F5F9',
    borderRadius: 3,
    overflow: 'hidden',
  },
  wordCountFill: {
    height: '100%',
    borderRadius: 3,
  },
  fillSuccess: {
    backgroundColor: '#10B981',
  },
  fillWarning: {
    backgroundColor: '#F59E0B',
  },
  editorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    minHeight: 220,
    padding: 12,
  },
  textEditor: {
    fontSize: 14,
    color: '#0F172A',
    lineHeight: 22,
    minHeight: 200,
  },
  resultsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 12,
  },
  resultsHeader: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  bandOverallRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    padding: 12,
    borderRadius: 8,
  },
  overallLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  overallBand: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1D4ED8',
  },
  criteriaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  criteriaItem: {
    width: '48%',
    backgroundColor: '#F8FAFC',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  critKey: {
    fontSize: 11,
    color: '#64748B',
    marginBottom: 4,
  },
  critVal: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  commentsBox: {
    backgroundColor: '#F1F5F9',
    padding: 12,
    borderRadius: 8,
    gap: 4,
  },
  commentsTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  commentItem: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 16,
  },
});
