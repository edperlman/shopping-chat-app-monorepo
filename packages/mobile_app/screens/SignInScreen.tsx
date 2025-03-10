// screens/SignInScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// 1) Bring in the param-list type
import { RootStackParamList } from '../navigation/types';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignInScreen({ navigation }: SignInScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 10 }}>Sign In Screen</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}
      >
        Go to Home
      </Button>
    </View>
  );
}
