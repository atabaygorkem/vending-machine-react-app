import { createSlice } from "@reduxjs/toolkit"

const initialState = { text: "", type: "error" }

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      return { ...action.payload }
    },
    removeNotification(state, action) {
      state.text = ""
    },
  },
})

export const applyNotification = (notifyObj, timeout) => {
  return (dispatch) => {
    dispatch(setNotification(notifyObj))
    setTimeout(() => dispatch(removeNotification()), timeout * 1000)
  }
}

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
