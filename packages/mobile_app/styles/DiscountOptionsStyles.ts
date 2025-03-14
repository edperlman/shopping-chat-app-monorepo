// packages/mobile_app/styles/DiscountOptionsStyles.ts

import { StyleSheet, Platform } from 'react-native';

export const discountOptionsStyles = StyleSheet.create({
  /* ---------------- Overall Screen & Header ---------------- */
  screenWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 44 : 24,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 8,
  },
  headerTitle: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 29,
    color: '#000000',
  },

  /* ---------------- Scrolling Container ---------------- */
  scrollStyle: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 36,
  },

  /* ---------------- List or Row Items ---------------- */
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  iconContainer: {
    width: 60,
    height: 60,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 1,
  },
  itemTitle: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#212121',
    marginBottom: 2,
  },
  itemSubtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#616161',
  },

  /* ------------------------------------------------------
   |               NEW: Invite Friends Popup              |
   ------------------------------------------------------ */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inviteModalContainer: {
    width: 280,
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    padding: 20,
    // iOS Shadow
    shadowColor: 'rgba(4, 6, 15, 1)',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    // Android Shadow
    elevation: 6,
  },
  inviteRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  inviteText: {
    marginLeft: 4,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#212121',
  },
  inviteDivider: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: '#EEEEEE',
  },
});
