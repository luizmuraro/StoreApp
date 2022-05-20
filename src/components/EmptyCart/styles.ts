import { StyleSheet } from 'react-native'

import { BRAND_GREEN } from '../../utils/colors'

export default StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartMessage: {
    marginVertical: 32,
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptyCartButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: BRAND_GREEN,
    marginHorizontal: 32,
    borderRadius: 16,
    width: '100%',
  },
})
