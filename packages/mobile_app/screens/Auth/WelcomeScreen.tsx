// packages/mobile_app/screens/Auth/WelcomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { welcomeStyles } from '../../styles/WelcomeStyles';

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  function handleGetStarted() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={welcomeStyles.container}>
      <View style={welcomeStyles.contentContainer}>
        {/* Central icon: note the corrected path */}
        <Image
          source={require('../../assets/smiley_group.png')}
          style={welcomeStyles.smileyIcon}
        />

        <Text style={welcomeStyles.title}>Welcome to MioChat!</Text>
        <Text style={welcomeStyles.subtitle}>
          The best chat app to make your shopping great!
        </Text>

        <TouchableOpacity
          style={welcomeStyles.buttonContainer}
          onPress={handleGetStarted}
          activeOpacity={0.8}
        >
          <Text style={welcomeStyles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
