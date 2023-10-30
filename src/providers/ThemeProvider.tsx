import React from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import { createBreakpoints, createComponents, createPalette, createTypography } from 'themes'
import { CssBaseline } from '@mui/material'

type ThemeProviderProps = {
  children: React.ReactElement,
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useTheme()

  const palette = createPalette(theme)
  const typography = createTypography(theme)
  const breakpoints = createBreakpoints(theme)
  const components = createComponents(theme)

  const themes = createTheme({
    breakpoints,
    palette,
    typography,
    components
  })

  return (
    <MuiThemeProvider theme={themes}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
