import { Grid } from "@mui/material"
import ProductList from "../ProductList"
import SupplierPanelButton from "../SupplierPanelButton"
import VendingMachinePage from "../VendingMachinePage"

/**
 * Component that is rendered when the user navigate to / route.
 * Render components that serve the main functionalities of the vending machine
 * @returns {React.Fragment}
 */

const HomePage = () => {
  return (
    <>
      <Grid item container>
        <Grid item xs={7}>
          <ProductList />
        </Grid>
        <Grid item xs={5}>
          <VendingMachinePage />
        </Grid>
      </Grid>
      <SupplierPanelButton />
    </>
  )
}

export default HomePage
