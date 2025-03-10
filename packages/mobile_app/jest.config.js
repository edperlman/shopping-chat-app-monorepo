module.exports = {
    // Use Expo’s preset for mocking Expo + RN modules
    preset: 'jest-expo',
  
    // We’ll transform .ts/.tsx with ts-jest and .js/.jsx with babel-jest
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
  
    // Some libraries in node_modules need to be transformed as well
    // to handle ES6+ code.
    transformIgnorePatterns: [
      'node_modules/(?!(@react-navigation|react-native|expo|expo-.*|@expo|@unimodules|unimodules-.*|sentry-expo))',
    ],
  
    testPathIgnorePatterns: [
      '/node_modules/',
      '/android/',
      '/ios/',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
    // Optionally: if you want coverage or custom setup, do it here
    // collectCoverage: true,
    // setupFilesAfterEnv: ['./jest.setup.js'],
  };
  