// packages/mobile_app/screens/Chat/EmptyChatScreen.tsx

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { emptyChatStyles } from '../../styles/EmptyChatStyles';
import { RootStackParamList } from '../../navigation/types';
import ChatLogo from '../../assets/chats_logo.png';
import BubbleIcon from '../../assets/smiley_group.png';

// 1) For typed route props
type Props = NativeStackScreenProps<RootStackParamList, 'EmptyChat'>;

export default function EmptyChatScreen({ navigation }: Props) {
  // 2) Navigate to DiscountOptions on button press
  function handleStartDeal() {
    navigation.navigate('DiscountOptions');
  }

  return (
    <SafeAreaView style={emptyChatStyles.screenWrapper}>
      <ScrollView
        contentContainerStyle={emptyChatStyles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Top bar */}
        <View style={emptyChatStyles.topBar}>
          <View style={emptyChatStyles.leftRow}>
            <Image
              source={ChatLogo}
              style={[emptyChatStyles.brandIcon, { resizeMode: 'contain' }]}
            />
            <Text style={emptyChatStyles.screenTitle}>Chats</Text>
          </View>

          <View style={emptyChatStyles.rightRow}>
            <TouchableOpacity onPress={() => console.log('Search pressed')}>
              <Ionicons name="search" size={24} color="#212121" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Menu pressed')}>
              <Ionicons name="ellipsis-horizontal" size={24} color="#212121" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs row */}
        <View style={emptyChatStyles.tabRow}>
          <TouchableOpacity style={emptyChatStyles.tabItemActive}>
            <Text style={emptyChatStyles.tabTextActive}>Chats</Text>
            <View style={emptyChatStyles.tabUnderline} />
          </TouchableOpacity>
          <TouchableOpacity style={emptyChatStyles.tabItemInactive}>
            <Text style={emptyChatStyles.tabTextInactive}>Past Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={emptyChatStyles.tabItemInactive}>
            <Text style={emptyChatStyles.tabTextInactive}>Calls</Text>
          </TouchableOpacity>
        </View>

        {/* Main content */}
        <View style={emptyChatStyles.mainContent}>
          <Image
            source={BubbleIcon}
            style={emptyChatStyles.bigBubble}
            resizeMode="contain"
          />
          <Text style={emptyChatStyles.title}>Welcome! 👋</Text>
          <Text style={emptyChatStyles.subtitle}>
            MioChat connects you to your favourite brands - start chatting now!
          </Text>

          {/* 3) Use the same label or rename to "Start New Deal" */}
          <TouchableOpacity
            style={emptyChatStyles.actionButton}
            onPress={handleStartDeal}
          >
            <Text style={emptyChatStyles.actionButtonText}>Start New Deal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
