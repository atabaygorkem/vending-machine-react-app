import { useSelector } from "react-redux"
import AuthorizedPage from "./AuthorizedPage"
import UnauthorizedPage from "./UnauthorizedPage"

const MachineOperationsPage = () => {
  const supplier = useSelector(({ supplier }) => supplier)

  return (
    <div>
      {supplier.isAuthorized ? <AuthorizedPage /> : <UnauthorizedPage />}
    </div>
  )
}

export default MachineOperationsPage
