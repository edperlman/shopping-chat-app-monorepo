// packages/mobile_app/styles/SearchTypeStyles.ts

import { StyleSheet, Platform } from 'react-native';

export const searchTypeStyles = StyleSheet.create({
  /* ---------- Container Wrappers ---------- */
  screenWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 44 : 24,
  },
  contentContainer: {
    padding: 18,
  },

  /* ---------- Header / Top Bar ---------- */
  topBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  backIconTouchable: {
    marginRight: 16,
  },
  timeText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.2,
    color: '#000000',
  },

  /* ---------- Search Bar States ---------- */
  searchBarContainerInactive: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    height: 56,
    flex: 1,
  },
  searchBarContainerActive: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: '#246BFD',
    borderRadius: 12,
    backgroundColor: 'rgba(36, 107, 253, 0.08)',
    height: 56,
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#212121',
    paddingVertical: 0,
  },
  clearIcon: {
    width: 20,
    height: 20,
  },

  /* ---------- Filter Chips Row ---------- */
  chipsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    gap: 10,
  },
  chipFilled: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: '#246BFD',
  },
  chipFilledText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.2,
    color: '#FFFFFF',
  },
  chipOutlined: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#246BFD',
  },
  chipOutlinedText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.2,
    color: '#246BFD',
  },

  /* ---------- Loading Spinner & "Search Handling Element" ---------- */
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchHandlingElement: {
    width: 60,
    height: 60,
    backgroundColor: '#246BFD',
    borderRadius: 30,
    marginBottom: 0,
  },

  /* ---------- No Results Section ---------- */
  noResultsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 140,
  },
  noResultsIcon: {
    marginBottom: 16,
  },
  noResultsTitle: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    color: '#212121',
    marginBottom: 8,
  },
  noResultsSubtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#616161',
    textAlign: 'center',
  },

  /* ---------- Single-Column List Layout (Chats & Retailers) ---------- */
  chatSearchListContainer: {
    marginTop: 16,
    marginHorizontal: 18,
  },
  chatItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  chatAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  chatTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  chatBrandName: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: '#212121',
    marginBottom: 2,
  },
  chatMessagePreview: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#616161',
  },
  chatRightColumn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 60,
    paddingVertical: 4,
  },
  chatBadgeContainer: {
    minWidth: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#246BFD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    paddingHorizontal: 5,
  },
  chatBadgeText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 10,
    color: '#FFFFFF',
  },
  chatTimeText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 14,
    color: '#616161',
  },
});
