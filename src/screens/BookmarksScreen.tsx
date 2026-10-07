/**
 * Bookmarks Screen
 * Review and organize saved questions, passages, and vocabulary items
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
  StatusBar,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useUserProfileStore } from '../store/userProfileStore';

type Props = NativeStackScreenProps<RootStackParamList, 'BookmarksScreen'>;

export const BookmarksScreen: React.FC<Props> = ({ navigation }) => {
  const toggleBookmark = useUserProfileStore((state) => state.toggleBookmark);
  const [searchQuery, setSearchQuery] = useState('');

  const sampleBookmarks = [
    {
      id: 'Q_READ_001',
      skill: 'Reading',
      title: 'Passage 1: Coral Reef Marine Biomes',
      prompt: 'Twentieth-century scientists believed coral reefs could only exist in tropical shallow waters.',
      type: 'True/False/Not Given',
      bandTag: 'Band 7.5',
    },
    {
      id: 'Q_LIST_004',
      skill: 'Listening',
      title: 'Section 4: Deep-Sea Bioluminescence',
      prompt: 'Luciferin enzyme oxidation produces cold light with 98% efficiency.',
      type: 'Sentence Completion',
      bandTag: 'Band 8.0',
    },
    {
      id: 'AWL_SUB1_003',
      skill: 'Vocabulary',
      title: 'Academic Word List: Sublist 1',
      prompt: 'Constituent (adj / noun) - Being a part of a whole.',
      type: 'Collocation & Definition',
      bandTag: 'Band 7.0',
    },
  ];

  const filtered = sampleBookmarks.filter(
    (b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.skill.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved Bookmarks</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search bookmarked questions or vocab..."
          placeholderTextColor="#94A3B8"
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {filtered.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔖</Text>
            <Text style={styles.emptyTitle}>No Bookmarks Found</Text>
            <Text style={styles.emptySub}>Bookmark tricky questions during practice to review here.</Text>
          </View>
        ) : (
          filtered.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.tagRow}>
                  <Text style={styles.skillTag}>{item.skill}</Text>
                  <Text style={styles.bandTag}>{item.bandTag}</Text>
                </View>
                <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
                  <Text style={styles.removeAction}>Remove ✕</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrompt}>{item.prompt}</Text>
              <Text style={styles.itemType}>Format: {item.type}</Text>

              <View style={styles.cardFooter}>
                <TouchableOpacity
                  style={styles.reviewBtn}
                  onPress={() => {
                    if (item.skill === 'Reading') navigation.navigate('ReadingPractice');
                    else if (item.skill === 'Listening') navigation.navigate('ListeningPractice');
                    else navigation.navigate('VocabularyReview');
                  }}
                >
                  <Text style={styles.reviewBtnText}>Practice Now →</Text>
                </TouchableOpacity>
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
  searchBarContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  searchInput: {
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 13,
    color: '#0F172A',
  },
  scrollContent: {
    padding: 16,
    gap: 14,
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8,
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
  tagRow: {
    flexDirection: 'row',
    gap: 6,
  },
  skillTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2563EB',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  bandTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#059669',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  removeAction: {
    fontSize: 12,
    color: '#EF4444',
    fontWeight: '600',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  itemPrompt: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
  itemType: {
    fontSize: 11,
    color: '#94A3B8',
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 8,
    alignItems: 'flex-end',
  },
  reviewBtn: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  reviewBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
