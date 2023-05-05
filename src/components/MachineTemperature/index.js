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
    <div>
      <p>
        {temperature.currentTemperature}°C {temperature.isCooling && "Cooling"}
      </p>
    </div>
  )
}

export default MachineTemperature
