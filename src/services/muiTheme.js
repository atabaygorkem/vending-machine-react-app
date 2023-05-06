import { createTheme } from "@mui/material"

const { palette } = createTheme()

export const theme = createTheme({
  palette: {
    background: {
      // paper: "#f5f5e9",
    },
    formLogin: palette.augmentColor({
      color: {
        main: "#C9CDD8",
      },
    }),
    formCancel: palette.augmentColor({
      color: {
        main: "#9B8FA3",
      },
    }),
    machineButton: palette.augmentColor({
      color: {
        main: "#578381",
      },
    }),
    buyButton: palette.augmentColor({
      color: {
        main: "#57A773",
      },
    }),
    cancelButton: palette.augmentColor({
      color: {
        main: "#E55B4F",
      },
    }),
  },
})
