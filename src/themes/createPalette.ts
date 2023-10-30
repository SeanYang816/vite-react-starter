import { Theme } from '@mui/material/styles'

export const createPalette = (theme: Theme) => ({
  primary: {
    main: '#F5A300',
    contrastText: theme.palette.common.white
  },
  secondary: {
    main: '#4B3F72',
    contrastText: theme.palette.common.white

  }
})
