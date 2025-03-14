// packages/mobile_app/screens/Auth/SignUpScreen.tsx
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

import { signUpStyles } from '../../styles/SignUpStyles';
import { RootStackParamList } from '../../navigation/types';
import SmileyIcon from '../../assets/smiley.png';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Check if fields are typed
  const isEmailFilled = email.trim().length > 0;
  const isPasswordFilled = password.trim().length > 0;

  // If both filled => enable sign up
  const isSignUpEnabled = isEmailFilled && isPasswordFilled;

  // Input container style
  function getInputContainerStyle(isFilled: boolean) {
    return isFilled
      ? signUpStyles.inputContainerFilled
      : signUpStyles.inputContainerEmpty;
  }

  // Icon color
  function getIconColor(isFilled: boolean): string {
    return isFilled ? '#246BFD' : '#9E9E9E';
  }

  // Toggle password show/hide
  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  // Button style: enabled vs disabled
  const signUpButtonStyle = isSignUpEnabled
    ? signUpStyles.signUpButtonEnabled
    : signUpStyles.signUpButtonDisabled;

  // On pressing sign up => navigate to "EmptyChat"
  function handleSignUp() {
    if (isSignUpEnabled) {
      navigation.navigate('EmptyChat');
    }
  }

  function handleSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <SafeAreaView style={signUpStyles.screenWrapper}>
      <ScrollView
        contentContainerStyle={signUpStyles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={signUpStyles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#212121" />
          </TouchableOpacity>
        </View>

        <View style={signUpStyles.logoContainer}>
          <Image source={SmileyIcon} style={{ width: 100, height: 100 }} />
        </View>

        <Text style={signUpStyles.title}>Create New Account</Text>

        {/* Email container */}
        <View style={getInputContainerStyle(isEmailFilled)}>
          <Ionicons
            name="mail"
            size={20}
            color={getIconColor(isEmailFilled)}
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
            style={signUpStyles.textInput}
          />
        </View>

        {/* Password container */}
        <View style={getInputContainerStyle(isPasswordFilled)}>
          <Ionicons
            name="lock-closed"
            size={20}
            color={getIconColor(isPasswordFilled)}
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            mode="flat"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            secureTextEntry={!showPassword}
            style={signUpStyles.textInput}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color={getIconColor(isPasswordFilled)}
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>

        <View style={signUpStyles.rememberRow}>
          <TouchableOpacity
            style={signUpStyles.checkboxBox}
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

        {/* Sign up button */}
        <TouchableOpacity onPress={handleSignUp} style={signUpButtonStyle}>
          <Text style={signUpStyles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Already have an account? Sign in row */}
        <View style={signUpStyles.bottomRow}>
          <Text style={signUpStyles.subText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={signUpStyles.signInLink}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
