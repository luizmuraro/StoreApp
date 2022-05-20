import { StyleSheet } from 'react-native'

import { BRAND_GREEN, WHITE } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  listStyle: {
    flexGrow: 1,
    padding: 24,
  },
  listHeader: {
    color: BRAND_GREEN,
    fontSize: 32,
    marginBottom: 12,
    fontWeight: 'bold',
  },
})
