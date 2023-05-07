import { ThemeProvider } from "@mui/material"
import { render, screen } from "@testing-library/react"
import MachineButton from "../components/MachineButton"
import userEvent from "@testing-library/user-event"
import { theme } from "../services/muiTheme"
import "@testing-library/jest-dom" //import toBeInTheDocument

describe("Machinebutton should:", () => {
  test("be in the document", async () => {
    const mockHandler = jest.fn()
    const text = "testButton"

    render(
      <ThemeProvider theme={theme}>
        <MachineButton onClick={mockHandler} text={text} />
      </ThemeProvider>
    )
    const user = userEvent.setup()
    const button = screen.getByText(text)
    await user.click(button)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
  test("call callback function", async () => {
    const mockHandler = jest.fn()
    const text = "testButton"

    render(
      <ThemeProvider theme={theme}>
        <MachineButton onClick={mockHandler} text={text} />
      </ThemeProvider>
    )
    const user = userEvent.setup()
    const button = screen.getByText(text)
    await user.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})
