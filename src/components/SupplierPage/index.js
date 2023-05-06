import { Grid } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signIn } from "../../state/reducers/supplierReducer"

const SupplierPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
            <p>Username</p>
            <input
              name="username"
              placeholder="admin"
              value={username}
              onChange={onChange}
            />
          </Grid>
        </div>
        <div>
          <Grid container direction="column">
            <p>Password</p>
            <input
              name="password"
              type="password"
              value={password}
              autoComplete="on"
              onChange={onChange}
            />
          </Grid>
        </div>
        <div className="operation-button">
          <Grid container justifyContent="space-between">
            <button type="submit">Log in</button>
            <button onClick={navigateToHomePage}>Product List</button>
          </Grid>
        </div>
      </form>
    </div>
  )
}

export default SupplierPage
