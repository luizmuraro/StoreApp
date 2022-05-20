import React from 'react'
import { StatusBar } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import AppNavigator from '../AppNavigator'

import createStore from '../../store/store'

const { store, persistor } = createStore()

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <AppNavigator />
    </PersistGate>
  </Provider>
)

export default App
