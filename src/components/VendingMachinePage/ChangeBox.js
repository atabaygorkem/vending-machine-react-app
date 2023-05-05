import { useDispatch, useSelector } from "react-redux"
import useButtonStatus from "../../hooks/useButtonStatus"
import useMachineNotification from "../../hooks/useMachineNotification"
import { returnChange } from "../../state/reducers/customerBalanceReducer"
import { increaseTemperature } from "../../state/reducers/machineTemperatureReducer"
import { addFiveMin } from "../../state/reducers/timeReducer"
import MachineButton from "../MachineButton"

const ChangeBox = () => {
  const { customerBalance } = useSelector((state) => state)
  const dispatch = useDispatch()
  const isDisabled = useButtonStatus()
  const sendNotification = useMachineNotification()

  const returnMoney = () => {
    sendNotification(`You get back ${customerBalance.change}$`, "success", 4)
    dispatch(addFiveMin())
    dispatch(increaseTemperature())
    dispatch(returnChange())
  }

  return (
    <div>
      <MachineButton
        onClick={returnMoney}
        disabled={isDisabled}
        text={
          "Change: " + (customerBalance.change ? customerBalance.change : "")
        }
        style={{ width: 110, height: 25 }}
      />
    </div>
  )
}

export default ChangeBox
