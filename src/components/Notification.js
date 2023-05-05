import { useSelector } from "react-redux"

const Notification = () => {
  const { text, type } = useSelector(({ notification }) => notification)

  return text && <div className={type}>{text}</div>
}

export default Notification
