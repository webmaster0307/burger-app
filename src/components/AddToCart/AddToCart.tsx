'use client';

import { IBurger } from '@/types/burger';
import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { CartContext } from '@/providers/CartProvider';

interface IAddToCartProps {
  burger: IBurger;
}

const AddToCart: React.FC<IAddToCartProps> = ({burger}) => {
  const {addToCart} = useContext(CartContext);
  return (
    <Button variant="contained" sx={{mt: 10, textTransform: 'none', px: 8, borderRadius: '50px'}} color="secondary" onClick={() => addToCart(burger)}>Add to Cart</Button>
  )
}

export default AddToCart