import { StyleSheet } from 'react-native';

export const signInFilledStyles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // Padding helps push content downward, leaving arrow near the top
  scrollContentContainer: {
    paddingTop: 30,
    paddingBottom: 36,
    alignItems: 'center',
  },

  // Top bar row for the arrow
  topBar: {
    width: '90%',
    maxWidth: 380,
    flexDirection: 'row',
    marginBottom: 30,
  },

  // Smiley logo container
  logoContainer: {
    width: '90%',
    maxWidth: 380,
    alignItems: 'center',
    marginBottom: 40,
  },

  // Title styling ("Login to Your Account")
  title: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 32, // Slightly larger if you want to match the Figma's ~32px
    lineHeight: 38,
    color: '#212121',
    textAlign: 'center',
    marginBottom: 40,
  },

  // "Filled" input fields: light-blue background + blue border
  inputContainer: {
    width: 380,
    maxWidth: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginBottom: 24,

    // Figma-style "Transparent/Blue"
    backgroundColor: 'rgba(36, 107, 253, 0.08)',
    borderColor: '#246BFD',
    borderWidth: 1,
    borderRadius: 16,

    // Increase horizontal padding for icon & text spacing
    paddingHorizontal: 20,
  },

  textInput: {
    flex: 1,
    backgroundColor: 'transparent',
    fontFamily: 'Urbanist',
    fontWeight: '600', // Figma shows a slightly bolder text
    fontSize: 14,
    lineHeight: 20,
    color: '#212121',
  },

  rememberRow: {
    width: 380,
    maxWidth: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },

  checkboxBox: {
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: '#246BFD',
    borderRadius: 8,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Big, rounded sign-in button
  signInButton: {
    width: 380,
    maxWidth: '90%',
    height: 58,
    backgroundColor: '#246BFD', // Blue
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 34,
  },
  signInButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
    // Optional text shadow from Figma
    textShadowColor: 'rgba(36, 107, 253, 0.25)',
    textShadowOffset: { width: 4, height: 8 },
    textShadowRadius: 24,
  },

  // Bottom row with "Don’t have an account?" + Sign up link
  bottomRow: {
    width: 380,
    maxWidth: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subText: {
    fontFamily: 'Urbanist',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#9E9E9E',
  },
  signUpLink: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#246BFD',
    marginLeft: 4,
  },
});
