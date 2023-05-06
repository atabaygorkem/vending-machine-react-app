import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"
import AcUnitIcon from "@mui/icons-material/AcUnit"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseTemperature } from "../../state/reducers/machineTemperatureReducer"

const MachineTemperature = () => {
  const temperature = useSelector(
    ({ machineTemperature }) => machineTemperature
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (temperature.currentTemperature >= temperature.maxTemperature) {
      dispatch(decreaseTemperature())
    }
  }, [temperature.currentTemperature])

  return (
    <ListItem disablePadding>
      <Tooltip title="Temperature">
        <ListItemButton>
          <ListItemIcon>
            <DeviceThermostatIcon />
          </ListItemIcon>
          <ListItemText>
            {temperature.currentTemperature}°C{" "}
            {temperature.isCooling && (
              <ListItemIcon sx={{ fontSize: "14px" }}>
                Cooling <AcUnitIcon />
              </ListItemIcon>
            )}
          </ListItemText>
        </ListItemButton>
      </Tooltip>
    </ListItem>
    // <div
    // // style={{ backgroundColor: "violet" }}
    // >
    //   <p>
    //     {temperature.currentTemperature}°C {temperature.isCooling && "Cooling"}
    //   </p>
    // </div>
  )
}

export default MachineTemperature
