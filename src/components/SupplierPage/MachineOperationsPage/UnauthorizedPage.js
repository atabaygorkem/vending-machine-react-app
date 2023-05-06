import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import LoginRoundedIcon from "@mui/icons-material/LoginRounded"

const UnauthorizedPage = () => {
  const navigate = useNavigate()
  const navigateToHomePage = (e) => {
    e.preventDefault()
    navigate("/")
  }
  return (
    <>
      <Typography variant="h1" my={20}>
        403 Forbidden
      </Typography>
      <Button
        size="small"
        variant="contained"
        endIcon={<LoginRoundedIcon />}
        color="formCancel"
        onClick={navigateToHomePage}
      >
        Return
      </Button>
    </>
  )
}
export default UnauthorizedPage
