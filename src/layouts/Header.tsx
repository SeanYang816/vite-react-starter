import React from 'react'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'

const Header = () => {
  const theme = useTheme()

  return (
    <AppBar
      enableColorOnDark
      position='fixed'
      color='primary'
    >
      <Toolbar>
        <IconButton
          sx={{
            color: theme.palette.primary.contrastText
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header