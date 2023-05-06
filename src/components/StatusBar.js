import { Grid } from "@mui/material"
import MachineTemperature from "./MachineTemperature"
import Time from "./Time"

const StatusBar = () => {
  return (
    <>
      <Grid
        item
        container
        justifyContent="space-evenly"
        // bgcolor="yellow"
      >
        <Grid item>
          <Time />
        </Grid>
        <Grid item>
          <MachineTemperature />
        </Grid>
      </Grid>
    </>
  )
}

export default StatusBar
