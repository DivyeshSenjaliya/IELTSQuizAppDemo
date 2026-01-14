/**
 * Option Button Component
 * Individual option button for quiz questions
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface OptionButtonProps {
  label: string;
  text: string;
  selected: boolean;
  onPress: () => void;
}

export const OptionButton: React.FC<OptionButtonProps> = ({ label, text, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selected && styles.selected]}
      activeOpacity={0.7}
    >
      <View style={[styles.labelBox, selected && styles.labelBoxSelected]}>
        <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
      </View>
      <Text style={[styles.text, selected && styles.textSelected]} numberOfLines={2}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    backgroundColor: '#f9f9f9',
  },
  selected: {
    borderColor: '#007AFF',
    backgroundColor: '#E8F4FF',
  },
  labelBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    flexShrink: 0,
  },
  labelBoxSelected: {
    backgroundColor: '#007AFF',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#666',
  },
  labelSelected: {
    color: '#fff',
  },
  text: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
  textSelected: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
