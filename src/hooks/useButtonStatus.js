import { useSelector } from "react-redux"

const useButtonStatus = () => {
  const machineTemperature = useSelector(
    ({ machineTemperature }) => machineTemperature
  )
  return machineTemperature.isOverheated || machineTemperature.isCooling
}

export default useButtonStatus
