import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signIn } from "../../state/reducers/supplierReducer"

const LoginPage = () => {
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

  return (
    <form onSubmit={onSubmit}>
      <div>
        Username:{" "}
        <input
          name="username"
          placeholder="admin"
          value={username}
          onChange={onChange}
        />
      </div>
      <div>
        Password:{" "}
        <input
          name="password"
          type="password"
          value={password}
          autoComplete="on"
          onChange={onChange}
        />
      </div>
      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
  )
}

export default LoginPage
