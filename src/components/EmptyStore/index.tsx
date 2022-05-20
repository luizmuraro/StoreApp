import React from 'react'
import { View, Text, Image } from 'react-native'

import OutOfStockImage from '../../assets/images/ic_out_of_stock.png'

import styles from './styles'

const EmptyStore: React.FC = () => (
  <View style={styles.emptyProductsContainer}>
    <Image source={OutOfStockImage} />
    <Text style={styles.emptyProductsMessage}>
      We are out of stock right now, please try again later
    </Text>
  </View>
)

export default EmptyStore
