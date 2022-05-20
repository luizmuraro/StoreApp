import { StyleSheet } from 'react-native'

import { BRIGHT_RED } from '../../utils/colors'

export default StyleSheet.create({
  defaultBackground: {
    color: BRIGHT_RED,
  },
  headerTitle: {
    fontSize: 20,
  },
  cartIcon: {
    width: 20,
    height: 20,
  },
  cartIconBadge: {
    position: 'absolute',
    right: -3,
    width: 8,
    height: 8,
    backgroundColor: BRIGHT_RED,
    borderRadius: 4,
  },
})
