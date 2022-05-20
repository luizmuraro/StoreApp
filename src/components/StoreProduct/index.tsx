import React, { useCallback, useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'

import { getCartSelector } from '../../modules/products/selector'
import { addToCart, removeFromCart } from '../../modules/products/action'
import Modal from '../Modal'
import Button from '../StoreButton'
import CartIcon from '../../assets/images/ic_cart.png'
import { routesNames } from '../../utils/constants'

import styles from './styles'
import IProduct from '../../interfaces/product'
import constants from './constants'

const { ALERT_TITLE, ALERT_MESSAGE, ALERT_FIRST_BUTTON_TEXT, ALERT_SECOND_BUTTON_TEXT } = constants

interface Props {
  item: IProduct
}

const StoreProduct: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const cart = useSelector(getCartSelector)

  const [addCartModalVisibility, setAddCartModalVisibility] = useState(false)

  const handleKeepBuyingPress = useCallback(() => setAddCartModalVisibility(false), [])

  const handleCartPress = () => {
    navigation.navigate(routesNames.CART as never)
    setAddCartModalVisibility(false)
  }

  const isProductAlreadyOnCart = useCallback(
    (id) => cart.some((product: IProduct) => product.id === id),
    [cart]
  )

  const handleAddProductPress = useCallback(
    (id) => () => {
      dispatch(addToCart(id) as any)
      setAddCartModalVisibility(true)
    },
    [dispatch]
  )

  const handleRemoveConfirmationPress = useCallback(
    (id) => () => dispatch(removeFromCart(id) as any),
    [dispatch]
  )

  const creatRemoveAlert = useCallback(
    (id) => () =>
      Alert.alert(ALERT_TITLE, ALERT_MESSAGE, [
        {
          text: ALERT_FIRST_BUTTON_TEXT,
          onPress: handleRemoveConfirmationPress(id),
        },
        { text: ALERT_SECOND_BUTTON_TEXT, style: 'cancel' },
      ]),
    [handleRemoveConfirmationPress]
  )

  return (
    <View style={styles.productContainer}>
      <Modal
        modalVisibility={addCartModalVisibility}
        icon={CartIcon}
        title="Product added to cart!"
        message="What would you like to do?"
        mainButtonText="Keep buying"
        secondaryButtonText="Go to cart"
        onMainPress={handleKeepBuyingPress}
        onSecondaryPress={handleCartPress}
      />
      <FastImage
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.productContentContainer}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.productPrice}>{`$ ${item.price.toFixed(2)}`} </Text>
        {isProductAlreadyOnCart(item.id) ? (
          <Button
            style={styles.removeBackground}
            text="Remove from cart"
            onPress={creatRemoveAlert(item.id)}
          />
        ) : (
          <Button
            style={styles.addBackground}
            text="Add to cart"
            onPress={handleAddProductPress(item.id)}
          />
        )}
      </View>
    </View>
  )
}

export default StoreProduct
