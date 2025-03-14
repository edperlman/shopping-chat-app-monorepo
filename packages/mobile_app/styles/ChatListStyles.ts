// packages/mobile_app/styles/ChatListStyles.ts

import { StyleSheet, Platform } from 'react-native';

export const chatListStyles = StyleSheet.create({
  /* --------------- Overall Screen --------------- */
  // (1) Add conditional paddingTop so the screen won't clash with the phone’s status bar.
  screenWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 44 : 24,
  },
  scrollContentContainer: {
    // (2) If you need additional space below the header, you can add some padding here.
    paddingTop: 0,       // originally 0; adjust if needed (e.g., 8 or 16)
    paddingBottom: 36,
  },

  /* --------------- Top Bar --------------- */
  // (3) Increase vertical padding + marginBottom to create space after "Chats" heading.
  topBar: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 12, // was 12
    marginBottom: 8,     // new to separate the header from the chat list
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

  /* --------------- Tabs Row --------------- */
  tabRow: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginBottom: 16,
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

  /* --------------- Chat List Container --------------- */
  chatListContainer: {
    paddingHorizontal: 24,
  },

  /* --------------- Single Chat Row --------------- */
  chatItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18, // spacing between each chat item
  },
  chatLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    marginRight: 16,
    position: 'relative',
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: 'cover',
  },
  onlineDot: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#246BFD',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    bottom: 0,
    right: 0,
  },
  chatTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  chatName: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 18,
    color: '#212121',
    marginBottom: 2,
  },
  chatMessage: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    color: '#616161',
  },

  /* --------------- Right Column (badge/time) --------------- */
  chatRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 60,
    paddingVertical: 4,
  },
  badgeContainer: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#246BFD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  badgeText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 10,
    color: '#FFFFFF',
  },
  chatTime: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    color: '#616161',
  },

  /* --------------- Floating Deal Button --------------- */
  bottomButtonWrapper: {
    marginTop: 16,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  bottomActionButton: {
    width: '100%',
    maxWidth: 380,
    height: 58,
    backgroundColor: '#246BFD',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#246BFD',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 5,
  },
  bottomActionText: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF',
  },

  /* --------------- Dropdown Menu Styles --------------- */
  menuContainer: {
    position: 'absolute',
    top: 104,
    right: 24,
    width: 160,
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 28,
    shadowColor: 'rgba(4, 6, 15, 1)',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 6,
    zIndex: 999,
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  menuItemIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  menuItemText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 14,
    color: '#212121',
  },
  menuDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 8,
  },
});
