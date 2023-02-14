const { ExpoConfig, ConfigContext } = require('expo/config')
require('dotenv').config()
module.exports = ({ config }) => ({
  ...config,
  expo: {
    name: 'reservacion-vuelos',
    slug: 'reservacion-vuelos',
    version: '1.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'light',

    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.bc.vuelosteam1',
      versionCode: 1,
      googleServicesFile: './google-services.json',
    },
    plugins: [
      '@react-native-firebase/app',
      '@react-native-firebase/auth',
      '@react-native-google-signin/google-signin',
    ],
    extra: {
      eas: {
        projectId: 'ae4bfacd-d9f1-4a20-80eb-23b048abadc6',
      },
    },
  },
})
