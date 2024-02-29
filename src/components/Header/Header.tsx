'use client';

import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import SearchField from './SearchField';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ColorModeContext } from '../../../theme/themeProvider';
import { useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }} px={10}>
      <AppBar position="static">
        <Toolbar sx={{bgcolor: 'background.default'}}>
          <Box flexGrow={1} display="flex" alignItems="center" sx={{cursor: 'pointer'}}>
            <Typography variant="h5" component="div" mr={2} color="primary.main" fontWeight="bold">
              BURGER
            </Typography>
            <HomeIcon sx={{color: 'white'}} />
          </Box>
          <Box>
            <SearchField />
            <IconButton>
              <Badge badgeContent={5} color="primary">
                <ShoppingCartIcon sx={{color: 'text.primary'}} />
              </Badge>
            </IconButton>
            <IconButton sx={{ ml: 1, color: 'text.primary' }} onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
