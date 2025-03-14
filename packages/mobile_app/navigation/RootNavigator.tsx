// packages/mobile_app/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// Existing imports
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import EmptyChatScreen from '../screens/Chat/EmptyChatScreen';
import ChatListScreen from '../screens/Chat/ChatListScreen';
import DiscountOptionsScreen from '../screens/Discount/DiscountOptionsScreen';

// NEW: Import the SearchTypeScreen
import { SearchTypeScreen } from '../screens/Search/SearchTypeScreen';
// NEW: Import the RetailerChatScreen
import { RetailerChatScreen } from '../screens/Chat/RetailerChatScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      {/* Existing routes */}
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmptyChat"
        component={EmptyChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DiscountOptions"
        component={DiscountOptionsScreen}
        options={{ headerShown: false }}
      />

      {/* The new search screen route */}
      <Stack.Screen
        name="SearchType"
        component={SearchTypeScreen}
        options={{ headerShown: false }}
      />

      {/* The new retailer chat screen route */}
      <Stack.Screen
        name="RetailerChat"
        component={RetailerChatScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
