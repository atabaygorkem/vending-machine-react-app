import { useNavigate } from "react-router-dom"

const SupplierPanelButton = () => {
  const navigate = useNavigate()

  return (
    <div className="operation-button">
      <button onClick={() => navigate("/admin")}> Supplier Panel</button>
    </div>
  )
}

export default SupplierPanelButton
