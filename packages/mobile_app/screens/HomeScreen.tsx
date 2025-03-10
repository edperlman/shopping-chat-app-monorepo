// screens/HomeScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// 1) Bring in the param-list type
import { RootStackParamList } from '../navigation/types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// 2) Example fetch function
async function fetchData() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  return response.data;
}

export default function HomeScreen({}: HomeScreenProps) {
  const { data, isLoading, isError } = useQuery(['sampleData'], fetchData);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading data...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Failed to load data. Please try again.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ marginBottom: 10 }}>Home Screen</Text>
      <Text style={{ marginBottom: 10 }}>Fetched Data:</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}
