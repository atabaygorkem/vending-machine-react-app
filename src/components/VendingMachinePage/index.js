import { Grid } from "@mui/material"
import ChangeBox from "./ChangeBox"
import CustomerBalance from "./CustomerBalance"

import InsertMoneyPage from "./InsertMoneyPage"
import OperationsPage from "./OperationsPage"

const VendingMachinePage = () => {
  return (
    <div
    // style={{ borderStyle: "solid" }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        // alignItems="center"
      >
        <CustomerBalance />
        <InsertMoneyPage />
        <OperationsPage />
        <ChangeBox />
      </Grid>
    </div>
  )
}

export default VendingMachinePage
