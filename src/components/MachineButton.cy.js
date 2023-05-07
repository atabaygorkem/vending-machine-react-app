import { ThemeProvider } from "@mui/material"
import React from "react"
import MachineButton from "./MachineButton"
import { theme } from "../services/muiTheme"
import store from "../state/store"
import { Provider } from "react-redux"
import { mount } from "cypress/react18"
import { addMoneyToCustomerBalance } from "../state/reducers/customerBalanceReducer"
import { addFiveMin } from "../state/reducers/timeReducer"
import { increaseTemperature } from "../state/reducers/machineTemperatureReducer"
import CustomerBalance from "./VendingMachinePage/CustomerBalance"
import StatusBar from "./StatusBar"

describe("<MachineButton />", () => {
  it("renders", () => {
    cy.mount(
      <ThemeProvider theme={theme}>
        <MachineButton onClick={() => alert("test")} text="Test" />
      </ThemeProvider>
    )
    cy.contains("Test").click()
  })

  it("clicking fires callback function", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy")
    cy.mount(
      <ThemeProvider theme={theme}>
        <MachineButton onClick={onChangeSpy} text="Test" />
      </ThemeProvider>
    )
    cy.contains("Test").click()
    cy.get("@onChangeSpy").should("have.been.called")
  })
})
//************************************************************************************************** */
//Adjust Cypress mount function to support redux state
Cypress.Commands.add("mount", (component, options = {}) => {
  // Use the default store if one is not provided
  const { reduxStore = store, ...mountOptions } = options

  const wrapped = <Provider store={reduxStore}>{component}</Provider>

  return mount(wrapped, mountOptions)
})

describe("Insert Money Button", function () {
  it("adds money to balance", function () {
    const reduxState = store

    const onClick = (insertedMoney) => {
      reduxState.dispatch(addMoneyToCustomerBalance(insertedMoney))
      reduxState.dispatch(addFiveMin())
      reduxState.dispatch(increaseTemperature())
    }

    cy.mount(
      <ThemeProvider theme={theme}>
        <CustomerBalance />
        <MachineButton
          onClick={() => onClick(5)}
          disabled={false}
          text="Insert 5$"
        />
      </ThemeProvider>,
      { reduxStore: reduxState }
    )

    cy.contains("Insert 5$").click()
    //CustomerBalance component's id
    cy.get("#customer-balance").contains("5")
  })

  it("increase temperature", function () {
    const reduxState = store

    const onClick = (insertedMoney) => {
      reduxState.dispatch(addMoneyToCustomerBalance(insertedMoney))
      reduxState.dispatch(addFiveMin())
      reduxState.dispatch(increaseTemperature())
    }

    cy.mount(
      <ThemeProvider theme={theme}>
        <StatusBar />
        <MachineButton
          onClick={() => onClick(20)}
          disabled={false}
          text="Insert 20$"
        />
      </ThemeProvider>,
      { reduxStore: reduxState }
    )

    cy.contains("Insert 20$").click()
    cy.get("#temperature").contains("10")
  })
})
