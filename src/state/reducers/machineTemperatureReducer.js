import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  maxTemperature: 14,
  minTemperature: 8,
  currentTemperature: 8,
  isCooling: false,
}

const machineTemperatureSlice = createSlice({
  name: "machineTemperature",
  initialState,
  reducers: {
    increaseTemperature(state, action) {
      state.currentTemperature = state.currentTemperature + 1
    },
    coolTheSystem(state, action) {
      state.currentTemperature = state.currentTemperature - 1
      state.isCooling = true
    },
    stopCooling(state, action) {
      state.isCooling = false
    },
  },
})

export const decreaseTemperature = () => {
  return (dispatch, getState) => {
    // console.log("state: ", getState())
    const {
      machineTemperature: { isCooling },
    } = getState()
    if (!isCooling) {
      dispatch(coolTheSystem())

      const timerId = setInterval(() => dispatch(coolTheSystem()), 400)
      setTimeout(() => {
        clearInterval(timerId)
        dispatch(stopCooling())
      }, 2000)
    }
  }
}

export const { increaseTemperature, coolTheSystem, stopCooling } =
  machineTemperatureSlice.actions

export default machineTemperatureSlice.reducer
