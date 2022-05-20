import { StyleSheet } from 'react-native'

import { BRAND_GREEN } from '../../utils/colors'

export default StyleSheet.create({
  footerContainer: {
    padding: 24,
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: BRAND_GREEN,
    marginHorizontal: 32,
    marginTop: 32,
    borderRadius: 16,
  },
})
