import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import AsyncStorage from '@react-native-async-storage/async-storage'

import productsReducer from '../modules/products/reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  products: productsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
  const persistor = persistStore(store)

  return { store, persistor }
}

export default configureStore
