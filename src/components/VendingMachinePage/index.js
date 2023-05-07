import { Grid } from "@mui/material"
import ChangeBox from "./ChangeBox"
import CustomerBalance from "./CustomerBalance"
import InsertMoneyPage from "./InsertMoneyPage"
import OperationsPage from "./OperationsPage"

const VendingMachinePage = () => {
  return (
    <div>
      <Grid container direction="column" justifyContent="center">
        <CustomerBalance />
        <InsertMoneyPage />
        <OperationsPage />
        <ChangeBox />
      </Grid>
    </div>
  )
}

export default VendingMachinePage
