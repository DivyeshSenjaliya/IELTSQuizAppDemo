/**
 * Root Navigator
 * Main navigation stack for the entire app
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

// Screens
import { SplashScreen } from '../screens/SplashScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { QuizScreen } from '../screens/QuizScreen';
import { ReportScreen } from '../screens/ReportScreen';

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
          name="Quiz"
          component={QuizScreen}
        />

        <Stack.Screen
          name="Report"
          component={ReportScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
