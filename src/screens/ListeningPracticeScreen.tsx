/**
 * Listening Practice Screen
 * Interactive IELTS Listening module with audio player simulation, questions, and instant feedback
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
import { PhoneticSpellChecker } from '../modules/listening/utils/phoneticSpellChecker';
import { ListeningConversionTable } from '../modules/scoring/tables/ListeningConversionTable';

type Props = NativeStackScreenProps<RootStackParamList, 'ListeningPractice'>;

export const ListeningPracticeScreen: React.FC<Props> = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgressSeconds, setAudioProgressSeconds] = useState(0);
  const audioTotalDuration = 180; // 3 minutes clip
  const [candidateAnswers, setCandidateAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const listeningTask = {
    sectionTitle: 'Section 1: Community Sports Complex Registration',
    audioContext: 'You will hear an administrative coordinator registering a new applicant.',
    transcript:
      'Good morning, welcome to Oakridge Leisure Centre. Let me take down your contact details. The family membership fee is thirty-five pounds per month. Our Olympic swimming pool is currently open on Wednesdays and Saturdays.',
    questions: [
      {
        id: 'LIST_Q1',
        prompt: '1. Monthly family membership fee: £ [ .......... ]',
        correctAnswer: '35',
        acceptableVariations: ['35', 'thirty five', 'thirty-five'],
      },
      {
        id: 'LIST_Q2',
        prompt: '2. Olympic pool available on Wednesdays and [ .......... ]',
        correctAnswer: 'Saturdays',
        acceptableVariations: ['saturdays', 'Saturday', 'saturday'],
      },
    ],
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && audioProgressSeconds < audioTotalDuration) {
      interval = setInterval(() => {
        setAudioProgressSeconds((prev) => prev + 1);
      }, 1000);
    } else if (audioProgressSeconds >= audioTotalDuration) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, audioProgressSeconds]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (seconds: number) => {
    setAudioProgressSeconds(Math.max(0, Math.min(audioTotalDuration, seconds)));
  };

  const formatAudioTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleInputChange = (questionId: string, text: string) => {
    if (isSubmitted) return;
    setCandidateAnswers({ ...candidateAnswers, [questionId]: text });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    let correctCount = 0;

    listeningTask.questions.forEach((q) => {
      const userText = (candidateAnswers[q.id] || '').trim().toLowerCase();
      const isMatch = q.acceptableVariations.some(
        (v) =>
          v.toLowerCase() === userText ||
          PhoneticSpellChecker.calculateLevenshteinDistance(v.toLowerCase(), userText) <= 1
      );
      if (isMatch) correctCount++;
    });

    const scaledScore = Math.round((correctCount / listeningTask.questions.length) * 40);
    const band = ListeningConversionTable.convertRawScoreToBand(scaledScore);

    Alert.alert(
      'Listening Drill Finished',
      `Score: ${correctCount}/${listeningTask.questions.length} Correct\nEstimated IELTS Listening Band: ${band.toFixed(1)}`
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
        <Text style={styles.headerTitle}>Listening Drill</Text>
        {!isSubmitted ? (
          <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.submittedBadge}>Submitted</Text>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Audio Player Card */}
        <View style={styles.playerCard}>
          <Text style={styles.playerSection}>{listeningTask.sectionTitle}</Text>
          <Text style={styles.playerContext}>{listeningTask.audioContext}</Text>

          {/* Progress Bar */}
          <View style={styles.waveformContainer}>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${(audioProgressSeconds / audioTotalDuration) * 100}%` },
                ]}
              />
            </View>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>{formatAudioTime(audioProgressSeconds)}</Text>
              <Text style={styles.timeText}>{formatAudioTime(audioTotalDuration)}</Text>
            </View>
          </View>

          {/* Controls */}
          <View style={styles.controlsRow}>
            <TouchableOpacity onPress={() => handleSeek(audioProgressSeconds - 10)} style={styles.seekBtn}>
              <Text style={styles.controlText}>-10s</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={togglePlayback} style={styles.playBtn}>
              <Text style={styles.playBtnText}>{isPlaying ? '⏸ Pause' : '▶ Play'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSeek(audioProgressSeconds + 10)} style={styles.seekBtn}>
              <Text style={styles.controlText}>+10s</Text>
            </TouchableOpacity>
          </View>

          {/* Transcript Toggle */}
          <TouchableOpacity
            style={styles.transcriptToggle}
            onPress={() => setShowTranscript(!showTranscript)}
          >
            <Text style={styles.transcriptToggleText}>
              {showTranscript ? 'Hide Audio Transcript ▲' : 'Show Audio Transcript ▼'}
            </Text>
          </TouchableOpacity>

          {showTranscript && (
            <View style={styles.transcriptBox}>
              <Text style={styles.transcriptText}>{listeningTask.transcript}</Text>
            </View>
          )}
        </View>

        {/* Question Inputs */}
        <View style={styles.questionsContainer}>
          <Text style={styles.instructionsTitle}>Questions 1 - 2</Text>
          <Text style={styles.instructionsText}>
            Complete the notes below. Write NO MORE THAN ONE WORD AND/OR A NUMBER for each answer.
          </Text>

          {listeningTask.questions.map((q) => {
            const currentInput = candidateAnswers[q.id] || '';
            const isCorrect =
              isSubmitted &&
              q.acceptableVariations.some((v) => v.toLowerCase() === currentInput.trim().toLowerCase());

            return (
              <View key={q.id} style={styles.inputCard}>
                <Text style={styles.qPrompt}>{q.prompt}</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    isSubmitted && (isCorrect ? styles.inputCorrect : styles.inputIncorrect),
                  ]}
                  value={currentInput}
                  editable={!isSubmitted}
                  onChangeText={(val) => handleInputChange(q.id, val)}
                  placeholder="Type answer here..."
                  placeholderTextColor="#94A3B8"
                  autoCapitalize="none"
                />
                {isSubmitted && !isCorrect && (
                  <Text style={styles.correctAnswerLabel}>
                    Accepted answer: <Text style={styles.correctVal}>{q.correctAnswer}</Text>
                  </Text>
                )}
              </View>
            );
          })}
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
  submitBtn: {
    backgroundColor: '#10B981',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  submittedBadge: {
    color: '#059669',
    fontWeight: '700',
    fontSize: 13,
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  playerCard: {
    backgroundColor: '#0F172A',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  playerSection: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  playerContext: {
    fontSize: 12,
    color: '#94A3B8',
    marginBottom: 16,
  },
  waveformContainer: {
    marginBottom: 16,
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#334155',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 3,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 11,
    color: '#94A3B8',
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 14,
  },
  seekBtn: {
    padding: 8,
    backgroundColor: '#1E293B',
    borderRadius: 8,
  },
  controlText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
  },
  playBtn: {
    backgroundColor: '#10B981',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  playBtnText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
  },
  transcriptToggle: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  transcriptToggleText: {
    fontSize: 12,
    color: '#38BDF8',
    fontWeight: '600',
  },
  transcriptBox: {
    backgroundColor: '#1E293B',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  transcriptText: {
    fontSize: 12,
    color: '#CBD5E1',
    lineHeight: 18,
  },
  questionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 14,
  },
  instructionsTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  instructionsText: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 16,
  },
  inputCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  qPrompt: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#0F172A',
  },
  inputCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  inputIncorrect: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  correctAnswerLabel: {
    fontSize: 12,
    color: '#DC2626',
    marginTop: 6,
  },
  correctVal: {
    fontWeight: '700',
    color: '#166534',
  },
});
