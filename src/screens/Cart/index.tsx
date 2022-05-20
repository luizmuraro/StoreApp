import React, { useCallback } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { getCartSelector } from '../../modules/products/selector'
import Footer from '../../components/CartFooter'
import EmptyCart from '../../components/EmptyCart'
import CartItem from '../../components/CartItem'

import styles from './styles'

const keyExtractor = (item: any) => item.id?.toString()

const Cart: React.FC = () => {
  const cart = useSelector(getCartSelector)

  const renderItem = useCallback(({ item }) => <CartItem item={item} />, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        contentContainerStyle={styles.listStyle}
        ListEmptyComponent={EmptyCart}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
      {cart.length > 0 ? <Footer /> : null}
    </SafeAreaView>
  )
}

export default Cart
