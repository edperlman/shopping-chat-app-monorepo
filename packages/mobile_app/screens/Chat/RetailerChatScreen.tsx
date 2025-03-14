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
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { retailerChatStyles as styles } from '../../styles/RetailerChatStyles';

export function RetailerChatScreen() {
  const navigation = useNavigation();

  // Toggle for "Get My Personal Deal" selection
  const [personalDealSelected, setPersonalDealSelected] = useState(false);

  // Track user’s chosen budget (null if not chosen)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleDealPress() {
    // Once tapped, show budget selections
    setPersonalDealSelected(true);
  }

  function handleCommissionPress() {
    // "Earn Commission" tapped
    console.log('Earn Commission tapped');
  }

  function handleSendPress() {
    console.log('Sending message...');
  }

  // User chooses a budget
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

          {/* Retailer's main bubble */}
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

          {/* "Get My Personal Deal" CTA */}
          <TouchableOpacity
            onPress={handleDealPress}
            style={[
              styles.ctaButton,
              personalDealSelected && styles.ctaButtonSelected,
            ]}
          >
            <Text
              style={[
                styles.ctaButtonText,
                personalDealSelected && styles.ctaButtonTextSelected,
              ]}
            >
              Get My Personal Deal
            </Text>
          </TouchableOpacity>

          {/* If not selected personal deal yet, show Earn Commission here */}
          {!personalDealSelected && (
            <TouchableOpacity style={styles.ctaButton} onPress={handleCommissionPress}>
              <Text style={styles.ctaButtonText}>Earn Commission</Text>
            </TouchableOpacity>
          )}

          {/* If "Get My Personal Deal" is tapped, show Budget container + Earn Commission below */}
          {personalDealSelected && (
            <>
              <View style={styles.personalDealContainer}>
                <Text style={styles.personalDealText}>
                  Please select your estimated budget range:
                </Text>
                <View style={styles.budgetOptionsRow}>
                  <TouchableOpacity
                    style={styles.budgetOptionButton}
                    onPress={() => handleBudgetOptionPress('$100')}
                  >
                    <Text style={styles.budgetOptionText}>My Budget: Up to $100</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.budgetOptionButton}
                    onPress={() => handleBudgetOptionPress('$300')}
                  >
                    <Text style={styles.budgetOptionText}>My Budget: Up to $300</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.budgetOptionButton}
                    onPress={() => handleBudgetOptionPress('$500')}
                  >
                    <Text style={styles.budgetOptionText}>My Budget: Up to $500</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.budgetOptionButton}
                    onPress={() => handleBudgetOptionPress('$500+')}
                  >
                    <Text style={styles.budgetOptionText}>My Budget: Over $500</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Earn Commission now appears below the Budget section */}
              <TouchableOpacity style={styles.ctaButton} onPress={handleCommissionPress}>
                <Text style={styles.ctaButtonText}>Earn Commission</Text>
              </TouchableOpacity>
            </>
          )}

          {/* If a budget is chosen, show the discount bubble */}
          {selectedBudget && (
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
          )}
        </ScrollView>

        {/* ---------- Bottom Input Bar ---------- */}
        <View style={styles.bottomInputWrapper}>
          <View style={styles.chatInputContainer}>
            <Ionicons name="happy-outline" size={20} color="#9E9E9E" />
            <TextInput
              style={styles.chatInputText}
              placeholder="Type a message ..."
              placeholderTextColor="#9E9E9E"
            />
          </View>
          <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
            <Ionicons name="send" size={20} color="#FFFFFF" style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
