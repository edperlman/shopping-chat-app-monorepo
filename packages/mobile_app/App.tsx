// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 1) Import your typed param list
import { RootStackParamList } from './navigation/types';

// 2) Import screens
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';

// 3) Import environment variables from @env
import { API_URL } from '@env';  // Ensure you created .env and Babel config for react-native-dotenv

// 4) Create a QueryClient for React Query
const queryClient = new QueryClient();

// 5) Create the stack navigator using your RootStackParamList
const Stack = createNativeStackNavigator<RootStackParamList>(); 

export default function App() {
  // Optional: demonstrate the environment variable
  console.log('API_URL =>', API_URL);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{ title: 'Sign In' }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Home' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
