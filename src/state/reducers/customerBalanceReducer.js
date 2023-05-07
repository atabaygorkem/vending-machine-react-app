import { createSlice } from "@reduxjs/toolkit"

const initialState = { balance: 0, change: 0 }

const customerBalanceSlice = createSlice({
  name: "customerBalance",
  initialState,
  reducers: {
    addMoneyToCustomerBalance(state, action) {
      state.balance = state.balance + +action.payload
    },
    buyProduct(state, action) {
      state.change = state.change + state.balance - action.payload
      state.balance = 0
    },
    refundMoney(state, action) {
      state.change = state.change + state.balance
      state.balance = 0
    },
    returnChange(state, action) {
      state.change = 0
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
