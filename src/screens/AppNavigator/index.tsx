import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'

import styles from './styles'
import Home from '../Store'
import ShoppingCart from '../Cart'
import CartIcon from '../../assets/images/ic_cart.png'
import BackIcon from '../../assets/images/ic_back.png'
import { ICON_SLOP_PROPS, routesNames } from '../../utils/constants'
import { BLACK_0 } from '../../utils/colors'
import { getCartSelector } from '../../modules/products/selector'

const { STORE, CART } = routesNames

const MainStack = createNativeStackNavigator()

const HEADER_TITLE_ALIGNMENT = 'center'

const AppNavigator: React.FC = () => {
  const cart = useSelector(getCartSelector)

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={STORE}>
        <MainStack.Screen
          name={STORE}
          component={Home}
          options={({ navigation }) => ({
            headerTitleStyle: styles.headerTitle,
            headerTitleAlign: HEADER_TITLE_ALIGNMENT,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate(CART)} hitSlop={ICON_SLOP_PROPS}>
                <Image source={CartIcon} style={styles.cartIcon} />
                {cart?.length > 0 ? <View style={styles.cartIconBadge} /> : null}
              </TouchableOpacity>
            ),
          })}
        />
        <MainStack.Screen
          name={CART}
          component={ShoppingCart}
          options={{
            headerTitleStyle: styles.headerTitle,
            headerTitleAlign: HEADER_TITLE_ALIGNMENT,
            headerBackTitleVisible: false,
            headerBackImageSource: BackIcon,
            headerTintColor: BLACK_0,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
