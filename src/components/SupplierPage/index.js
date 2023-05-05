import { useNavigate } from "react-router-dom"
import LoginPage from "./LoginPage"

const SupplierPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <LoginPage />
      <button onClick={() => navigate("/")}>Product List</button>
    </div>
  )
}

export default SupplierPage
