import { StyleSheet } from 'react-native';

export const signInStyles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 36,
    alignItems: 'center',
  },
  topBar: {
    width: '90%',
    maxWidth: 380,
    flexDirection: 'row',
    marginBottom: 30,
  },
  logoContainer: {
    width: '90%',
    maxWidth: 380,
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    color: '#212121',
    textAlign: 'center',
    marginBottom: 40,
  },

  /* Input containers for dynamic approach (empty vs. filled) */
  inputContainerEmpty: {
    width: 340,
    maxWidth: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    height: 56,
    marginBottom: 26,
    paddingHorizontal: 16,
  },
  inputContainerFilled: {
    width: 340,
    maxWidth: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    marginBottom: 26,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(36, 107, 253, 0.08)',
    borderColor: '#246BFD',
    borderWidth: 1,
    borderRadius: 16,
  },
  textInput: {
    flex: 1,
    backgroundColor: 'transparent',
    fontFamily: 'Urbanist',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#212121',
  },

  rememberRow: {
    width: 340,
    maxWidth: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
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

  /* Sign in button states: disabled vs. enabled */
  signInButtonDisabled: {
    width: 340,
    maxWidth: '90%',
    height: 58,
    backgroundColor: '#C4C4C4', // gray
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 34,
  },
  signInButtonEnabled: {
    width: 340,
    maxWidth: '90%',
    height: 58,
    backgroundColor: '#246BFD',
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
  },

  bottomRow: {
    width: 340,
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
