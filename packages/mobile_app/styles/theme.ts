// packages/mobile_app/styles/theme.ts
import { MD3LightTheme, configureFonts } from 'react-native-paper';

// (A) Optional font config for MD3 theme
const fontConfig = {
  default: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '200',
    },
  },
};

// (B) Create your custom Paper theme by extending MD3LightTheme
export const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee', // Example brand color; adjust to match your Figma design
    secondary: '#03dac5',
    // You can override or add more color keys if needed
  },
  fonts: configureFonts({ config: fontConfig, isV3: true }),
};
