// packages/mobile_app/screens/Discount/DiscountOptionsScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { discountOptionsStyles } from '../../styles/DiscountOptionsStyles';

// Example icons (replace or adjust these paths as needed)
// Option icons: personal.png, group.png, commission.png, invite.png
// Brand avatars: Kmart, BigW, Adidas, or fallback to a default if missing
const optionAssets: Record<string, any> = {
  personal: require('../../assets/personal_deal_icon.png'),
  group: require('../../assets/group_deal_icon.png'),
  commission: require('../../assets/earn_commission_icon.png'),
  invite: require('../../assets/invite_friends_icon.png'),
  kmart: require('../../assets/kmart_avatar.png'),
  bigw: require('../../assets/bigw_avatar.png'),
  adidas: require('../../assets/Adidas_offline.png'),
  marci: require('../../assets/Marci.png'),
  sanjuanita: require('../../assets/Sanjuanita.png'),
  // If any are missing, you can fallback below
};

// A helper to load require() or a default fallback image
function getIconSource(key: string) {
  if (optionAssets[key]) {
    return optionAssets[key];
  }
  return require('../../assets/default_avatar.png');
}

// Example data array for the list items
const discountData = [
  {
    id: '1',
    iconKey: 'personal',
    title: 'Personal Deal',
    subtitle: '',
  },
  {
    id: '2',
    iconKey: 'group',
    title: 'Group Deal',
    subtitle: '',
  },
  {
    id: '3',
    iconKey: 'commission',
    title: 'Earn Commission',
    subtitle: '',
  },
  {
    id: '4',
    iconKey: 'invite',
    title: 'Invite Friends',
    subtitle: '',
  },
  {
    id: '5',
    iconKey: 'kmart',
    title: 'Kmart',
    subtitle: '+1-300-555-0136',
  },
  {
    id: '6',
    iconKey: 'bigw',
    title: 'BIG W',
    subtitle: '+1-300-555-0135',
  },
  {
    id: '7',
    iconKey: 'adidas',
    title: 'adidas',
    subtitle: 'Your personal deal',
  },
  {
    id: '8',
    iconKey: 'marci', // fallback
    title: 'Marci Senter',
    subtitle: '+1-202-555-0136',
  },
  {
    id: '9',
    iconKey: 'sanjuanita', // fallback
    title: 'Sanjuanita Ordonez',
    subtitle: '+1-300-555-0161',
  },
  // add more items if you like
];

// If you have a type for your param list:
type DiscountOptionsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DiscountOptions'
>;

export default function DiscountOptionsScreen({
  navigation,
}: DiscountOptionsScreenProps) {
  // ---------------------------
  // Modal + pop-up state
  // ---------------------------
  const [showInviteModal, setShowInviteModal] = useState(false);

  function handleInvitePress() {
    setShowInviteModal(true);
  }
  function handleCloseModal() {
    setShowInviteModal(false);
  }

  // Navigate user back
  function handleGoBack() {
    navigation.goBack();
  }

  // NEW: Only for “Personal Deal,” “Group Deal,” or “Earn Commission”
  function maybeNavigateToSearch(title: string) {
    if (
      title === 'Personal Deal' ||
      title === 'Group Deal' ||
      title === 'Earn Commission'
    ) {
      navigation.navigate('SearchType');
    }
  }

  return (
    <SafeAreaView style={discountOptionsStyles.screenWrapper}>
      {/* Header Bar */}
      <View style={discountOptionsStyles.topBar}>
        <TouchableOpacity
          onPress={handleGoBack}
          style={discountOptionsStyles.backArrow}
        >
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={discountOptionsStyles.headerTitle}>Deal Options</Text>
      </View>

      {/* Scroll the entire options list */}
      <ScrollView
        style={discountOptionsStyles.scrollStyle}
        contentContainerStyle={discountOptionsStyles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {discountData.map((item) => {
          const iconSrc = getIconSource(item.iconKey);

          // 1) Check if item is "Invite Friends" => open modal
          if (item.title === 'Invite Friends') {
            return (
              <TouchableOpacity
                key={item.id}
                style={discountOptionsStyles.itemRow}
                onPress={handleInvitePress}
              >
                <View style={discountOptionsStyles.iconContainer}>
                  <Image source={iconSrc} style={discountOptionsStyles.circleIcon} />
                </View>

                <View style={discountOptionsStyles.textContainer}>
                  <Text style={discountOptionsStyles.itemTitle}>{item.title}</Text>
                  {!!item.subtitle && (
                    <Text style={discountOptionsStyles.itemSubtitle}>
                      {item.subtitle}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          }

          // 2) If item is "Personal Deal," "Group Deal," or "Earn Commission," => go to SearchType
          if (
            item.title === 'Personal Deal' ||
            item.title === 'Group Deal' ||
            item.title === 'Earn Commission'
          ) {
            return (
              <TouchableOpacity
                key={item.id}
                style={discountOptionsStyles.itemRow}
                onPress={() => maybeNavigateToSearch(item.title)}
              >
                <View style={discountOptionsStyles.iconContainer}>
                  <Image source={iconSrc} style={discountOptionsStyles.circleIcon} />
                </View>

                <View style={discountOptionsStyles.textContainer}>
                  <Text style={discountOptionsStyles.itemTitle}>{item.title}</Text>
                  {!!item.subtitle && (
                    <Text style={discountOptionsStyles.itemSubtitle}>
                      {item.subtitle}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          }

          // 3) Otherwise, keep everything exactly as it was
          return (
            <View key={item.id} style={discountOptionsStyles.itemRow}>
              <View style={discountOptionsStyles.iconContainer}>
                <Image source={iconSrc} style={discountOptionsStyles.circleIcon} />
              </View>

              <View style={discountOptionsStyles.textContainer}>
                <Text style={discountOptionsStyles.itemTitle}>{item.title}</Text>
                {!!item.subtitle && (
                  <Text style={discountOptionsStyles.itemSubtitle}>{item.subtitle}</Text>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* ------------------------------------------------------
          Invite Friends Popup Modal
      ------------------------------------------------------ */}
      <Modal
        transparent
        visible={showInviteModal}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        {/* Dark overlay so user can tap outside the card to close */}
        <Pressable
          style={discountOptionsStyles.modalOverlay}
          onPress={handleCloseModal}
        >
          {/* White popup card; stopping event propagation so inner taps don't close it */}
          <Pressable
            style={discountOptionsStyles.inviteModalContainer}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Option 1: Copy Link */}
            <TouchableOpacity
              style={discountOptionsStyles.inviteRow}
              onPress={() => {
                // implement "copy link" logic
                handleCloseModal();
              }}
            >
              <Ionicons
                name="mail-outline"
                size={20}
                color="#212121"
                style={{ marginRight: 8 }}
              />
              <Text style={discountOptionsStyles.inviteText}>Copy Link</Text>
            </TouchableOpacity>
            <View style={discountOptionsStyles.inviteDivider} />

            {/* Option 2: Message */}
            <TouchableOpacity
              style={discountOptionsStyles.inviteRow}
              onPress={() => {
                // implement "message" logic
                handleCloseModal();
              }}
            >
              <Ionicons
                name="chatbubble-outline"
                size={20}
                color="#212121"
                style={{ marginRight: 8 }}
              />
              <Text style={discountOptionsStyles.inviteText}>Message</Text>
            </TouchableOpacity>
            <View style={discountOptionsStyles.inviteDivider} />

            {/* Option 3: Share */}
            <TouchableOpacity
              style={discountOptionsStyles.inviteRow}
              onPress={() => {
                // implement "share" logic
                handleCloseModal();
              }}
            >
              <Ionicons
                name="share-social-outline"
                size={20}
                color="#212121"
                style={{ marginRight: 8 }}
              />
              <Text style={discountOptionsStyles.inviteText}>Share</Text>
            </TouchableOpacity>
            <View style={discountOptionsStyles.inviteDivider} />

            {/* Option 4: Cancel */}
            <TouchableOpacity
              style={discountOptionsStyles.inviteRow}
              onPress={handleCloseModal}
            >
              <Ionicons
                name="close-circle-outline"
                size={20}
                color="#212121"
                style={{ marginRight: 8 }}
              />
              <Text style={discountOptionsStyles.inviteText}>Cancel</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
      {/* End Invite Friends Popup */}
    </SafeAreaView>
  );
}
