// packages/mobile_app/styles/RetailerChatStyles.ts
import { StyleSheet, Platform } from 'react-native';

export const retailerChatStyles = StyleSheet.create({
  /* ---------- Overall Screen & Basic Layout ---------- */
  screenWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 44 : 24,
    paddingBottom: 16,
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  /* ---------- Top Bar / Header ---------- */
  topBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 8,
    position: 'relative',
  },
  backArrowTouchable: {
    position: 'absolute',
    left: 24,
  },
  headerTitle: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    color: '#000000',
  },
  retailerAvatar: {
    position: 'absolute',
    right: 24,
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  /* ---------- Date Tag ---------- */
  dateTagContainer: {
    alignSelf: 'center',
    marginVertical: 8,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
  },
  dateTagText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#616161',
  },

  /* ---------- Retailer Message Bubble ---------- */
  retailerBubbleContainer: {
    alignSelf: 'flex-start',
    maxWidth: '75%',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    borderTopLeftRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 36,
  },
  retailerBubbleText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: '#212121',
    marginBottom: 10,
  },
  bubbleTimeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bubbleTimeText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.2,
    color: '#9E9E9E',
  },

  /* ---------- CTA Buttons ---------- */
  ctaButton: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: '#E9F0FF',
  },
  ctaButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.2,
    color: '#246BFD',
  },
  ctaButtonSelected: {
    backgroundColor: '#246BFD', 
  },
  ctaButtonTextSelected: {
    color: '#FFFFFF', 
  },

  /* ---------- Bottom Input Bar ---------- */
  bottomInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  chatInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    paddingHorizontal: 20,
    gap: 12,
    height: 56,
  },
  chatInputText: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#212121',
  },
  sendButton: {
    width: 52,
    height: 52,
    marginLeft: 12,
    backgroundColor: '#246BFD',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    transform: [{ rotate: '-50deg' }],
  },

  /* ----- Personal Deal Budget Options Bubble ----- */
  personalDealContainer: {
    alignSelf: 'flex-start',
    maxWidth: '75%',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    borderTopLeftRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
  personalDealText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: '#212121',
    marginBottom: 12,
  },
  budgetOptionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  budgetOptionButton: {
    backgroundColor: '#E9F0FF',
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  budgetOptionText: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 16,
    color: '#246BFD',
  },

  /* ---------- NEW: Discount bubble after budget selection ---------- */
  discountBubbleContainer: {
    alignSelf: 'flex-start',
    maxWidth: '75%',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    borderTopLeftRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 16,
  },
  discountBubbleText: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#212121',
    marginBottom: 6,
  },
});
