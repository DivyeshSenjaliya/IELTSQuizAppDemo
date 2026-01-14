/**
 * IELTS Quiz App
 * Main App Component
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from './src/navigation/RootNavigator';
import { validateConfig } from './src/services/config';
import { configureGoogleSignIn } from './src/services/authService';

function App() {
  useEffect(() => {
    // Validate configuration on app start
    validateConfig();

    // Configure native Google Sign-In
    configureGoogleSignIn();

    if (__DEV__) {
      console.log('✓ IELTS Quiz App initialized');
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <RootNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
