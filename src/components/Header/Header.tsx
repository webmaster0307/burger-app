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
import { ColorModeContext } from '../../theme/themeProvider';
import { useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from 'next/link';
import { CartContext } from '../../providers/CartProvider';

const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const {cart} = useContext(CartContext); 
  const theme = useTheme();
  const totalCartItems = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <Box sx={{ flexGrow: 1 }} px={10}>
      <AppBar position="static">
        <Toolbar sx={{bgcolor: 'background.default'}}>
          <Box component={Link} href="/" flexGrow={1} display="flex" alignItems="center" sx={{cursor: 'pointer'}}>
            <Typography variant="h5" component="div" mr={2} color="primary.main" fontWeight="bold">
              BURGER
            </Typography>
            <HomeIcon sx={{color: 'white'}} />
          </Box>
          <Box display="flex" alignItems="center">
            <SearchField />
            <Box mx={2}>
              <Link href="/cart">
                <Badge badgeContent={totalCartItems} color="primary">
                  <ShoppingCartIcon sx={{color: 'text.primary'}} />
                </Badge>
              </Link>
            </Box>
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
