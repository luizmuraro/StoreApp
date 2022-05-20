import {
  ERROR,
  LOADING,
  GET_PRODUCTS_SUCCECESS,
  GET_PRODUCTS_ENDPOINT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from './constants'

import api from '../../services/api'
import { Dispatch } from 'react'

interface DispatchType {
  id: number
  type: string
}

export const getProducts = () => async (dispatch: any) => {
  dispatch({
    type: LOADING,
  })
  try {
    const products = await api.get(GET_PRODUCTS_ENDPOINT)
    dispatch({
      type: GET_PRODUCTS_SUCCECESS,
      payload: products.data,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    })
  }
}

export const addToCart = (id: number) => (dispatch: Dispatch<DispatchType>) => {
  dispatch({
    type: ADD_TO_CART,
    id,
  })
}
export const removeFromCart = (id: number) => (dispatch: Dispatch<DispatchType>) => {
  dispatch({
    type: REMOVE_FROM_CART,
    id,
  })
}

export const addQuantity = (id: number) => (dispatch: Dispatch<DispatchType>) => {
  dispatch({
    type: ADD_QUANTITY,
    id,
  })
}

export const subtractQuantity = (id: number) => (dispatch: Dispatch<DispatchType>) => {
  dispatch({
    type: SUB_QUANTITY,
    id,
  })
}
