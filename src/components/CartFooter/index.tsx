import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { useSelector } from 'react-redux'
import { getTotalCartValue } from '../../modules/products/selector'

import styles from './styles'

const CartFooter: React.FC = () => {
  const totalCartValue = useSelector(getTotalCartValue)

  return (
    <View style={styles.footerContainer}>
      <View style={styles.totalView}>
        <Text style={styles.totalText}>TOTAL</Text>
        <Text style={styles.totalText}>{`$ ${totalCartValue.toFixed(2)}`}</Text>
      </View>
      <TouchableOpacity style={styles.paymentButton}>
        <Text>Go to payment</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartFooter
