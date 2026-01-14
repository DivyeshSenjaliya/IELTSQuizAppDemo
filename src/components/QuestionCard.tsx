/**
 * Question Card Component
 * Displays quiz question with options
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Question } from '../types';
import { OptionButton } from './OptionButton';

interface QuestionCardProps {
  question: Question;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  questionNumber,
  totalQuestions,
}) => {
  const options = [
    { label: 'A', value: 'A', text: question.optionA },
    { label: 'B', value: 'B', text: question.optionB },
    { label: 'C', value: 'C', text: question.optionC },
    { label: 'D', value: 'D', text: question.optionD },
  ];

  return (
    <View style={styles.container}>
      {/* Question Header */}
      <View style={styles.header}>
        <Text style={styles.questionNumber}>
          Question {questionNumber} of {totalQuestions}
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(questionNumber / totalQuestions) * 100}%` },
            ]}
          />
        </View>
      </View>

      {/* Question Text */}
      <Text style={styles.questionText}>{question.question}</Text>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <OptionButton
            key={option.value}
            label={option.label}
            text={option.text}
            selected={selectedOption === option.value}
            onPress={() => onSelectOption(option.value)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    marginBottom: 16,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
    lineHeight: 24,
  },
  optionsContainer: {
    gap: 10,
  },
});
