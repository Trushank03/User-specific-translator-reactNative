import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import TranslatorScreen from '../screens/TranslatorScreen';
import AccentLibraryScreen from '../screens/AccentLibraryScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

// Simple icon component using emoji
const TabIcon = ({emoji, focused}: {emoji: string; focused: boolean}) => (
  <Text style={{fontSize: 24, opacity: focused ? 1 : 0.5}}>{emoji}</Text>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#0ea5e9',
        tabBarInactiveTintColor: '#6b7280',
        headerStyle: {
          backgroundColor: '#0ea5e9',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon emoji="🏠" focused={focused} />,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Translator"
        component={TranslatorScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon emoji="🌍" focused={focused} />,
          title: 'Translator',
        }}
      />
      <Tab.Screen
        name="AccentLibrary"
        component={AccentLibraryScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon emoji="🎭" focused={focused} />,
          title: 'Accent Library',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon emoji="⚙️" focused={focused} />,
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

