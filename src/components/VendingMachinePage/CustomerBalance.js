import { Grid, IconButton } from "@mui/material"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import { useSelector } from "react-redux"

const CustomerBalance = () => {
  const { customerBalance } = useSelector((state) => state)
  return (
    <Grid container item justifyContent="center" mb={3}>
      <IconButton aria-label="share">
        Balance: {customerBalance.balance} <AttachMoneyIcon />
      </IconButton>
    </Grid>
  )
}

export default CustomerBalance
