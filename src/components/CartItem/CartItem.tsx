import { ICartItem } from '@/providers/CartProvider';
import React from 'react'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import { Typography } from '@mui/material';
import RemoveFromCart from '../RemoveFromCart/RemoveFromCart';

interface ICartItemProps {
  cartItem: ICartItem;
}

const CartItem: React.FC<ICartItemProps> = ({ cartItem }) => {
  return (
    <>
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Image 
            width={80}
            height={80}
            src={cartItem.item.image}
            alt={cartItem.item.name}
            style={{borderRadius: '50%'}}
          />
        </TableCell>
        <TableCell align="right">{cartItem.item.name}</TableCell>
        <TableCell align="right">${cartItem.item.price / 100}</TableCell>
        <TableCell align="right">{cartItem.count}</TableCell>
        <TableCell align="right">${cartItem.item.price / 100 * cartItem.count}</TableCell>
        <TableCell align="right"><RemoveFromCart burger={cartItem.item} /></TableCell>
      </TableRow>
    </>
  )
}

export default CartItem