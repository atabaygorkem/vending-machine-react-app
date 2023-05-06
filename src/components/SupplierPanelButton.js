import { Chip } from "@mui/material"
import { useNavigate } from "react-router-dom"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"

const SupplierPanelButton = () => {
  const navigate = useNavigate()

  return (
    <Chip
      icon={<AdminPanelSettingsIcon />}
      label="Supplier Panel"
      onClick={() => navigate("/admin")}
      sx={{ margin: "100px 32px" }}
    />

    // <div className="operation-button">
    //   <button onClick={() => navigate("/admin")}> Supplier Panel</button>
    // </div>
  )
}

export default SupplierPanelButton
