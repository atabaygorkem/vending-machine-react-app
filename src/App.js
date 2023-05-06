import "./App.css"
import Notification from "./components/Notification"
import { Route, Routes } from "react-router-dom"
import SupplierPage from "./components/SupplierPage"
import MachineOperationsPage from "./components/SupplierPage/MachineOperationsPage"
import { Grid } from "@mui/material"
import HomePage from "./components/HomePage"
import StatusBar from "./components/StatusBar"
import Header from "./components/Header"

function App() {
  return (
    <div className="center ">
      <Notification />

      <Grid
        container
        direction="column"
        alignItems="center"
        // bgcolor="violet"
        sx={{ width: "75%" }}
        mt={4}
      >
        <Grid item>
          <Header />
        </Grid>

        <StatusBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<SupplierPage />} />
          <Route path="/admin/operations" element={<MachineOperationsPage />} />
        </Routes>
      </Grid>
    </div>
  )
}

export default App
