import { createSlice } from "@reduxjs/toolkit"

const productsArr = [
  {
    productName: "Water",
    productPrice: 25,
    productQuantity: 10,
    productId: "1",
    isSelected: false,
  },
  {
    productName: "Coke",
    productPrice: 35,
    productQuantity: 4,
    productId: "2",
    isSelected: false,
  },
  {
    productName: "Soda",
    productPrice: 45,
    productQuantity: 7,
    productId: "3",
    isSelected: false,
  },
]

const productsSlice = createSlice({
  name: "products",
  initialState: [...productsArr],
  reducers: {
    removeProduct(state, action) {
      return state.map((item) =>
        item.productName === action.payload
          ? { ...item, productQuantity: item.productQuantity - 1 }
          : item
      )
    },
    resetProducts(state, action) {
      return productsArr
    },
    selectProduct(state, action) {
      const selectedProduct = state.find((item) => item.isSelected)
      if (!selectedProduct || action.payload === selectedProduct.productName) {
        return state.map((item) =>
          item.productName === action.payload
            ? { ...item, isSelected: !item.isSelected }
            : item
        )
      } else if (action.payload !== selectedProduct.productName) {
        return state.map((item) =>
          item.productName === action.payload
            ? { ...item, isSelected: true }
            : { ...item, isSelected: false }
        )
      }
    },
    // resetSelection(state, action) {
    //   return state.map((item) => ({ ...item, isSelected: false }))
    // },
  },
})

export const { resetProducts, selectProduct, resetSelection, removeProduct } =
  productsSlice.actions
export default productsSlice.reducer
