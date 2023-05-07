import { Grid, IconButton } from "@mui/material"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import { useSelector } from "react-redux"

/**
 * Render customer balance
 * @returns {React.ReactElement}
 */

const CustomerBalance = () => {
  const { customerBalance } = useSelector((state) => state)
  return (
    <Grid container item justifyContent="center" mb={3}>
      <IconButton>
        Balance: {customerBalance.balance} <AttachMoneyIcon />
      </IconButton>
    </Grid>
  )
}

export default CustomerBalance
