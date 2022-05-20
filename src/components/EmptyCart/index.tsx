import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { routesNames } from '../../utils/constants'
import EmptyCartImage from '../../assets/images/ic_cart.png'

import styles from './styles'

const EmptyCart: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.emptyCartContainer}>
      <Image source={EmptyCartImage} />
      <Text style={styles.emptyCartMessage}>Your cart is empty</Text>
      <TouchableOpacity
        style={styles.emptyCartButton}
        onPress={() => navigation.navigate(routesNames.STORE as never)}
      >
        <Text>Go to store </Text>
      </TouchableOpacity>
    </View>
  )
}

export default EmptyCart
