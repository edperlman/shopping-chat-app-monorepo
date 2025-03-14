import { StyleSheet } from 'react-native';

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* 
    We use contentContainer akin to SignIn’s scrollContentContainer:
    - paddingTop: 30, paddingBottom: 36
    - alignItems: 'center'
  */
  contentContainer: {
    paddingTop: 110,     // Matches SignInStyles.scrollContentContainer
    paddingBottom: 36,  // Matches SignInStyles.scrollContentContainer
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  /* Smiley Icon */
  smileyIcon: {
    width: 250,
    height: 250,
    marginBottom: 50,    // Similar to signInStyles.logoContainer margin
    resizeMode: 'contain',
  },

  /* Title (bigger than Sign In, but same spacing logic) */
  title: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 48,
    color: '#246BFD',
    textAlign: 'center',
    marginBottom: 40,    // Align with signInStyles.title spacing
  },

  /* Subtitle */
  subtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 25,
    color: '#212121',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 50,    // Keep spacing consistent with other elements
  },

  /* 
    Primary button: match SignIn’s 
    - width: 340 (instead of 380)
    - height: 58
    - borderRadius: 100
    - marginBottom: 34
  */
  buttonContainer: {
    width: 340,
    maxWidth: '90%',
    height: 58,
    backgroundColor: '#246BFD',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',

    // Consistent with signInStyles (signInButtonEnabled)
    marginBottom: 34,

    // Shadow from your original code
    shadowColor: '#246BFD',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 5, // For Android
  },

  buttonText: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',

    // Text shadow from your original code
    textShadowColor: 'rgba(36, 107, 253, 0.25)',
    textShadowOffset: { width: 4, height: 8 },
    textShadowRadius: 24,
  },
});
