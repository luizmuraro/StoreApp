import { StyleSheet } from 'react-native'

import { BRAND_GREEN } from '../../utils/colors'

export default StyleSheet.create({
  image: {
    height: 75,
    width: 75,
  },
  deleteItemButton: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 0,
    left: 0,
  },
  productContent: {
    flex: 1,
    marginLeft: 12,
  },
  productTitle: {
    fontSize: 12,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  productPrice: {
    color: BRAND_GREEN,
  },
})
