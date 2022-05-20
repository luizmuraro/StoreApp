module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    /**
     * CAUTION: Reanimated plugin has to be listed last.
     * https://docs.swmansion.com/react-native-reanimated/docs/installation/#babel-plugin
     * */
    'react-native-reanimated/plugin',
  ],
}
