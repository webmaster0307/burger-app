'use client';

import { getBurgers } from "@/utils/getBurgers";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";  
import Button from '@mui/material/Button';
import { useContext } from "react";
import { CartContext } from "@/providers/CartProvider";
import CartItem from "@/components/CartItem/CartItem";

export default function Cart() {
  const {cart} = useContext(CartContext);
  
  return (
    <Container maxWidth="md">
      <Card sx={{borderRadius: '8px', pb: 8, height: 'calc(100vh - 200px)'}}>
        <CardContent sx={{px: 10}}>
          <Box textAlign="center" pt={2} px={20} mb={12}>
            <Typography variant="h4" mt={2}>Shopping Cart</Typography>
          </Box>
          {cart.map((cartItem) => (
            <CartItem 
              key={cartItem.item.id}
              cartItem={cartItem}
            />
          ))}
        </CardContent>
      </Card>
    </Container>
  )
}