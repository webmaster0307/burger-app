import { ICartItem } from '@/providers/CartProvider';
import React from 'react'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface ICartItemProps {
  cartItem: ICartItem;
}

const CartItem: React.FC<ICartItemProps> = ({ cartItem }) => {
  return (
    <Grid container my={4}>
      <Grid item md={9} display="flex" alignItems="center">
        <Image 
          width={80}
          height={80}
          src={cartItem.item.image}
          alt={cartItem.item.name}
          style={{borderRadius: '50%'}}
        />
        <Typography variant="body1" ml={4}>{cartItem.item.name} ({cartItem.count})</Typography>
      </Grid>
      <Grid item md={3} display="flex" alignItems="center">
        <Typography variant="body1">${cartItem.item.price}</Typography>
        <IconButton sx={{color: 'text.primary', ml: 2}}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default CartItem