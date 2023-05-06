import { Grid } from "@mui/material"
import { useSelector } from "react-redux"

const CustomerBalance = () => {
  const { customerBalance } = useSelector((state) => state)
  return (
    <Grid container item justifyContent="center">
      <p>Balance: {customerBalance.balance}$</p>
    </Grid>
  )
}

export default CustomerBalance
