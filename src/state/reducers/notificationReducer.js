import { createSlice } from "@reduxjs/toolkit"

const initialState = { text: "", type: "info", isOpen: false, duration: 0 }

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      return { ...state, ...action.payload, isOpen: state.isOpen }
    },
    // removeNotification(state, action) {
    //   return initialState
    // },
    setOpen(state, action) {
      state.isOpen = action.payload
    },
  },
})

/**
 * Get the details about notification to set and render notification into the screen
 * @param {Object} notifyObj
 * @param {String} notifyObj.text - Notification text
 * @param {String} notifyObj.type - Notification type
 * @param {Integer} timeout  - Duration of notification in seconds
 */

export const applyNotification = (notifyObj, timeout) => {
  return (dispatch) => {
    dispatch(setNotification({ ...notifyObj, duration: timeout * 1000 }))
    dispatch(setOpen(true))
    // setTimeout(() => dispatch(removeNotification()), timeout * 1000)
  }
}

export const { setNotification, removeNotification, setOpen } =
  notificationSlice.actions
export default notificationSlice.reducer
