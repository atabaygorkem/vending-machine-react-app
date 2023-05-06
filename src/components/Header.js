import { Typography } from "@mui/material"

const Header = () => {
  return (
    <Typography
      variant="h3"
      gutterBottom
      color="#586F6B"
      className="noselect"
      sx={{ letterSpacing: 4, fontFamily: "BlinkMacSystemFont" }}
    >
      Vending Machine
    </Typography>
  )
}
export default Header
