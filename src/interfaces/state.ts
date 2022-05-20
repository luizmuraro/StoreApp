import IProduct from './product'

export default interface IState {
  products: IProduct[]
  cart: IProduct[]
  loading: boolean
  error: boolean
}
