import { Card, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import CardContent from '@mui/material/CardContent'
import { IBurger } from '@/types/burger'

interface IBurgerCardProps {
  burger: IBurger;
}

const BurgerCard: React.FC<IBurgerCardProps> = ({burger}) => {
  return (
    <Card sx={{cursor: 'pointer', borderRadius: '16px'}}>
      <Image 
        src={burger.image}
        alt={burger.name}
        width={300}
        height={350}
      />
      <CardContent>
        <Typography variant="h5">{burger.name}</Typography>
        <Typography variant="body1" mb={1}>${burger.price}</Typography>
        <Typography variant='body2'>{burger.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default BurgerCard