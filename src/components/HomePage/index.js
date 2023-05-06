import { Grid } from "@mui/material"
import ProductList from "../ProductList"
import SupplierPanelButton from "../SupplierPanelButton"
import VendingMachinePage from "../VendingMachinePage"

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
