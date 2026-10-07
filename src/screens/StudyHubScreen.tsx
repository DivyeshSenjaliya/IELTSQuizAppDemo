/**
 * Study Hub Screen
 * Unifies Vocabulary SRS, Grammar mastery modules, Mistake Notebook, and Bookmarks
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
import { useUserProfileStore } from '../store/userProfileStore';

export const StudyHubScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const profile = useUserProfileStore((state) => state.profile);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <View style={styles.header}>
        <Text style={styles.title}>Study & Review</Text>
        <Text style={styles.subtitle}>
          Accelerate lexical range, grammatical accuracy, and fix past errors
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Core Review Shortcuts */}
        <View style={styles.topShortcuts}>
          <TouchableOpacity
            style={[styles.shortcutCard, { backgroundColor: '#FEF2F2', borderColor: '#FECACA' }]}
            onPress={() => navigation.navigate('MistakeNotebook')}
          >
            <Text style={styles.shortcutIcon}>📝</Text>
            <View>
              <Text style={[styles.shortcutTitle, { color: '#991B1B' }]}>Mistake Notebook</Text>
              <Text style={styles.shortcutSub}>{profile.mistakeQuestionIds.length} questions to retry</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.shortcutCard, { backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }]}
            onPress={() => navigation.navigate('BookmarksScreen')}
          >
            <Text style={styles.shortcutIcon}>🔖</Text>
            <View>
              <Text style={[styles.shortcutTitle, { color: '#166534' }]}>Saved Bookmarks</Text>
              <Text style={styles.shortcutSub}>{profile.bookmarkedQuestionIds.length} items flagged</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Vocabulary & Lexical Expansion */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Vocabulary Expansion (Band 7-9)</Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('VocabularyReview')}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.tag, { backgroundColor: '#E0E7FF', color: '#4338CA' }]}>
              SM-2 SPACED REPETITION
            </Text>
            <Text style={styles.badgeDue}>16 Due Today</Text>
          </View>
          <Text style={styles.cardTitle}>Daily Flashcards Review</Text>
          <Text style={styles.cardDesc}>
            Algorithmically timed flashcard intervals optimizing retention for Academic Word List.
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.footerText}>⚡️ 5-minute recall cycle</Text>
            <Text style={styles.footerLink}>Review Flashcards →</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.subGrid}>
          <TouchableOpacity style={styles.smallCard} onPress={() => navigation.navigate('VocabularyReview')}>
            <Text style={styles.smallCardIcon}>📚</Text>
            <Text style={styles.smallCardTitle}>Academic Word List (AWL)</Text>
            <Text style={styles.smallCardSub}>Sublists 1 to 10 with context</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallCard} onPress={() => navigation.navigate('VocabularyReview')}>
            <Text style={styles.smallCardIcon}>🔗</Text>
            <Text style={styles.smallCardTitle}>Academic Collocations</Text>
            <Text style={styles.smallCardSub}>High-frequency band 8+ pairs</Text>
          </TouchableOpacity>
        </View>

        {/* Grammar Mastery */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Grammatical Range & Accuracy</Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('GrammarPractice')}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.tag, { backgroundColor: '#FEF3C7', color: '#B45309' }]}>
              COMPLEX STRUCTURES
            </Text>
            <Text style={styles.cardMeta}>11 Topics</Text>
          </View>
          <Text style={styles.cardTitle}>Grammar Transformation & Inversion</Text>
          <Text style={styles.cardDesc}>
            Master negative inversions, mixed conditionals, cleft sentences, and impersonal passive structures.
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.footerText}>🎯 Elevate Grammatical Band</Text>
            <Text style={[styles.footerLink, { color: '#D97706' }]}>Start Practice →</Text>
          </View>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 16,
  },
  topShortcuts: {
    flexDirection: 'row',
    gap: 12,
  },
  shortcutCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  shortcutIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  shortcutTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  shortcutSub: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  sectionHeader: {
    marginTop: 8,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
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
  tag: {
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeDue: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4F46E5',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  cardMeta: {
    fontSize: 11,
    color: '#64748B',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#64748B',
  },
  footerLink: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
  },
  subGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  smallCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  smallCardIcon: {
    fontSize: 20,
    marginBottom: 6,
  },
  smallCardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 2,
  },
  smallCardSub: {
    fontSize: 11,
    color: '#64748B',
  },
});
