import React, { useCallback } from 'react'
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useDispatch } from 'react-redux'

import { removeFromCart } from '../../modules/products/action'
import DeleteImage from '../../assets/images/ic_delete.png'

import styles from './styles'
import IProduct from '../../interfaces/product'

interface Props {
  item: IProduct
}

const CartItemInformation: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch()

  const handleRemoveConfirmationPress = useCallback(
    (id) => () => dispatch(removeFromCart(id) as any),
    [dispatch]
  )

  const creatRemoveAlert = useCallback(
    (id) => () =>
      Alert.alert('Remove product from cart', 'Are you sure that you want to remove the product?', [
        {
          text: 'Confirm',
          onPress: handleRemoveConfirmationPress(id),
        },
        { text: 'Cancel', style: 'cancel' },
      ]),
    [handleRemoveConfirmationPress]
  )

  return (
    <>
      <FastImage
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <TouchableOpacity onPress={creatRemoveAlert(item.id)} style={styles.deleteItemButton}>
        <Image source={DeleteImage} />
      </TouchableOpacity>
      <View style={styles.productContent}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{`$ ${item.price.toFixed(2)}`}</Text>
      </View>
    </>
  )
}

export default CartItemInformation
