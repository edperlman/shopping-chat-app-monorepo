// packages/mobile_app/screens/Chat/RetailerChatScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Share, // OS share sheet
} from 'react-native';
import * as Clipboard from 'expo-clipboard'; // expo-based clipboard
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { retailerChatStyles as styles } from '../../styles/RetailerChatStyles';

type SystemMessage = {
  id: string;
  text: string;
  ctas: { label: string; action: string }[];
  showDisclaimer?: boolean;
};

export function RetailerChatScreen() {
  const navigation = useNavigation();

  const [personalDealSelected, setPersonalDealSelected] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  // System messages for affiliate flows, etc.
  const [systemMessages, setSystemMessages] = useState<SystemMessage[]>([]);
  // The affiliate link once generated
  const [affiliateLink, setAffiliateLink] = useState<string | null>(null);

  function handleGoBack() {
    navigation.goBack();
  }

  // "Unlock My Deal" tapped
  function handleDealPress() {
    setPersonalDealSelected(true);
  }

  // "Start Earning" flow
  function handleCommissionPress() {
    console.log('Earn Commission tapped');
    const username = 'Ed';
    const retailerName = 'Kmart';
    const commissionRate = '10%';
    const discountRate = '5% off';

    // Avoid duplicates
    const existingMsg = systemMessages.find(m => m.id === 'earn-commission-1');
    if (existingMsg) return;

    const newMessage: SystemMessage = {
      id: 'earn-commission-1',
      text: `Hey ${username}! Ready to earn commission from ${retailerName}?\n` +
        `By sharing your special link, you’ll earn ${commissionRate} on each sale, and friends get ${discountRate}!\n` +
        `Let’s get you set up in a few quick steps.`,
      ctas: [
        { label: 'Add Payout Details', action: 'payout' },
        { label: 'Generate My Link', action: 'generate' },
        { label: 'Share Link', action: 'share' },
        { label: 'Check Commission', action: 'stats' },
      ],
    };
    setSystemMessages(prev => [...prev, newMessage]);
  }

  // Inline CTA for system messages
  async function handleInlineCTA(action: string) {
    switch (action) {
      case 'payout': {
        console.log('User wants to add payout details');
        const newPayoutMsg: SystemMessage = {
          id: 'payout-1',
          text: 'Tap below to securely enter your bank or card details via Stripe.',
          ctas: [{ label: 'Proceed to Stripe', action: 'stripeOnboard' }],
          showDisclaimer: true,
        };
        setSystemMessages(prev => [...prev, newPayoutMsg]);
        break;
      }

      case 'stripeOnboard': {
        console.log('Open Stripe onboarding flow...');
        // Possibly a navigation or webview
        break;
      }

      case 'generate': {
        console.log('User wants to generate link');
        const link = 'https://myapp.com/deal/ABC123';
        setAffiliateLink(link);

        const linkMsg: SystemMessage = {
          id: 'link-1',
          text: `Your affiliate link is:\n${link}\nShare it with friends!`,
          ctas: [
            { label: 'Share Link', action: 'share' },
            { label: 'Check Commission', action: 'stats' },
          ],
        };
        setSystemMessages(prev => [...prev, linkMsg]);
        break;
      }

      case 'share': {
        console.log('User wants to share link');
        // Add share message if not already present
        if (!systemMessages.find(m => m.id === 'multi-share-1')) {
          const newShareMsg: SystemMessage = {
            id: 'multi-share-1',
            text: 'How would you like to share your link?',
            ctas: [
              { label: 'Copy Link', action: 'copyLink' },
              { label: 'Share', action: 'generalShare' },
              { label: 'Share via MioChat', action: 'mioChat' },
              { label: 'Invite Friends', action: 'inviteMio' },
            ],
          };
          setSystemMessages(prev => [...prev, newShareMsg]);
        }
        break;
      }

      case 'copyLink': {
        console.log('User tapped Copy Link');
        if (affiliateLink) {
          await Clipboard.setStringAsync(affiliateLink);
          console.log(`Copied link: ${affiliateLink}`);
        }
        break;
      }

      case 'generalShare': {
        console.log('User tapped Share (OS share sheet)');
        if (affiliateLink) {
          Share.share({ message: `Check this out! ${affiliateLink}` });
        }
        break;
      }

      case 'mioChat': {
        console.log('User tapped Share via MioChat');
        navigation.navigate('ChatList');
        break;
      }

      case 'inviteMio': {
        console.log('User tapped Invite Friends');
        // Possibly open contacts or a custom invite flow
        break;
      }

      case 'stats': {
        console.log('User wants to check commission stats');
        const statsMsg: SystemMessage = {
          id: 'stats-1',
          text: `You’ve earned $12.50 so far this month. We'll pay out on the 1st of next month!`,
          ctas: [],
        };
        setSystemMessages(prev => [...prev, statsMsg]);
        break;
      }

      default:
        break;
    }
  }

  // For sending a chat message (placeholder logic)
  function handleSendPress() {
    console.log('Sending message...');
  }

  // Budget selection
  function handleBudgetOptionPress(budget: string) {
    setSelectedBudget(budget);
    console.log('Selected budget =', budget);
  }

  return (
    <SafeAreaView style={styles.screenWrapper}>
      {/* ---------- Top Bar / Header ---------- */}
      <View style={styles.topBarContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backArrowTouchable}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kmart</Text>
        <Image
          source={require('../../assets/kmart_avatar.png')}
          style={styles.retailerAvatar}
        />
      </View>

      <View style={styles.chatContainer}>
        <ScrollView style={{ flex: 1 }}>
          {/* Date Tag: "Today" */}
          <View style={styles.dateTagContainer}>
            <Text style={styles.dateTagText}>Today</Text>
          </View>

          {/* Retailer bubble */}
          <View style={styles.retailerBubbleContainer}>
            <Text style={styles.retailerBubbleText}>
              Hi Ed! Welcome to Kmart. We’re excited to help you find great deals!
              Whether you’re looking for a personal discount or want to invite your
              friends for a group offer, let’s get started.
            </Text>
            <View style={styles.bubbleTimeRow}>
              <Text style={styles.bubbleTimeText}>09:41</Text>
            </View>
          </View>

          {/* "Unlock My Deal" CTA */}
          <TouchableOpacity
            style={[
              styles.ctaButton,
              personalDealSelected && styles.ctaButtonSelected,
            ]}
            onPress={handleDealPress}
          >
            <Text
              style={[
                styles.ctaButtonText,
                personalDealSelected && styles.ctaButtonTextSelected,
              ]}
            >
              Unlock My Deal
            </Text>
          </TouchableOpacity>

          {/* "Start Earning" CTA if user hasn't selected personal deal yet */}
          {!personalDealSelected && (
            <TouchableOpacity style={styles.ctaButton} onPress={handleCommissionPress}>
              <Text style={styles.ctaButtonText}>Start Earning</Text>
            </TouchableOpacity>
          )}

          {personalDealSelected && (
            <>
              {/* Budget container */}
              <View style={styles.personalDealContainer}>
                <Text style={styles.personalDealText}>
                  Great choice! Let’s tailor your deal. Which budget range suits you best?
                </Text>
                <View style={styles.budgetOptionsRow}>
                  <TouchableOpacity
                    style={styles.budgetOptionButton}
                    onPress={() => handleBudgetOptionPress('$100')}
                  >
                    <Text style={styles.budgetOptionText}>Under $100</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.budgetOptionButton}
                    onPress={() => handleBudgetOptionPress('$300')}
                  >
                    <Text style={styles.budgetOptionText}>Up to $300</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.budgetOptionButton}
                    onPress={() => handleBudgetOptionPress('$500')}
                  >
                    <Text style={styles.budgetOptionText}>Up to $500</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.budgetOptionButton}
                    onPress={() => handleBudgetOptionPress('$500+')}
                  >
                    <Text style={styles.budgetOptionText}>Over $500</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}

          {/* If user selected a budget, show discount bubble & "Share Your Link & Earn" CTA */}
          {selectedBudget && (
            <>
              <View style={styles.discountBubbleContainer}>
                <Text style={styles.discountBubbleText}>
                  Thank you for sharing your budget! We’re happy to offer you a 15% discount
                  on your next purchase. Use the promo code SAVE15AB34 at checkout. This
                  offer is valid for the next 24 hours, so don’t miss out!
                </Text>
                <View style={styles.bubbleTimeRow}>
                  <Text style={styles.bubbleTimeText}>09:41</Text>
                </View>
              </View>

              {/* "Share Your Link & Earn" CTA triggers the same "Start Earning" flow */}
              <TouchableOpacity
                style={styles.ctaButton}
                onPress={() => {
                  console.log('Share Your Link & Earn tapped => starting earning flow');
                  handleCommissionPress();
                }}
              >
                <Text style={styles.ctaButtonText}>Share Your Link & Earn</Text>
              </TouchableOpacity>
            </>
          )}

          {/* System messages (commission prompts, link gen, etc.) */}
          {systemMessages.map(msg => (
            <View key={msg.id} style={styles.systemBubbleContainer}>
              <Text style={styles.systemBubbleText}>{msg.text}</Text>

              {msg.showDisclaimer && (
                <Text style={styles.disclaimerText}>
                  Powered by Stripe. A new window will pop up securely for your payment details.
                </Text>
              )}

              <View style={styles.inlineCTARow}>
                {msg.ctas.map((cta, index) => (
                  <TouchableOpacity
                    key={`${msg.id}-cta-${index}`}
                    style={styles.inlineCTAButton}
                    onPress={() => handleInlineCTA(cta.action)}
                  >
                    <Text style={styles.inlineCTAText}>{cta.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Bottom Input Bar */}
        <View style={styles.bottomInputWrapper}>
          <View style={styles.chatInputContainer}>
            <Ionicons name="happy-outline" size={20} color="#9E9E9E" />
            <TextInput
              style={styles.chatInputText}
              placeholder="Type a message ..."
              placeholderTextColor="#9E9E9E"
            />
          </View>
          <TouchableOpacity style={styles.sendButton} onPress={() => console.log('Send pressed')}>
            <Ionicons name="send" size={20} color="#FFFFFF" style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
