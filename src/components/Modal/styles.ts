import { StyleSheet } from 'react-native'

import { POP_UP_BACKGROUND, POP_UP_SHADOW, WHITE, GRAY_13, BRAND_GREEN } from '../../utils/colors'

export default StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: POP_UP_BACKGROUND,
  },
  modal: {
    backgroundColor: WHITE,
    marginHorizontal: 25,
    borderRadius: 4,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 50,
    shadowColor: POP_UP_SHADOW,
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 56,
    elevation: 20,
  },
  title: {
    // fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: GRAY_13,
    marginTop: 16,
  },
  message: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: GRAY_13,
    lineHeight: 21,
    marginHorizontal: 18,
    marginTop: 8,
    marginBottom: 18,
  },
  button: {
    backgroundColor: BRAND_GREEN,
    marginVertical: 2,
    height: 48,
    paddingHorizontal: 51,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    minWidth: 230,
  },
  buttonText: {
    color: GRAY_13,
    // fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  rememberLater: {
    color: BRAND_GREEN,
    // fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
})
