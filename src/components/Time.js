import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tick } from "../state/reducers/timeReducer"

const Time = () => {
  const time = useSelector(({ time }) => time)
  const dispatch = useDispatch()

  useEffect(() => {
    setInterval(() => dispatch(tick()), 1000)
  }, [])

  return (
    <div>
      <p>{new Date(time).toLocaleTimeString()}</p>
    </div>
  )
}

export default Time
