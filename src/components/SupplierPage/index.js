import { Box, Button, Chip, Grid, TextField } from "@mui/material"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import LoginRoundedIcon from "@mui/icons-material/LoginRounded"
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded"
import KeyRoundedIcon from "@mui/icons-material/KeyRounded"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signIn } from "../../state/reducers/supplierReducer"
import useMachineNotification from "../../hooks/useMachineNotification"

const SupplierPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sendNotification = useMachineNotification()

  const onChange = ({ target }) => {
    if (target.name === "username") {
      setUsername(target.value)
    } else if (target.name === "password") {
      setPassword(target.value)
    }
  }

  const onSubmit = (event) => {
    try {
      event.preventDefault()
      if (username === "admin" && password === "admin") {
        setUsername("")
        setPassword("")
        dispatch(signIn({ username, password }))
        navigate("/admin/operations")
      } else {
        sendNotification(`Invalid credentials`, "error", 2)
        navigate("/")
      }
    } catch (e) {
      console.log(e)
    }
  }

  const navigateToHomePage = (e) => {
    e.preventDefault()
    navigate("/")
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <Grid container direction="column">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircleRoundedIcon
                sx={{ color: "action.active", mr: 1, my: 1.2 }}
              />
              <TextField
                id="username"
                name="username"
                label="Username"
                variant="standard"
                placeholder="admin"
                margin="normal"
                value={username}
                onChange={onChange}
              />
            </Box>
          </Grid>
        </div>
        <div>
          <Grid container direction="column">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <KeyRoundedIcon sx={{ color: "action.active", mr: 1, my: 1.2 }} />
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="standard"
                type="password"
                autoComplete="true"
                margin="normal"
                value={password}
                onChange={onChange}
              />
            </Box>
          </Grid>
        </div>
        <div>
          <Grid container justifyContent="space-between" mt={6}>
            <Button
              size="small"
              variant="contained"
              endIcon={<ManageAccountsRoundedIcon />}
              color="formLogin"
              type="submit"
            >
              Log in
            </Button>
            <Button
              size="small"
              variant="contained"
              endIcon={<LoginRoundedIcon />}
              color="formCancel"
              onClick={navigateToHomePage}
            >
              Return
            </Button>
          </Grid>
        </div>
      </form>
    </div>
  )
}

export default SupplierPage
