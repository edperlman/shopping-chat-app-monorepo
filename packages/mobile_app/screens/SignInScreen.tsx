// screens/SignInScreen.tsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Import the style object from your file
import { signInStyles } from '../styles/SignInStyles';
// If you store RootStackParamList in a 'types' or 'navigation' folder, import accordingly
import { RootStackParamList } from '../navigation/types';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignInScreen({ navigation }: SignInScreenProps) {
  // Basic form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // A placeholder sign-in handler
  function handleSignIn() {
    // For an MVP, you might call your aggregator/back-end with email + password
    console.log('Sign in with:', { email, password });
    // Navigate to Home for now
    navigation.navigate('Home');
  }

  return (
    <View style={signInStyles.container}>
      {/* Possibly a top bar region if needed */}
      {/* <View style={signInStyles.topBar}>
        <Text>Back</Text>
      </View> */}

      {/* Main Title */}
      <Text style={signInStyles.title}>Login to Your Account</Text>

      {/* Input Field Container for Email */}
      <View style={signInStyles.inputFieldContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={signInStyles.inputText}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Input Field Container for Password */}
      <View style={signInStyles.inputFieldContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={signInStyles.inputText}
          secureTextEntry
        />
      </View>

      {/* Button */}
      <Button
        mode="contained"
        onPress={handleSignIn}
        style={signInStyles.primaryButton}
        labelStyle={signInStyles.primaryButtonText}
      >
        Sign In
      </Button>

      {/* Example subtext: "Don’t have an account?" */}
      <View style={{ marginTop: 16 }}>
        <Text style={signInStyles.subText}>Don’t have an account?</Text>
      </View>
    </View>
  );
}
