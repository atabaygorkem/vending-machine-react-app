import { createSlice } from "@reduxjs/toolkit"

const initialState = { supplierBalance: 0, isAuthorized: false }

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    signIn(state, { payload: { username, password } }) {
      if (username === "admin" && password === "admin") {
        state.isAuthorized = true
      } else {
        state.isAuthorized = false
      }
    },
    signOut(state, action) {
      state.isAuthorized = false
    },
    addMoneyToSupplierBalance(state, { payload }) {
      state.supplierBalance = state.supplierBalance + payload
    },
    withdrawMoney(state, action) {
      state.supplierBalance = 0
    },
  },
})

export const { signIn, signOut, addMoneyToSupplierBalance, withdrawMoney } =
  supplierSlice.actions

export default supplierSlice.reducer
