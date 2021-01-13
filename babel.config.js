module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src'
      }
    ],
    'module:react-native-dotenv',
    {
      moduleName: '@env',
      path: '.env',
      blackList: null,
      whiteList: null,
      safe: false,
      allowUndefined: true
    }
  ]
};
