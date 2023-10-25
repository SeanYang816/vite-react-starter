import { AppBar, Box, Card, IconButton, ListItemIcon, MenuItem, MenuList, Paper, Popover, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyIcon from '@mui/icons-material/Key'
import LogoutIcon from '@mui/icons-material/Logout'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  usePopupState,
  bindTrigger,
  bindPopover,
  bindToggle
} from 'material-ui-popup-state/hooks'
import { Logout } from '@mui/icons-material'

const Header = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  return (
    <AppBar
      enableColorOnDark
      position='static'
      color='primary'
    >
      <Toolbar>
        <IconButton>
          <MenuIcon
            color='secondary'
            fontSize='large'
          />

        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton>
            <CatchingPokemonIcon
              color='secondary'
              fontSize='large'
              sx={{ flexGrow: 1 }}
            />

          </IconButton>
        </Box>

        <IconButton {...bindToggle(popupState)}>
          <Stack
            direction='row'
            gap={1}
          >
            <AccountCircleIcon
              color='secondary'
              fontSize='large'
            />
            <ExpandMoreIcon
              color='secondary'
              fontSize='large'
            />

          </Stack>
        </IconButton>
        <Popover
          {...bindPopover(popupState)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Paper sx={{ width: '230px' }}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <KeyIcon fontSize='small' />
                </ListItemIcon>
                <Typography>Change Password</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <LogoutIcon fontSize='small' />
                </ListItemIcon>
                <Typography>Logout</Typography>
              </MenuItem>
            </MenuList>
          </Paper>
        </Popover>
      </Toolbar>
    </AppBar>
  )
}

export default Header