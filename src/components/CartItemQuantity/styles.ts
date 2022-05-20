import { StyleSheet } from 'react-native'

import { GRAY_88, GRAY_SECONDARY } from '../../utils/colors'

export default StyleSheet.create({
  quantityContainer: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
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
  currentQuantityContainer: {
    width: 30,
    height: 30,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
