import { StyleSheet } from 'react-native';

/**
 * SignIn screen styles derived from "4_Light_sign in blank form" CSS snippet.
 */
export const signInStyles = StyleSheet.create({
  // 1) Overall container, originally "display: flex; flex-direction: column; background: #FFFFFF;"
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // For typical sign-in layout, we might add:
    paddingHorizontal: 24,
    paddingTop: 24,
    // ignoring position: relative, width: 428, height: 926
  },

  // 2) Possibly a top bar or small header region, ignoring the absolute 44px height
  topBar: {
    // In React Native, we typically do a row layout
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    // backgroundColor: '#FAFAFA' // example if you want a bar color
    // marginVertical: 12 or so, if needed
  },

  // 3) A main title or heading (like "Login to Your Account"), ignoring absolute widths
  title: {
    fontFamily: 'Urbanist', // from your snippet (must be installed or skip)
    fontStyle: 'normal',
    fontWeight: '700',      // bold
    fontSize: 32,           // original was 32px
    lineHeight: 38,         // 120% of 32 for nice spacing
    color: '#212121',       // "Greyscale / 900"
    textAlign: 'center',
    marginVertical: 16,
  },

  // 4) Subheading or the line "Don’t have an account?"
  subText: {
    fontFamily: 'Urbanist',
    fontWeight: '400',      // normal
    fontSize: 14,
    lineHeight: 20,         // 140% of 14
    color: '#9E9E9E',       // "Greyscale / 500"
    letterSpacing: 0.2,
    textAlign: 'right',     // from snippet
  },

  // 5) Input fields container (like the "Auto layout" with background: #FAFAFA, border-radius: 16px)
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    // ignoring exact widths/heights (380px x 60px), let RN adapt
    marginVertical: 8,
    paddingHorizontal: 20,
    // If you want consistent vertical spacing:
    paddingVertical: 12,
  },

  // 6) Input text style (if using plain <TextInput style={styles.inputText}>)
  inputText: {
    flex: 1,                // fill container horizontally
    fontFamily: 'Urbanist',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#9E9E9E',
  },

  // 7) Primary button (like "Type=Button, border-radius: 100px, background: #3062C8")
  primaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3062C8',
    borderRadius: 100,      // from snippet "border-radius: 100px"
    paddingVertical: 18,    // from snippet "padding: 18px 16px"
    paddingHorizontal: 16,
    // ignoring forced width: 380, better let RN fill parent
  },

  primaryButtonText: {
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    fontWeight: '700',      // bold
    fontSize: 16,
    lineHeight: 22,         // 140% of 16
    color: '#FFFFFF',       // "Others / White"
    letterSpacing: 0.2,
    textAlign: 'center',
    // from snippet "text-shadow: 4px 8px 24px rgba(36, 107, 253, 0.25)"
    // note: RN doesn't have built-in textShadow with multiple offsets, but you can do:
    textShadowColor: 'rgba(36, 107, 253, 0.25)',
    textShadowOffset: { width: 4, height: 8 },
    textShadowRadius: 24,
  },

  // 8) A "Remember me" checkbox row, ignoring absolute positions
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // from snippet: background: #FAFAFA ? or none if not needed
    gap: 12, // (in RN 0.71+ we have gap support, or you can do marginRight)
    marginVertical: 12,
  },

  // 9) The box of the checkbox (border: 3px solid #246BFD; border-radius: 8px)
  checkboxBox: {
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: '#246BFD', // "Primary/500"
    borderRadius: 8,
  },

  // 10) Extra layout container for your "Auto Layout Vertical" (padding: 24px 24px 48px)
  verticalLayout: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 48,
    gap: 28, // new RN style for spacing
  },
});

