import { configureStore } from "@reduxjs/toolkit"
import customerBalanceReducer from "./reducers/customerBalanceReducer"
import machineTemperatureReducer from "./reducers/machineTemperatureReducer"
import notificationReducer from "./reducers/notificationReducer"
import productsReducer from "./reducers/productsReducer"
import supplierReducer from "./reducers/supplierReducer"
import timeReducer from "./reducers/timeReducer"

const store = configureStore({
  reducer: {
    products: productsReducer,
    customerBalance: customerBalanceReducer,
    notification: notificationReducer,
    supplier: supplierReducer,
    time: timeReducer,
    machineTemperature: machineTemperatureReducer,
  },
})

export default store
