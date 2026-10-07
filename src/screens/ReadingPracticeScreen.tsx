/**
 * Reading Practice Screen
 * Interactive IELTS Reading with passages, True/False/Not Given, Headings, and band estimation
 */

import React, { useState, useEffect } from 'react';
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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useUserProfileStore } from '../store/userProfileStore';
import { TrueFalseNotGivenEvaluator } from '../modules/reading/evaluators/TrueFalseNotGivenEvaluator';
import { AcademicReadingConversionTable } from '../modules/scoring/tables/AcademicReadingConversionTable';

type Props = NativeStackScreenProps<RootStackParamList, 'ReadingPractice'>;

export const ReadingPracticeScreen: React.FC<Props> = ({ navigation }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(1200); // 20 minutes
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toggleBookmark = useUserProfileStore((state) => state.toggleBookmark);
  const recordMistake = useUserProfileStore((state) => state.recordMistake);
  const bookmarkedIds = useUserProfileStore((state) => state.profile.bookmarkedQuestionIds);

  const samplePassage = {
    title: 'The Resilience of Deep-Sea Coral Ecosystems',
    paragraphs: [
      'A. Contrary to widespread scientific assumption during the twentieth century, vibrant coral reefs are not exclusively confined to sunlit, tropical surface waters. Modern submersibles equipped with high-resolution acoustic sonar have unveiled expansive cold-water coral biomes inhabiting depths ranging between 200 and 2,000 meters.',
      'B. Unlike their shallow-water counterparts, deep-sea corals do not rely on photosynthetic zooxanthellae algae for sustenance. In the absolute darkness of the benthic zone, these scleractinian organisms sustain themselves entirely by capturing organic detritus and microscopic zooplankton carried along deep ocean currents.',
      'C. Marine biologists emphasize that these slow-growing calcified networks provide essential nurseries for commercially valuable fisheries. However, the unchecked expansion of bottom-trawling operations poses an existential threat, pulverizing centuries of delicate limestone architecture within minutes.',
    ],
    questions: [
      {
        id: 'READ_Q1',
        type: 'TFNG',
        prompt: 'Twentieth-century scientists believed coral reefs could only exist in tropical shallow waters.',
        options: ['TRUE', 'FALSE', 'NOT GIVEN'],
        correctAnswer: 'TRUE',
        explanation: 'Paragraph A specifies: Contrary to widespread scientific assumption during the 20th century, vibrant coral reefs are not exclusively confined to sunlit waters.',
      },
      {
        id: 'READ_Q2',
        type: 'TFNG',
        prompt: 'Deep-sea corals utilize symbiotic algae to photosynthesize energy.',
        options: ['TRUE', 'FALSE', 'NOT GIVEN'],
        correctAnswer: 'FALSE',
        explanation: 'Paragraph B explicitly states: Unlike shallow-water corals, deep-sea corals do not rely on photosynthetic zooxanthellae algae.',
      },
      {
        id: 'READ_Q3',
        type: 'TFNG',
        prompt: 'Commercial fishing vessels have introduced strict regulations to prevent deep-sea reef destruction.',
        options: ['TRUE', 'FALSE', 'NOT GIVEN'],
        correctAnswer: 'NOT GIVEN',
        explanation: 'Paragraph C mentions bottom-trawling poses a threat, but the passage never mentions whether regulations were introduced.',
      },
    ],
  };

  useEffect(() => {
    if (secondsRemaining <= 0 || isSubmitted) return;
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsRemaining, isSubmitted]);

  const currentQ = samplePassage.questions[activeQuestionIdx];
  const isBookmarked = bookmarkedIds.includes(currentQ.id);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSelectAnswer = (option: string) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [currentQ.id]: option });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    let correctCount = 0;
    samplePassage.questions.forEach((q) => {
      const isCorrect = TrueFalseNotGivenEvaluator.evaluate(answers[q.id] || '', q.correctAnswer);
      if (isCorrect) {
        correctCount++;
      } else {
        recordMistake(q.id);
      }
    });

    const band = AcademicReadingConversionTable.convertRawScoreToBand(
      Math.round((correctCount / samplePassage.questions.length) * 40)
    );

    Alert.alert(
      'Reading Practice Completed',
      `Score: ${correctCount}/${samplePassage.questions.length} Correct\nEstimated IELTS Reading Band: ${band.toFixed(1)}`
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      {/* Top Header & Timer */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Exit</Text>
        </TouchableOpacity>
        <Text style={styles.timerText}>⏱ {formatTime(secondsRemaining)}</Text>
        {!isSubmitted ? (
          <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.submittedBadge}>Submitted</Text>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Passage Text Container */}
        <View style={styles.passageContainer}>
          <Text style={styles.passageTitle}>{samplePassage.title}</Text>
          {samplePassage.paragraphs.map((p, idx) => (
            <Text key={idx} style={styles.passageParagraph}>
              {p}
            </Text>
          ))}
        </View>

        {/* Question Section */}
        <View style={styles.questionCard}>
          <View style={styles.qHeader}>
            <Text style={styles.qNumber}>
              Question {activeQuestionIdx + 1} of {samplePassage.questions.length}
            </Text>
            <TouchableOpacity onPress={() => toggleBookmark(currentQ.id)}>
              <Text style={styles.bookmarkIcon}>{isBookmarked ? '🔖 Saved' : '🔖 Bookmark'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.qPrompt}>{currentQ.prompt}</Text>

          {/* Options */}
          <View style={styles.optionsList}>
            {currentQ.options.map((opt) => {
              const isSelected = answers[currentQ.id] === opt;
              const isCorrect = isSubmitted && opt === currentQ.correctAnswer;
              const isWrongSelected = isSubmitted && isSelected && opt !== currentQ.correctAnswer;

              return (
                <TouchableOpacity
                  key={opt}
                  style={[
                    styles.optButton,
                    isSelected && styles.optButtonSelected,
                    isCorrect && styles.optButtonCorrect,
                    isWrongSelected && styles.optButtonWrong,
                  ]}
                  disabled={isSubmitted}
                  onPress={() => handleSelectAnswer(opt)}
                >
                  <Text
                    style={[
                      styles.optText,
                      isSelected && styles.optTextSelected,
                      isCorrect && styles.optTextCorrect,
                    ]}
                  >
                    {opt}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {isSubmitted && (
            <View style={styles.explanationBox}>
              <Text style={styles.expTitle}>Examiner Explanation:</Text>
              <Text style={styles.expText}>{currentQ.explanation}</Text>
            </View>
          )}

          {/* Question Stepper */}
          <View style={styles.stepperRow}>
            <TouchableOpacity
              style={[styles.stepBtn, activeQuestionIdx === 0 && styles.stepBtnDisabled]}
              disabled={activeQuestionIdx === 0}
              onPress={() => setActiveQuestionIdx((prev) => prev - 1)}
            >
              <Text style={styles.stepBtnText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.stepBtn,
                activeQuestionIdx === samplePassage.questions.length - 1 && styles.stepBtnDisabled,
              ]}
              disabled={activeQuestionIdx === samplePassage.questions.length - 1}
              onPress={() => setActiveQuestionIdx((prev) => prev + 1)}
            >
              <Text style={styles.stepBtnText}>Next</Text>
            </TouchableOpacity>
          </View>
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
  timerText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  submitBtn: {
    backgroundColor: '#2563EB',
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
  passageContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  passageTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 12,
  },
  passageParagraph: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 12,
  },
  questionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  qHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  qNumber: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
  },
  bookmarkIcon: {
    fontSize: 12,
    color: '#64748B',
  },
  qPrompt: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 14,
    lineHeight: 20,
  },
  optionsList: {
    gap: 8,
    marginBottom: 16,
  },
  optButton: {
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#F8FAFC',
  },
  optButtonSelected: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },
  optButtonCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  optButtonWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  optText: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '600',
  },
  optTextSelected: {
    color: '#2563EB',
    fontWeight: '700',
  },
  optTextCorrect: {
    color: '#059669',
    fontWeight: '700',
  },
  explanationBox: {
    backgroundColor: '#F1F5F9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 14,
  },
  expTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  expText: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
  },
  stepperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stepBtn: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  stepBtnDisabled: {
    opacity: 0.4,
  },
  stepBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E293B',
  },
});
