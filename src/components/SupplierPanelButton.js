import { useNavigate } from "react-router-dom"

const SupplierPanelButton = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate("/admin")}> Supplier Panel</button>
    </div>
  )
}

export default SupplierPanelButton
