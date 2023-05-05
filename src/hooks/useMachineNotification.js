import { useDispatch } from "react-redux"
import { applyNotification } from "../state/reducers/notificationReducer"

const useMachineNotification = () => {
  const dispatch = useDispatch()
  return (text, type, seconds) =>
    dispatch(applyNotification({ text, type }, +seconds))
}
export default useMachineNotification
