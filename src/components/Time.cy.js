import { mount } from "cypress/react"
import { Provider } from "react-redux"
import store from "../state/store"
import { addFiveMin } from "../state/reducers/timeReducer"
import Time from "./Time"

Cypress.Commands.add("mount", (component, options = {}) => {
  // Use the default store if one is not provided
  const { reduxStore = store, ...mountOptions } = options

  const wrapped = <Provider store={reduxStore}>{component}</Provider>

  return mount(wrapped, mountOptions)
})

it("Should display time", () => {
  const reduxState = store

  // addFiveMin is an action exported from the time slice
  reduxState.dispatch(addFiveMin())

  cy.mount(<Time />, { reduxStore: reduxState })
})
