// packages/mobile_app/App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import environment variables
import { API_URL } from '@env';  // Ensure your .env + Babel config is correct

// Import the dedicated theme file
import { customTheme } from './styles/theme';

// Import the new RootNavigator
import { RootNavigator } from './navigation/RootNavigator';

// Create a QueryClient for React Query
const queryClient = new QueryClient();

export default function App() {
  // Optional: demonstrate the environment variable
  console.log('API_URL =>', API_URL);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={customTheme}>
        <NavigationContainer>
          {/* The RootNavigator includes our SignIn and Home screens */}
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
