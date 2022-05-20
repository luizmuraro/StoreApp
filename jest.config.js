module.exports = {
  jest: {
    preset: 'react-native',
    testPathIgnorePatterbs: ['/node_modules', '/android', '/ios'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  },
}
