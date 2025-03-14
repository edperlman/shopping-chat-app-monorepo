// packages/mobile_app/styles/EmptyChatStyles.ts
import { StyleSheet } from 'react-native';

export const emptyChatStyles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContentContainer: {
    paddingTop: 0,
    paddingBottom: 36,
  },

  /* ------------------ Top Bar ------------------ */
  topBar: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandIcon: {
    width: 32,
    height: 32,
    marginRight: 8,
    resizeMode: 'contain',
  },
  screenTitle: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    color: '#000000',
  },
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  /* ------------------ Tabs ------------------ */
  tabRow: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginBottom: 70,
  },
  tabItemActive: {
    alignItems: 'center',
    flex: 1,
  },
  tabItemInactive: {
    alignItems: 'center',
    flex: 1,
  },
  tabTextActive: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 25,
    color: '#000000',
  },
  tabTextInactive: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 25,
    color: '#000000',
    opacity: 0.6,
  },
  tabUnderline: {
    width: '100%',
    height: 4,
    backgroundColor: '#616161',
    borderRadius: 100,
    marginTop: 4,
  },

  /* ------------------ Main Content ------------------ */
  mainContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  bigBubble: {
    width: 220,
    height: 220,
    marginBottom: 50,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 48,
    color: '#246BFD',
    textAlign: 'center',
    marginBottom: 18,
  },
  subtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 25,
    color: '#212121',
    textAlign: 'center',
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  actionButton: {
    width: 380,
    maxWidth: '90%',
    height: 58,
    backgroundColor: '#246BFD',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#246BFD',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 5,
  },
  actionButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
    textShadowColor: 'rgba(36, 107, 253, 0.25)',
    textShadowOffset: { width: 4, height: 8 },
    textShadowRadius: 24,
  },
});
