import { Alert, Snackbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setOpen } from "../state/reducers/notificationReducer"

/**
 * Render notification to the screen
 * @returns {React.ReactElement} - Material ui core Snackbar component
 */

const Notification = () => {
  const { text, type, isOpen, duration } = useSelector(
    ({ notification }) => notification
  )
  const dispatch = useDispatch()

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    dispatch(setOpen(false))
  }

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{ marginBottom: "75px" }}
      onClose={handleClose}
    >
      <Alert severity={type} sx={{ width: "100%" }} className="noselect">
        {text}
      </Alert>
    </Snackbar>
  )
  // text && <div className={type}>{text}</div>
}

export default Notification
