import { Grid } from "@mui/material"
import { useDispatch } from "react-redux"
import useButtonStatus from "../../hooks/useButtonStatus"
import { addMoneyToCustomerBalance } from "../../state/reducers/customerBalanceReducer"
import { increaseTemperature } from "../../state/reducers/machineTemperatureReducer"
import { addFiveMin } from "../../state/reducers/timeReducer"
import MachineButton from "../MachineButton"

const InsertMoneyPage = () => {
  const isDisabled = useButtonStatus()
  const dispatch = useDispatch()

  const onClick = (insertedMoney) => {
    dispatch(addMoneyToCustomerBalance(insertedMoney))
    dispatch(addFiveMin())
    dispatch(increaseTemperature())
  }

  return (
    <>
      <Grid
        container
        item
        justifyContent="space-evenly"
        alignItems="center"
        // bgcolor="yellow"
      >
        <MachineButton
          onClick={() => onClick(1)}
          disabled={isDisabled}
          text="Insert 1$"
          className="insert-button"
        />
        <MachineButton
          onClick={() => onClick(5)}
          disabled={isDisabled}
          text="Insert 5$"
          className="insert-button"
        />
      </Grid>
      <Grid
        container
        item
        justifyContent="space-evenly"
        // bgcolor="red"
      >
        <MachineButton
          onClick={() => onClick(10)}
          disabled={isDisabled}
          text="Insert 10$"
          className="insert-button"
        />
        <MachineButton
          onClick={() => onClick(20)}
          disabled={isDisabled}
          text="Insert 20$"
          className="insert-button"
        />
      </Grid>
    </>
  )
}

export default InsertMoneyPage
