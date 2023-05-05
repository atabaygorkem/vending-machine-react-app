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
    <div>
      <MachineButton
        onClick={() => onClick(1)}
        disabled={isDisabled}
        text="Insert 1$"
      />
      <MachineButton
        onClick={() => onClick(5)}
        disabled={isDisabled}
        text="Insert 5$"
      />
      <MachineButton
        onClick={() => onClick(10)}
        disabled={isDisabled}
        text="Insert 10$"
      />
      <MachineButton
        onClick={() => onClick(20)}
        disabled={isDisabled}
        text="Insert 20$"
      />
    </div>
  )
}

export default InsertMoneyPage
