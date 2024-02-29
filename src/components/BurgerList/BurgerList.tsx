import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import React from 'react'
import BurgerCard from '../BurgerCard/BurgerCard'
import { IBurger } from '@/types/burger'

interface IBurgerListProps {
  burgers: IBurger[];
}

const BurgerList: React.FC<IBurgerListProps> = ({burgers}) => {
  return (
    <Grid container spacing={4}>
      {burgers.map((burger) => (
        <Grid item md={3} key={burger.id}>
          <BurgerCard burger={burger} />
        </Grid>
      ))}
    </Grid>
  )
}

export default BurgerList