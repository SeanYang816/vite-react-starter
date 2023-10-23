import React, { ReactNode } from 'react'
import { ThemeProvider as Provider } from '@mui/material'
import { palettes } from './themes/palettes'

const themes = {
  ...palettes
}

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  return (
    <Provider theme={themes}>
      {children}
    </Provider>
  )
}
