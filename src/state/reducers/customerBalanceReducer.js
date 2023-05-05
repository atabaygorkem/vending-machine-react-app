import { createSlice } from "@reduxjs/toolkit"

const initialState = { balance: 0, change: 0 }

const customerBalanceSlice = createSlice({
  name: "customerBalance",
  initialState,
  reducers: {
    addMoneyToCustomerBalance(state, action) {
      return { ...state, balance: state.balance + +action.payload }
    },
    buyProduct(state, action) {
      return {
        balance: 0,
        change: state.change + state.balance - action.payload,
      }
    },
    refundMoney(state, action) {
      return { balance: 0, change: state.change + state.balance }
    },
    returnChange(state, action) {
      return { ...state, change: 0 }
    },
  },
})

export const {
  buyProduct,
  refundMoney,
  returnChange,
  addMoneyToCustomerBalance,
} = customerBalanceSlice.actions

export default customerBalanceSlice.reducer
