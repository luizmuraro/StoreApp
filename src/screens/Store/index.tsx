import React, { useEffect, useCallback } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../../modules/products/action'
import { getLoadingSelector, getProductsSelector } from '../../modules/products/selector'
import Loader from '../../components/Loader'
import Product from '../../components/StoreProduct'
import EmptyStore from '../../components/EmptyStore'

import styles from './styles'
import IProduct from '../../interfaces/product'

const keyExtractor = (item: IProduct) => item.id?.toString()

const Store: React.FC = () => {
  const dispatch = useDispatch()

  const products = useSelector(getProductsSelector)
  const isLoadingProducts = useSelector(getLoadingSelector)

  const renderItem = useCallback(({ item }) => <Product item={item} />, [])

  const handleGetProducts = useCallback(() => dispatch(getProducts() as any), [dispatch])

  useEffect(() => {
    handleGetProducts()
  }, [handleGetProducts])

  return (
    <SafeAreaView style={styles.container}>
      {isLoadingProducts ? (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          ListHeaderComponent={<Text style={styles.listHeader}>Ton Shop</Text>}
          contentContainerStyle={styles.listStyle}
          ListEmptyComponent={EmptyStore}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  )
}
export default Store
