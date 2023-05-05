import ChangeBox from "./ChangeBox"
import CustomerBalance from "./CustomerBalance"

import InsertMoneyPage from "./InsertMoneyPage"
import OperationsPage from "./OperationsPage"

const VendingMachinePage = () => {
  return (
    <div style={{ borderStyle: "solid" }}>
      <CustomerBalance />
      <InsertMoneyPage />
      <OperationsPage />
      <ChangeBox />
    </div>
  )
}

export default VendingMachinePage
