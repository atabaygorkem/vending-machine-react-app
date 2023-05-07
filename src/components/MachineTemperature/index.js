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

  //Check machineTemperature state to fire decreaseTemperature action
  useEffect(() => {
    if (temperature.currentTemperature >= temperature.maxTemperature) {
      dispatch(decreaseTemperature())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <ListItemIcon>
                Cooling <AcUnitIcon fontSize="14px" />
              </ListItemIcon>
            )}
          </ListItemText>
        </ListItemButton>
      </Tooltip>
    </ListItem>
  )
}

export default MachineTemperature
