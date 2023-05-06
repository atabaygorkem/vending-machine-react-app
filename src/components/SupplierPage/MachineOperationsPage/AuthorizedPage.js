import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut, withdrawMoney } from "../../../state/reducers/supplierReducer"
import { resetProducts } from "../../../state/reducers/productsReducer"
import useMachineNotification from "../../../hooks/useMachineNotification"
import MachineButton from "../../MachineButton"
import { Grid, IconButton } from "@mui/material"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"

const AuthorizedPage = () => {
  const supplier = useSelector(({ supplier }) => supplier)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sendNotification = useMachineNotification()

  const getMoney = () => {
    sendNotification(
      `You successfully withdraw ${supplier.supplierBalance}$`,
      "success",
      3
    )
    dispatch(withdrawMoney())
  }

  const reset = () => {
    sendNotification(`Success`, "success", 2)
    dispatch(resetProducts())
  }

  const returnHomePage = () => {
    dispatch(signOut())
    navigate("/")
  }

  return (
    <div>
      <Grid container item justifyContent="center" mt={9}>
        <IconButton>
          Balance: {supplier.supplierBalance} <AttachMoneyIcon />
        </IconButton>
      </Grid>

      <Grid container justifyContent="center">
        <MachineButton onClick={getMoney} text="Withdraw Money" />
        <MachineButton onClick={reset} text="Reset Products" />
        <MachineButton onClick={returnHomePage} text="Return to products" />
      </Grid>
    </div>
  )
}
export default AuthorizedPage
