import { createSlice } from "@reduxjs/toolkit"

const initialState = { supplierBalance: 0, isAuthorized: false }

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    signIn(state, { payload: { username, password } }) {
      if (username === "admin" && password === "admin") {
        return { ...state, isAuthorized: true }
      } else return state
    },
    signOut(state, action) {
      return { ...state, isAuthorized: false }
    },
    addMoneyToSupplierBalance(state, { payload }) {
      return { ...state, supplierBalance: state.supplierBalance + payload }
    },
    withdrawMoney(state, action) {
      return { ...state, supplierBalance: 0 }
    },
  },
})

export const { signIn, signOut, addMoneyToSupplierBalance, withdrawMoney } =
  supplierSlice.actions

export default supplierSlice.reducer
