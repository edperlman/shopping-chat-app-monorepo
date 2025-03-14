// packages/mobile_app/navigation/types.ts

export type RootStackParamList = {
  /** Existing routes */
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  EmptyChat: undefined;
  ChatList: undefined;
  DiscountOptions: undefined;

  /** Our new search screen */
  SearchType: undefined;

  /** Our new retailer chat screen */
  RetailerChat: {
    // Example param if you want to pass brand info
    // brandName?: string;
    // brandAvatar?: string;
  } | undefined;
};
