/**
 * Root Navigator
 * Main navigation stack for the entire app, integrating MainTabs, skill modules, mocks, and legacy quiz
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

// Core Flow Screens
import { SplashScreen } from '../screens/SplashScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { QuizScreen } from '../screens/QuizScreen';
import { ReportScreen } from '../screens/ReportScreen';

// Main Tab Container
import { MainTabNavigator } from './MainTabNavigator';

// IELTS Module Practice Screens
import { ReadingPracticeScreen } from '../screens/ReadingPracticeScreen';
import { ListeningPracticeScreen } from '../screens/ListeningPracticeScreen';
import { WritingPracticeScreen } from '../screens/WritingPracticeScreen';
import { SpeakingPracticeScreen } from '../screens/SpeakingPracticeScreen';
import { MockExamSessionScreen } from '../screens/MockExamSessionScreen';
import { VocabularyReviewScreen } from '../screens/VocabularyReviewScreen';
import { GrammarPracticeScreen } from '../screens/GrammarPracticeScreen';
import { MistakeNotebookScreen } from '../screens/MistakeNotebookScreen';
import { BookmarksScreen } from '../screens/BookmarksScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{
            gestureEnabled: false,
          }}
        />

        {/* Legacy / Diagnostic Quiz & Report */}
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
        />

        <Stack.Screen
          name="Report"
          component={ReportScreen}
        />

        {/* IELTS Practice Modules */}
        <Stack.Screen
          name="ReadingPractice"
          component={ReadingPracticeScreen}
        />

        <Stack.Screen
          name="ListeningPractice"
          component={ListeningPracticeScreen}
        />

        <Stack.Screen
          name="WritingPractice"
          component={WritingPracticeScreen}
        />

        <Stack.Screen
          name="SpeakingPractice"
          component={SpeakingPracticeScreen}
        />

        {/* Full Mock Exam Session */}
        <Stack.Screen
          name="MockExamSession"
          component={MockExamSessionScreen}
        />

        {/* Study, Vocabulary & Error Correction */}
        <Stack.Screen
          name="VocabularyReview"
          component={VocabularyReviewScreen}
        />

        <Stack.Screen
          name="GrammarPractice"
          component={GrammarPracticeScreen}
        />

        <Stack.Screen
          name="MistakeNotebook"
          component={MistakeNotebookScreen}
        />

        <Stack.Screen
          name="BookmarksScreen"
          component={BookmarksScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
