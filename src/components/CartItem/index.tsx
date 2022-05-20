import React from 'react'
import { View } from 'react-native'

import CartItemQuantity from '../CartItemQuantity'
import CartItemInformation from '../CartItemInformation'

import styles from './styles'
import IProduct from '../../interfaces/product'

interface Props {
  item: IProduct
}

const CartItem: React.FC<Props> = ({ item }) => (
  <View style={styles.cartItemContainer}>
    <CartItemInformation item={item} />
    <CartItemQuantity id={item.id} quantity={item.quantity} />
  </View>
)

export default CartItem
