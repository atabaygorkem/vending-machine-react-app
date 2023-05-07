import { useSelector } from "react-redux"
import AuthorizedPage from "./AuthorizedPage"
import UnauthorizedPage from "./UnauthorizedPage"

/**
 * Component that is rendered when the user navigate to /admin/operations route.
 * Conditionally render page based on the supplier state
 * @returns {React.ReactElement}
 */

const MachineOperationsPage = () => {
  const supplier = useSelector(({ supplier }) => supplier)

  return (
    <div>
      {supplier.isAuthorized ? <AuthorizedPage /> : <UnauthorizedPage />}
    </div>
  )
}

export default MachineOperationsPage
