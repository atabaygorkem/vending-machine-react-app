import { Typography } from "@mui/material"

/**
 * Render application header
 * @returns {React.ReactElement} - Material ui core Typography component
 */

const Header = () => {
  return (
    <Typography
      variant="h2"
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
