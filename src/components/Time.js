import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tick } from "../state/reducers/timeReducer"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

/**
 * Render time and update state time every 1000 milliseconds
 * @returns {React.ReactElement} - Material ui core ListItem component
 */

const Time = () => {
  const time = useSelector(({ time }) => time)
  const dispatch = useDispatch()

  useEffect(() => {
    setInterval(() => dispatch(tick()), 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ListItem disablePadding>
      <Tooltip title="Time is the inevitable progression into the future">
        <ListItemButton>
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText
            primary={new Date(time).toLocaleTimeString()}
            id="time"
          />
        </ListItemButton>
      </Tooltip>
    </ListItem>
  )
}

export default Time
