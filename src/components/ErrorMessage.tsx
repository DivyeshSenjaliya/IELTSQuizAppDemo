/**
 * Error Message Component
 * Displays error messages with retry option
 */

import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Button } from './Button';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  style?: ViewStyle;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.errorIcon}>⚠️</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <Button title="Retry" onPress={onRetry} style={styles.button} variant="primary" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3E0',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
    marginVertical: 12,
  },
  errorIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: '#E65100',
    lineHeight: 20,
    marginBottom: 12,
  },
  button: {
    marginTop: 8,
  },
});
