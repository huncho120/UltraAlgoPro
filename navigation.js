import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import SignalScreen from './screens/SignalScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ title: 'Ultra Algo Dashboard' }}
        />
        <Stack.Screen 
          name="Signals" 
          component={SignalScreen}
          options={{ title: 'Signals' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
    }
