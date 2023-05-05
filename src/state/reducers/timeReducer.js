import { createSlice } from "@reduxjs/toolkit"

const initialState = new Date().getTime()

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    addFiveMin(state, action) {
      return state + 5 * 60 * 1000
    },
    tick(state, action) {
      return state + 1000
    },
  },
})

export const { addFiveMin, tick } = timeSlice.actions

export default timeSlice.reducer
