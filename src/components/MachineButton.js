import { Button } from "@mui/material"
import PropTypes from "prop-types"

/**
 * Render a single custom button that is used in the vending machine
 * @param {function} onClick - callback function when button is clicked
 * @param {string} text
 * @param {Object} rest - All remaining props if any
 * @returns {React.ReactElement} - Material ui core Button component
 */

const MachineButton = ({ onClick, text = "", ...rest }) => {
  return (
    <Button
      sx={{ margin: "10px", width: "200px" }}
      variant="contained"
      onClick={onClick}
      {...rest}
      size="large"
      color={
        text.toLowerCase() === "buy"
          ? "buyButton"
          : text.toLowerCase() === "cancel"
          ? "cancelButton"
          : "machineButton"
      }
    >
      {text}
    </Button>
  )
  //   <button onClick={onClick} {...rest}>
  //     {text}
  //   </button>
}

MachineButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
}

export default MachineButton
