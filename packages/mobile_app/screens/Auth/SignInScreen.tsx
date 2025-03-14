// packages/mobile_app/screens/Auth/SignInScreen.tsx
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

import { signInStyles } from '../../styles/SignInStyles';
import { RootStackParamList } from '../../navigation/types';
import SmileyIcon from '../../assets/smiley.png';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignInScreen({ navigation }: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isEmailFilled = email.trim().length > 0;
  const isPasswordFilled = password.trim().length > 0;
  const isSignInEnabled = isEmailFilled && isPasswordFilled;

  function getInputContainerStyle(isFilled: boolean) {
    return isFilled
      ? signInStyles.inputContainerFilled
      : signInStyles.inputContainerEmpty;
  }

  function getIconColor(isFilled: boolean): string {
    return isFilled ? '#246BFD' : '#9E9E9E';
  }

  const signInButtonStyle = isSignInEnabled
    ? signInStyles.signInButtonEnabled
    : signInStyles.signInButtonDisabled;

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function handleSignIn() {
    if (isSignInEnabled) {
      // Navigate to ChatList after sign in
      navigation.navigate('ChatList');
    }
  }

  function handleSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <SafeAreaView style={signInStyles.screenWrapper}>
      <ScrollView
        contentContainerStyle={signInStyles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={signInStyles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#212121" />
          </TouchableOpacity>
        </View>

        <View style={signInStyles.logoContainer}>
          <Image source={SmileyIcon} style={{ width: 100, height: 100 }} />
        </View>

        <Text style={signInStyles.title}>Login to Your Account</Text>

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
            style={signInStyles.textInput}
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
            style={signInStyles.textInput}
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

        <View style={signInStyles.rememberRow}>
          <TouchableOpacity
            style={signInStyles.checkboxBox}
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

        <TouchableOpacity onPress={handleSignIn} style={signInButtonStyle}>
          <Text style={signInStyles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={signInStyles.bottomRow}>
          <Text style={signInStyles.subText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={signInStyles.signUpLink}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
