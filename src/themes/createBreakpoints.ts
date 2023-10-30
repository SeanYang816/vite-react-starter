import { Theme } from '@mui/material/styles'

export const createBreakpoints = (theme: Theme) => ({
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
})
