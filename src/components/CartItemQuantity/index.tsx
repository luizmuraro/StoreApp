import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { addQuantity, subtractQuantity } from '../../modules/products/action'
import QuantityButton from '../QuantityButton'

import styles from './styles'

interface Props {
  id: number
  quantity: number
}

const CartItemQuantity: React.FC<Props> = ({ id, quantity }) => {
  const dispatch = useDispatch()

  const handleIncreasceQuantity = useCallback(
    () => dispatch(addQuantity(id) as any),
    [dispatch, id]
  )

  const handleDecreasceQuantity = useCallback(
    () => dispatch(subtractQuantity(id) as any),
    [dispatch, id]
  )

  return (
    <View style={styles.quantityContainer}>
      <QuantityButton
        disabled={quantity === 1}
        onPress={handleDecreasceQuantity}
        isIncreasce={false}
      />
      <View style={styles.currentQuantityContainer}>
        <Text>{quantity}</Text>
      </View>
      <QuantityButton disabled={false} onPress={handleIncreasceQuantity} isIncreasce />
    </View>
  )
}

export default CartItemQuantity
