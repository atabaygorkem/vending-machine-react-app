import "./App.css"
import ProductList from "./components/HomePage"
import Notification from "./components/Notification"
import { Route, Routes } from "react-router-dom"
import SupplierPage from "./components/SupplierPage"
import MachineOperationsPage from "./components/SupplierPage/MachineOperationsPage"
import Time from "./components/Time"
import MachineTemperature from "./components/MachineTemperature"
import { Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import HomePage from "./components/HomePage"

function App() {
  return (
    <div>
      <Notification />
      <Grid container spacing={4}>
        <Grid>
          <Time />
        </Grid>
        <Grid>
          <MachineTemperature />
        </Grid>
        <Grid>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<SupplierPage />} />
            <Route
              path="/admin/operations"
              element={<MachineOperationsPage />}
            />
          </Routes>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
