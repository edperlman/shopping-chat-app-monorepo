module.exports = function (api) {
    api.cache(true);
    return {
      // Use Expo’s recommended Babel preset
      presets: ['babel-preset-expo'],
      // Tell Babel about the react-native-dotenv plugin
      plugins: [
        [
          'module:react-native-dotenv',
          {
            moduleName: '@env',
            path: '.env', // The .env file we’ll create below
            blocklist: null,
            allowlist: null,
            safe: false,
            allowUndefined: true,
            verbose: false,
          },
        ],
      ],
    };
  };
  