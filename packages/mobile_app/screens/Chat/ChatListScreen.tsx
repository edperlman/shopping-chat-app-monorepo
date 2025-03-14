// packages/mobile_app/screens/Chat/ChatListScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { chatListStyles } from '../../styles/ChatListStyles';
import ChatLogo from '../../assets/chats_logo.png';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatList'>;

// Maps each avatarFile to its actual local image
const avatarAssets: Record<string, any> = {
  'kmart_avatar.png': require('../../assets/kmart_avatar.png'),
  'Adidas_offline.png': require('../../assets/Adidas_offline.png'),
  'Alfonzo_online.png': require('../../assets/Alfonzo_online.png'),
  'Frieda_offline.png': require('../../assets/Frieda_offline.png'),
  'Willard_avatar.png': require('../../assets/Willard_avatar.png'),
};

// A helper that returns the correct require() or a fallback
function getAvatarSource(filename: string | undefined) {
  if (filename && avatarAssets[filename]) {
    return avatarAssets[filename];
  }
  return require('../../assets/default_avatar.png');
}

// Example non-empty data
const dummyChats = [
  {
    id: '1',
    avatarFile: 'kmart_avatar.png',
    name: 'Kmart',
    message: 'Received 15% personal discount 😍😍',
    badgeCount: 1,
    time: '20.00',
    isOnline: true,
  },
  {
    id: '2',
    avatarFile: 'Adidas_offline.png',
    name: 'adidas',
    message: 'Received 15% personal discount 👍',
    badgeCount: 2,
    time: '18:39',
    isOnline: false,
  },
  {
    id: '3',
    // avatarFile not in dictionary => fallback
    avatarFile: 'office_deals.png',
    name: 'Office Deals 💪',
    message: 'Received 25% group discount',
    badgeCount: 0,
    time: '12:26',
    isOnline: false,
  },
  {
    id: '4',
    avatarFile: 'Alfonzo_online.png',
    name: 'Alfonzo Schuessler',
    message: 'Wow love this deal ❤️',
    badgeCount: 3,
    time: '09:48',
    isOnline: true,
  },
  {
    id: '5',
    avatarFile: 'Frieda_offline.png',
    name: 'Frieda Varnes',
    message: 'Thank you so much andrew 🔥',
    badgeCount: 4,
    time: 'Yesterday',
    isOnline: false,
  },
  {
    id: '6',
    avatarFile: 'Willard_avatar.png',
    name: 'Willard Purnell',
    message: 'I know… I’m trying to get the …',
    badgeCount: 2,
    time: 'Dec 19, 2024',
    isOnline: true,
  },
  {
    id: '7',
    avatarFile: 'unknown_file.png',
    name: 'My Family Deals ❤️',
    message: 'Received 25% group discount',
    badgeCount: 0,
    time: 'Dec 20, 2024',
    isOnline: false,
  },
  {
    id: '8',
    avatarFile: 'some_random.png',
    name: 'Elmer Laverty',
    message: 'Thanks for the update!',
    badgeCount: 0,
    time: 'Dec 18, 2024',
    isOnline: false,
  },
  {
    id: '9',
    avatarFile: 'some_random.png',
    name: 'Marley Perlman',
    message: 'Sounds great! Good luck :)',
    badgeCount: 0,
    time: 'Dec 03, 2024',
    isOnline: false,
  },
];

export default function ChatListScreen({ navigation }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  function handleSearch() {
    console.log('Search pressed');
  }

  function handleMenuOption(option: string) {
    console.log('Menu option selected:', option);
    setShowMenu(false);
    // e.g. you could navigate to other screens here
  }

  function handleStartDeal() {
    // Navigate to your discount options screen
    navigation.navigate('DiscountOptions');
  }

  return (
    <SafeAreaView style={chatListStyles.screenWrapper}>
      <View style={{ flex: 1 }}>
        {/* Top bar */}
        <View style={chatListStyles.topBar}>
          {/* Left row: brand icon + text */}
          <View style={chatListStyles.leftRow}>
            <Image
              source={ChatLogo}
              style={[chatListStyles.brandIcon, { resizeMode: 'contain' }]}
            />
            <Text style={chatListStyles.screenTitle}>Chats</Text>
          </View>

          {/* Right row: search & three-dots */}
          <View style={chatListStyles.rightRow}>
            <TouchableOpacity onPress={handleSearch}>
              <Ionicons name="search" size={24} color="#212121" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMenu}>
              <Ionicons name="ellipsis-horizontal" size={24} color="#212121" />
            </TouchableOpacity>
          </View>
        </View>

        {/* If showMenu => render the dropdown menu */}
        {showMenu && (
          <View style={chatListStyles.menuContainer}>
            {/* Option 1 */}
            <TouchableOpacity
              style={chatListStyles.menuItemRow}
              onPress={() => handleMenuOption('select')}
            >
              <Ionicons
                name="checkbox-outline"
                size={20}
                color="#212121"
                style={chatListStyles.menuItemIcon}
              />
              <Text style={chatListStyles.menuItemText}>Select chats</Text>
            </TouchableOpacity>

            <View style={chatListStyles.menuDivider} />

            {/* Option 2 */}
            <TouchableOpacity
              style={chatListStyles.menuItemRow}
              onPress={() => handleMenuOption('contacts')}
            >
              <Ionicons
                name="people-outline"
                size={20}
                color="#212121"
                style={chatListStyles.menuItemIcon}
              />
              <Text style={chatListStyles.menuItemText}>Contacts</Text>
            </TouchableOpacity>

            <View style={chatListStyles.menuDivider} />

            {/* Option 3 */}
            <TouchableOpacity
              style={chatListStyles.menuItemRow}
              onPress={() => handleMenuOption('settings')}
            >
              <Ionicons
                name="settings-outline"
                size={20}
                color="#212121"
                style={chatListStyles.menuItemIcon}
              />
              <Text style={chatListStyles.menuItemText}>Settings</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Tabs row */}
        <View style={chatListStyles.tabRow}>
          <TouchableOpacity style={chatListStyles.tabItemActive}>
            <Text style={chatListStyles.tabTextActive}>Chats</Text>
            <View style={chatListStyles.tabUnderline} />
          </TouchableOpacity>
          <TouchableOpacity style={chatListStyles.tabItemInactive}>
            <Text style={chatListStyles.tabTextInactive}>Past Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={chatListStyles.tabItemInactive}>
            <Text style={chatListStyles.tabTextInactive}>Calls</Text>
          </TouchableOpacity>
        </View>

        {/* ScrollView of chat items */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[
            chatListStyles.chatListContainer,
            { paddingBottom: 120 },
          ]}
          showsVerticalScrollIndicator={true}
        >
          {dummyChats.map((chat) => {
            // handle the avatar require or fallback
            const avatarSrc = getAvatarSource(chat.avatarFile);
            return (
              <View key={chat.id} style={chatListStyles.chatItemRow}>
                {/* Left: avatar + text */}
                <View style={chatListStyles.chatLeft}>
                  <View style={chatListStyles.avatarContainer}>
                    <Image source={avatarSrc} style={chatListStyles.avatarImage} />
                    {chat.isOnline && <View style={chatListStyles.onlineDot} />}
                  </View>

                  <View style={chatListStyles.chatTextContainer}>
                    <Text style={chatListStyles.chatName}>{chat.name}</Text>
                    <Text style={chatListStyles.chatMessage}>{chat.message}</Text>
                  </View>
                </View>

                {/* Right: badge + time */}
                <View style={chatListStyles.chatRight}>
                  {chat.badgeCount > 0 && (
                    <View style={chatListStyles.badgeContainer}>
                      <Text style={chatListStyles.badgeText}>{chat.badgeCount}</Text>
                    </View>
                  )}
                  <Text style={chatListStyles.chatTime}>{chat.time}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        {/* Floating button => navigate to discount options */}
        <View style={styles.floatingButtonContainer}>
          <TouchableOpacity
            style={chatListStyles.bottomActionButton}
            onPress={handleStartDeal}
          >
            <Text style={chatListStyles.bottomActionText}>Start New Deal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Local style for the pinned button
const styles = StyleSheet.create({
  floatingButtonContainer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 24,
  },
});
