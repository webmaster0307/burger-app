'use client';

import React, { useContext } from 'react'
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '@/providers/CartProvider';
import { IBurger } from '@/types/burger';

interface IRemoveFromCartProps {
  burger: IBurger;
}

const RemoveFromCart: React.FC<IRemoveFromCartProps> = ({burger}) => {
  const {removeFromCart} = useContext(CartContext);
  return (
    <IconButton sx={{color: 'text.primary', ml: 2}} onClick={() => removeFromCart(burger)}>
      <DeleteIcon />
    </IconButton>
  )
}

export default RemoveFromCart