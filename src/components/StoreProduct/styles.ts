import { StyleSheet } from 'react-native'

import { BRAND_GREEN, BLACK_0, WHITE, BRIGHT_RED } from '../../utils/colors'

export default StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 4,
    padding: 12,
    marginVertical: 16,
    backgroundColor: WHITE,
    shadowColor: BLACK_0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },
  productContentContainer: {
    flex: 1,
    marginLeft: 12,
  },
  image: {
    height: 125,
    width: 125,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productDescription: {
    fontSize: 12,
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeBackground: {
    backgroundColor: BRIGHT_RED,
  },
  addBackground: {
    backgroundColor: BRAND_GREEN,
  },
})
