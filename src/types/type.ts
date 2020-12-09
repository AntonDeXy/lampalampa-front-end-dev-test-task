export type product = {
  _id: string
  title: string
  description: string
  price: number
  imgUrl: string
}

export type cart = {
  _id: string
  totalProductsCount: number
  totalSum: Number
  items: cartItem[]
}

export type cartItem = {
  product: product
  count: number
}