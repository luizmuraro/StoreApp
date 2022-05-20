import { StyleSheet } from 'react-native'

import { GRAY_88, GRAY_SECONDARY } from '../../utils/colors'

export default StyleSheet.create({
  quantityButton: {
    backgroundColor: GRAY_88,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  disabledButton: {
    backgroundColor: GRAY_SECONDARY,
  },
})
