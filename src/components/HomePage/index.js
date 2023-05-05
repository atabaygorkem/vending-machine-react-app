import ProductList from "../ProductList"
import SupplierPanelButton from "../SupplierPanelButton"
import VendingMachinePage from "../VendingMachinePage"

const HomePage = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ProductList />
      <VendingMachinePage />
      <SupplierPanelButton />
    </div>
  )
}

export default HomePage
