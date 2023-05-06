import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut, withdrawMoney } from "../../../state/reducers/supplierReducer"
import { resetProducts } from "../../../state/reducers/productsReducer"
import useMachineNotification from "../../../hooks/useMachineNotification"
import MachineButton from "../../MachineButton"
import { Grid } from "@mui/material"

const AuthorizedPage = () => {
  const supplier = useSelector(({ supplier }) => supplier)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sendNotification = useMachineNotification()

  const getMoney = () => {
    sendNotification(
      `You successfully withdraw ${supplier.supplierBalance}$`,
      "success",
      4
    )
    dispatch(withdrawMoney())
  }

  const reset = () => dispatch(resetProducts())

  const returnHomePage = () => {
    dispatch(signOut())
    navigate("/")
  }

  return (
    <div>
      <div className="center">
        <p>Balance: {supplier.supplierBalance}</p>
      </div>

      <Grid container justifyContent="center">
        <MachineButton
          onClick={getMoney}
          text="Withdraw Money"
          className="operation-button"
        />
        <MachineButton
          onClick={reset}
          text="Reset Products"
          className="operation-button"
        />
        <MachineButton
          onClick={returnHomePage}
          text="Return to products"
          className="operation-button"
        />
      </Grid>
    </div>
  )
}
export default AuthorizedPage
