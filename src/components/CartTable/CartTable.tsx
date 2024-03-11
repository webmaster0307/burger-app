import { ICartItem } from '@/providers/CartProvider'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CartItem from '../CartItem/CartItem';

interface ICartTable {
  cart: ICartItem[];
  tax?: number;
}

const CartTable: React.FC<ICartTable> = ({cart, tax = 0.05}) => {
  const total = cart.reduce((acc, cartItem) => (acc + (cartItem.item.price / 100) * cartItem.count ), 0)
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Count</TableCell>
          <TableCell align="right">Total</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cart.map((cartItem, index) => (
          <CartItem 
            key={`${cartItem.item.id}-${index}`}
            cartItem={cartItem}
          />
        ))}
        <TableRow>
          <TableCell colSpan={5} align='right'>
            Sub Total: 
          </TableCell>
          <TableCell align='right'>
            ${total}
          </TableCell>
        </TableRow>
        {tax > 0 && (
          <TableRow>
            <TableCell colSpan={5} align='right'>
              Tax: 
            </TableCell>
            <TableCell align='right'>
              ${(total * tax).toFixed(2)} ({tax * 100}%)
            </TableCell>
          </TableRow>
        )}
        <TableRow>
          <TableCell colSpan={5} align='right'>
            Total: 
          </TableCell>
          <TableCell align='right'>
            ${(total * tax + total).toFixed(2)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default CartTable