import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

interface Props {
  isIncreasce: boolean
  disabled: boolean
  onPress: () => void
}

const CartItemQuantity: React.FC<Props> = ({ isIncreasce, disabled, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.quantityButton, disabled ? styles.disabledButton : null]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text>{isIncreasce ? '+' : '-'}</Text>
    </TouchableOpacity>
  )
}

export default CartItemQuantity
