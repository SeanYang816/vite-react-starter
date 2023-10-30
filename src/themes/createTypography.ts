import { Theme } from '@mui/material/styles'

export const createTypography = (theme: Theme) => ({
  fontFamily: 'Arial, sans-serif',
  h1: {
    fontSize: '2.5rem',
    fontWeight: 600
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600
  },
  body1: {
    fontSize: '1rem'
  }
})