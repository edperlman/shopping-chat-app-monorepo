// packages/mobile_app/screens/Search/SearchTypeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { searchTypeStyles as styles } from '../../styles/SearchTypeStyles';

// Mock chat data
const mockChatSearchData = [
  {
    id: '1',
    avatar: require('../../assets/kmart_avatar.png'),
    brandName: 'Kmart',
    message: 'Exclusive deal: 20% off!',
    time: '12:26',
    badgeCount: 0,
  },
  {
    id: '2',
    avatar: require('../../assets/bigw_avatar.png'),
    brandName: 'BIG W',
    message: 'Deal of the day: 20% off',
    time: '20.00',
    badgeCount: 2,
  },
  {
    id: '3',
    avatar: require('../../assets/Adidas_offline.png'),
    brandName: 'adidas',
    message: 'Shop the best deal now!',
    time: '18:39',
    badgeCount: 5,
  },
  {
    id: '4',
    avatar: require('../../assets/lancome_avatar.png'),
    brandName: 'Lancôme',
    message: 'Deal of the day for sure',
    time: '09:48',
    badgeCount: 3,
  },
];

// Mock retailer data (same shape)
const mockRetailerSearchData = [
  {
    id: '101',
    avatar: require('../../assets/kmart_avatar.png'),
    brandName: 'Kmart',
    message: 'Don’t miss this deal!',
    time: '12:26',
    badgeCount: 0,
  },
  {
    id: '102',
    avatar: require('../../assets/bigw_avatar.png'),
    brandName: 'BIG W',
    message: '20% off everything today',
    time: '20.00',
    badgeCount: 1,
  },
  {
    id: '103',
    avatar: require('../../assets/lancome_avatar.png'),
    brandName: 'Lancôme',
    message: 'Luxury sale for sure',
    time: '09:48',
    badgeCount: 3,
  },
  {
    id: '104',
    avatar: require('../../assets/Adidas_offline.png'),
    brandName: 'adidas',
    message: 'Best sports deal!',
    time: '18:39',
    badgeCount: 2,
  },
  {
    id: '105',
    avatar: require('../../assets/campos_avatar.png'),
    brandName: 'Campos Coffee',
    message: 'Grab a discount on coffee',
    time: 'Dec 20, 2024',
    badgeCount: 0,
  },
];

export function SearchTypeScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // 'All' by default
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Retailers' | 'Chats' | 'Category'>(
    'All'
  );

  const navigation = useNavigation();

  // Called on text change
  const handleSearch = (text: string) => {
    setSearchTerm(text);
    setIsSearchActive(true);
    setIsLoading(true);

    // Simulate a short "search" delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setIsSearchActive(false);
  };

  const handleSearchBarPress = () => {
    if (!isSearchActive) {
      setIsSearchActive(true);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleFilterPress = (filter: 'All' | 'Retailers' | 'Chats' | 'Category') => {
    setSelectedFilter(filter);
  };

  // Filter each data set by searchTerm
  const filteredChats = mockChatSearchData.filter((item) => {
    const lower = searchTerm.toLowerCase();
    return (
      item.brandName.toLowerCase().includes(lower) ||
      item.message.toLowerCase().includes(lower)
    );
  });

  const filteredRetailers = mockRetailerSearchData.filter((item) => {
    const lower = searchTerm.toLowerCase();
    return (
      item.brandName.toLowerCase().includes(lower) ||
      item.message.toLowerCase().includes(lower)
    );
  });

  // If "All" is selected, combine both sets
  const combinedAllData = [...filteredRetailers, ...filteredChats];

  // When user taps on a chat or retailer, navigate to Retailer Chat
  const handleRowPress = (item: any) => {
    // if you want to pass brandName, brandAvatar, etc.:
    // navigation.navigate('RetailerChat', { brandName: item.brandName });
    navigation.navigate('RetailerChat');
  };

  // Single row item
  const renderListItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.chatItemRow}
      onPress={() => handleRowPress(item)}
      activeOpacity={0.8}
    >
      <Image source={item.avatar} style={styles.chatAvatar} />
      <View style={styles.chatTextContainer}>
        <Text style={styles.chatBrandName}>{item.brandName}</Text>
        <Text style={styles.chatMessagePreview}>{item.message}</Text>
      </View>
      <View style={styles.chatRightColumn}>
        {item.badgeCount > 0 && (
          <View style={styles.chatBadgeContainer}>
            <Text style={styles.chatBadgeText}>{item.badgeCount}</Text>
          </View>
        )}
        <Text style={styles.chatTimeText}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  // Figure out which data to show
  let dataToRender: any[] = [];
  if (selectedFilter === 'All') {
    dataToRender = combinedAllData;
  } else if (selectedFilter === 'Retailers') {
    dataToRender = filteredRetailers;
  } else if (selectedFilter === 'Chats') {
    dataToRender = filteredChats;
  } else {
    // "Category" -> no data or handle accordingly
    dataToRender = [];
  }

  // If user typed something but there's 0 results
  const isSearchEmpty = dataToRender.length === 0 && searchTerm.length > 0 && !isLoading;

  return (
    <SafeAreaView style={styles.screenWrapper}>
      {/* Top row: back arrow + search bar */}
      <View style={[styles.contentContainer, { flexDirection: 'row' }]}>
        <View style={styles.topBarRow}>
          <TouchableOpacity style={styles.backIconTouchable} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={
            isSearchActive
              ? styles.searchBarContainerActive
              : styles.searchBarContainerInactive
          }
          onPress={handleSearchBarPress}
          activeOpacity={1}
        >
          <Ionicons
            name="search-outline"
            size={20}
            color={isSearchActive ? '#246BFD' : '#9E9E9E'}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder={isSearchActive ? 'Search...' : 'Tap to search'}
            placeholderTextColor="#9E9E9E"
            value={searchTerm}
            onChangeText={handleSearch}
            autoCorrect={false}
            autoCapitalize="none"
            onFocus={() => setIsSearchActive(true)}
          />
          {searchTerm.length > 0 && (
            <TouchableOpacity onPress={handleClearSearch}>
              <Ionicons name="close-circle" size={20} color="#9E9E9E" style={styles.clearIcon} />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>

      {/* Filter chips row */}
      <View style={[styles.contentContainer, styles.chipsRow]}>
        <TouchableOpacity
          style={selectedFilter === 'All' ? styles.chipFilled : styles.chipOutlined}
          onPress={() => handleFilterPress('All')}
        >
          <Text style={selectedFilter === 'All' ? styles.chipFilledText : styles.chipOutlinedText}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedFilter === 'Retailers' ? styles.chipFilled : styles.chipOutlined}
          onPress={() => handleFilterPress('Retailers')}
        >
          <Text
            style={selectedFilter === 'Retailers' ? styles.chipFilledText : styles.chipOutlinedText}
          >
            Retailers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedFilter === 'Chats' ? styles.chipFilled : styles.chipOutlined}
          onPress={() => handleFilterPress('Chats')}
        >
          <Text style={selectedFilter === 'Chats' ? styles.chipFilledText : styles.chipOutlinedText}>
            Chats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedFilter === 'Category' ? styles.chipFilled : styles.chipOutlined}
          onPress={() => handleFilterPress('Category')}
        >
          <Text
            style={selectedFilter === 'Category' ? styles.chipFilledText : styles.chipOutlinedText}
          >
            Category
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main content area */}
      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <View style={styles.searchHandlingElement} />
          <ActivityIndicator size="large" color="#FFFFFF" style={{ position: 'absolute' }} />
        </View>
      ) : isSearchEmpty ? (
        // If user typed something but no matches
        <View style={styles.noResultsContainer}>
          <Ionicons name="search-outline" size={48} color="#BDBDBD" style={styles.noResultsIcon} />
          <Text style={styles.noResultsTitle}>No Results Found</Text>
          <Text style={styles.noResultsSubtitle}>
            We couldn’t find anything matching your search.
            {'\n'}Try refining your keywords.
          </Text>
        </View>
      ) : selectedFilter === 'Category' ? (
        // Nothing for "Category" in this example
        <View style={styles.noResultsContainer}>
          <Ionicons name="search-outline" size={48} color="#BDBDBD" style={styles.noResultsIcon} />
          <Text style={styles.noResultsTitle}>No Results Yet</Text>
          <Text style={styles.noResultsSubtitle}>
            “Category” search not implemented. Modify as needed.
          </Text>
        </View>
      ) : (
        // If not loading & not empty => show list
        <FlatList
          data={dataToRender}
          keyExtractor={(item) => item.id}
          style={styles.chatSearchListContainer}
          renderItem={renderListItem}
        />
      )}
    </SafeAreaView>
  );
}
