import Grid from "@mui/material/Unstable_Grid2"
import MachineTemperature from "./MachineTemperature"
import Time from "./Time"

const StatusBar = () => {
  return (
    <>
      <Grid xs={3}>
        <Time />
      </Grid>

      <Grid>
        <MachineTemperature />
      </Grid>
    </>
  )
}

export default StatusBar
