import { PaletteColor, PaletteOptions, SimplePaletteColorOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    wtf: PaletteColor;
  }

  interface PaletteOptions {
    wtf: SimplePaletteColorOptions
  }
}

export const palette: PaletteOptions = {
  primary: {
    main: '#F5A300'
  },
  secondary: {
    main: '#4B3F72'
  },
  wtf: {
    main: '#333'
  }
}
