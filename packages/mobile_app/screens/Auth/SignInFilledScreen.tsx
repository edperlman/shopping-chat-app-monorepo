// packages/mobile_app/screens/Auth/SignInFilledScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// SHIFT #1: We are in "screens/Auth" => up one => "screens" => up one => "mobile_app" => "styles"
import { signInFilledStyles } from '../../styles/SignInFilledStyles';

// SHIFT #2: same logic, two levels up to "navigation/types"
import { RootStackParamList } from '../../navigation/types';

// SHIFT #3: two levels up to "assets/smiley.png"
import SmileyIcon from '../../assets/smiley.png';

type SignInFilledScreenProps = NativeStackScreenProps<RootStackParamList, 'SignInFilled'>;

export default function SignInFilledScreen({ navigation }: SignInFilledScreenProps) {
  const [email, setEmail] = useState('john.doe@domain.com');
  const [password, setPassword] = useState('••••••••');
  const [rememberMe, setRememberMe] = useState(false);

  function handleSignIn() {
    navigation.navigate('Home');
  }

  function handleSignUp() {
    console.log('User pressed Sign Up');
  }

  return (
    <SafeAreaView style={signInFilledStyles.screenWrapper}>
      <ScrollView
        contentContainerStyle={signInFilledStyles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Top arrow */}
        <View style={signInFilledStyles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#212121" />
          </TouchableOpacity>
        </View>

        {/* Smiley Logo */}
        <View style={signInFilledStyles.logoContainer}>
          <Image source={SmileyIcon} style={{ width: 100, height: 100 }} />
        </View>

        {/* Title */}
        <Text style={signInFilledStyles.title}>Login to Your Account</Text>

        {/* Email Field */}
        <View style={signInFilledStyles.inputContainer}>
          <Ionicons
            name="mail"
            size={20}
            color="#246BFD"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            mode="flat"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            autoCapitalize="none"
            keyboardType="email-address"
            style={signInFilledStyles.textInput}
          />
        </View>

        {/* Password Field */}
        <View style={signInFilledStyles.inputContainer}>
          <Ionicons
            name="lock-closed"
            size={20}
            color="#246BFD"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            mode="flat"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            secureTextEntry
            style={signInFilledStyles.textInput}
          />
          <Ionicons
            name="eye-off"
            size={20}
            color="#246BFD"
            style={{ marginLeft: 8 }}
          />
        </View>

        {/* "Remember me" */}
        <View style={signInFilledStyles.rememberRow}>
          <TouchableOpacity
            style={signInFilledStyles.checkboxBox}
            onPress={() => setRememberMe(!rememberMe)}
          >
            {rememberMe && (
              <Checkbox.Android
                status="checked"
                onPress={() => setRememberMe(!rememberMe)}
                uncheckedColor="#246BFD"
                color="#246BFD"
              />
            )}
          </TouchableOpacity>
          <Text style={{ fontWeight: '600', fontSize: 14, color: '#212121' }}>
            Remember me
          </Text>
        </View>

        {/* Sign In */}
        <TouchableOpacity
          onPress={handleSignIn}
          style={signInFilledStyles.signInButton}
        >
          <Text style={signInFilledStyles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Bottom row */}
        <View style={signInFilledStyles.bottomRow}>
          <Text style={signInFilledStyles.subText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={signInFilledStyles.signUpLink}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
