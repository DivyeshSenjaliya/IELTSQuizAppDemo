/**
 * Main Tab Navigator
 * Bottom tab navigation housing Dashboard, Practice Hub, Mock Exams, Study Hub, and Profile
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../types';

import { DashboardScreen } from '../screens/DashboardScreen';
import { PracticeHubScreen } from '../screens/PracticeHubScreen';
import { MockExamsHubScreen } from '../screens/MockExamsHubScreen';
import { StudyHubScreen } from '../screens/StudyHubScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#64748B',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>🏠</Text>,
        }}
      />

      <Tab.Screen
        name="PracticeHub"
        component={PracticeHubScreen}
        options={{
          tabBarLabel: 'Practice',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>🎯</Text>,
        }}
      />

      <Tab.Screen
        name="MockExamsHub"
        component={MockExamsHubScreen}
        options={{
          tabBarLabel: 'Mocks',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>📝</Text>,
        }}
      />

      <Tab.Screen
        name="StudyHub"
        component={StudyHubScreen}
        options={{
          tabBarLabel: 'Study',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>🧠</Text>,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopColor: '#E2E8F0',
    borderTopWidth: 1,
    height: 60,
    paddingBottom: 8,
    paddingTop: 6,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
});
