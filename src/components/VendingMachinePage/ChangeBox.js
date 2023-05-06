import { Grid } from "@mui/material"
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
    <Grid container justifyContent="center">
      <MachineButton
        onClick={returnMoney}
        disabled={isDisabled}
        text={
          "Change: " +
          (customerBalance.change ? `${customerBalance.change}$` : "")
        }
      />
    </Grid>
  )
}

export default ChangeBox
