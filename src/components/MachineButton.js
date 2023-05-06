import { Button } from "@mui/material"

const MachineButton = ({ onClick, text, ...rest }) => {
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

export default MachineButton
