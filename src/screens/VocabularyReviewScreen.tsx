/**
 * Vocabulary Review Screen
 * SuperMemo SM-2 spaced repetition flashcard review for Academic Word List & Collocations
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { SpacedRepetitionSM2, FlashcardState } from '../modules/vocabulary/SpacedRepetitionSM2';

type Props = NativeStackScreenProps<RootStackParamList, 'VocabularyReview'>;

interface VocabCardItem {
  id: string;
  word: string;
  partOfSpeech: string;
  phonetic: string;
  definition: string;
  example: string;
  collocations: string[];
  synonyms: string[];
  targetBand: string;
}

export const VocabularyReviewScreen: React.FC<Props> = ({ navigation }) => {
  const [cards, setCards] = useState<VocabCardItem[]>([
    {
      id: 'AWL_001',
      word: 'Ubiquitous',
      partOfSpeech: 'adjective',
      phonetic: '/juːˈbɪk.wə.təs/',
      definition: 'Present, appearing, or found everywhere simultaneously.',
      example: 'Smartphones have become ubiquitous across contemporary urban environments.',
      collocations: ['ubiquitous presence', 'increasingly ubiquitous'],
      synonyms: ['omnipresent', 'pervasive', 'universal'],
      targetBand: 'Band 8.0+',
    },
    {
      id: 'AWL_002',
      word: 'Corroborate',
      partOfSpeech: 'verb',
      phonetic: '/kəˈrɒb.ə.reɪt/',
      definition: 'To confirm or give support to a statement, theory, or finding with evidence.',
      example: 'Subsequent empirical studies failed to corroborate the researchers initial hypothesis.',
      collocations: ['corroborate evidence', 'corroborate findings'],
      synonyms: ['substantiate', 'validate', 'verify'],
      targetBand: 'Band 7.5+',
    },
    {
      id: 'AWL_003',
      word: 'Detrimental',
      partOfSpeech: 'adjective',
      phonetic: '/ˌdet.rɪˈmen.təl/',
      definition: 'Tending to cause harm or damage.',
      example: 'Sedentary lifestyles have a profoundly detrimental impact on cardiovascular longevity.',
      collocations: ['detrimental effect', 'detrimental impact on'],
      synonyms: ['deleterious', 'harmful', 'adverse'],
      targetBand: 'Band 7.0+',
    },
  ]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const currentCard = cards[currentIdx];

  const handleRateQuality = (grade: number) => {
    // Quality 0-5 for SM-2
    const dummyState: FlashcardState = {
      cardId: currentCard.id,
      repetitionCount: 1,
      intervalDays: 1,
      easeFactor: 2.5,
      lastReviewedAt: new Date().toISOString(),
      nextReviewDueAt: new Date().toISOString(),
    };
    SpacedRepetitionSM2.calculateNextReview(dummyState, grade);

    setIsFlipped(false);
    setCompletedCount((prev) => prev + 1);
    if (currentIdx < cards.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      // Loop or finish
      setCurrentIdx(0);
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
        <Text style={styles.headerTitle}>Vocabulary SRS Review</Text>
        <Text style={styles.counterText}>
          {currentIdx + 1} / {cards.length}
        </Text>
      </View>

      <View style={styles.content}>
        {/* Flashcard Component */}
        <TouchableOpacity
          style={styles.flashcard}
          activeOpacity={0.9}
          onPress={() => setIsFlipped(!isFlipped)}
        >
          <View style={styles.cardTagRow}>
            <Text style={styles.bandTag}>{currentCard.targetBand}</Text>
            <Text style={styles.flipHint}>{isFlipped ? 'Tap to see word' : 'Tap to reveal definition'}</Text>
          </View>

          {!isFlipped ? (
            <View style={styles.frontSide}>
              <Text style={styles.wordTitle}>{currentCard.word}</Text>
              <Text style={styles.phoneticText}>{currentCard.phonetic}</Text>
              <Text style={styles.posText}>[{currentCard.partOfSpeech}]</Text>
            </View>
          ) : (
            <View style={styles.backSide}>
              <Text style={styles.definitionText}>{currentCard.definition}</Text>
              <View style={styles.divider} />
              <Text style={styles.exampleTitle}>Academic Context:</Text>
              <Text style={styles.exampleText}>"{currentCard.example}"</Text>

              <View style={styles.metaSection}>
                <Text style={styles.metaTitle}>Collocations:</Text>
                <Text style={styles.metaContent}>{currentCard.collocations.join(' • ')}</Text>
              </View>

              <View style={styles.metaSection}>
                <Text style={styles.metaTitle}>Synonyms:</Text>
                <Text style={styles.metaContent}>{currentCard.synonyms.join(', ')}</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        {/* Quality Rating Bar (Visible when flipped) */}
        {isFlipped ? (
          <View style={styles.ratingsContainer}>
            <Text style={styles.ratingTitle}>How well did you recall this word?</Text>
            <View style={styles.ratingButtonsRow}>
              <TouchableOpacity
                style={[styles.gradeBtn, { backgroundColor: '#FEE2E2' }]}
                onPress={() => handleRateQuality(1)}
              >
                <Text style={[styles.gradeNum, { color: '#DC2626' }]}>1</Text>
                <Text style={styles.gradeLabel}>Forgot</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.gradeBtn, { backgroundColor: '#FEF3C7' }]}
                onPress={() => handleRateQuality(3)}
              >
                <Text style={[styles.gradeNum, { color: '#D97706' }]}>3</Text>
                <Text style={styles.gradeLabel}>Hard</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.gradeBtn, { backgroundColor: '#E0E7FF' }]}
                onPress={() => handleRateQuality(4)}
              >
                <Text style={[styles.gradeNum, { color: '#4338CA' }]}>4</Text>
                <Text style={styles.gradeLabel}>Good</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.gradeBtn, { backgroundColor: '#DCFCE7' }]}
                onPress={() => handleRateQuality(5)}
              >
                <Text style={[styles.gradeNum, { color: '#16A34A' }]}>5</Text>
                <Text style={styles.gradeLabel}>Easy</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity style={styles.revealButton} onPress={() => setIsFlipped(true)}>
            <Text style={styles.revealButtonText}>Reveal Definition</Text>
          </TouchableOpacity>
        )}
      </View>
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
  counterText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  flashcard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: 20,
  },
  cardTagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  bandTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4F46E5',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  flipHint: {
    fontSize: 11,
    color: '#94A3B8',
  },
  frontSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wordTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
  },
  phoneticText: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 6,
  },
  posText: {
    fontSize: 14,
    color: '#94A3B8',
    fontStyle: 'italic',
  },
  backSide: {
    flex: 1,
    gap: 12,
  },
  definitionText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1E293B',
    lineHeight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 4,
  },
  exampleTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
  },
  exampleText: {
    fontSize: 14,
    color: '#334155',
    fontStyle: 'italic',
    lineHeight: 20,
  },
  metaSection: {
    marginTop: 4,
  },
  metaTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
  },
  metaContent: {
    fontSize: 13,
    color: '#0F172A',
    marginTop: 2,
  },
  revealButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  revealButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  ratingsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 12,
  },
  ratingTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
    textAlign: 'center',
  },
  ratingButtonsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  gradeBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  gradeNum: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 2,
  },
  gradeLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
  },
});
