import { AnyAction } from 'redux'
import IState from '../../interfaces/state'
import {
  GET_PRODUCTS_SUCCECESS,
  LOADING,
  LOGOUT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from './constants'

const INITIAL_STATE: IState = {
  products: [],
  cart: [],
  loading: false,
  error: false,
}

const productsReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCECESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false,
      }
    case ADD_TO_CART:
      const newProduct = state.products.find((product) => product.id === action.id)
      return {
        ...state,
        cart: [...state.cart, { ...newProduct, quantity: 1 }],
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.id),
      }
    case ADD_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.id ? { ...product, quantity: product.quantity + 1 } : product
        ),
      }
    case SUB_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.id && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      }
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}

export default productsReducer
