import InitialState from '../../interfaces/state'

interface IState {
  products: InitialState
}

export const getProductsSelector = (state: IState) => state.products.products
export const getLoadingSelector = (state: IState) => state.products.loading
export const getErrorSelector = (state: IState) => state.products.error

export const getCartSelector = (state: IState) => state.products.cart

export const getTotalCartValue = (state: IState) =>
  state.products.cart?.reduce(
    (total, currentProduct) => total + currentProduct.price * currentProduct.quantity,
    0
  )
