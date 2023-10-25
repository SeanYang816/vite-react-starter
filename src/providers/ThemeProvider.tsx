import React, { ReactNode } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { palette, typography } from 'themes'
import { CssBaseline } from '@mui/material'

const theme = createTheme({
  palette,
  typography
})

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
