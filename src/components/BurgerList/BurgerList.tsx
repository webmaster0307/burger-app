'use client';

import Grid from '@mui/material/Grid'
import React, { useContext } from 'react'
import BurgerCard from '../BurgerCard/BurgerCard'
import { IBurger } from '@/types/burger'
import { SearchContext, useSearch } from '@/providers/SearchProvider';
import { Typography } from '@mui/material';

interface IBurgerListProps {
  burgers: IBurger[];
}

const BurgerList: React.FC<IBurgerListProps> = ({burgers}) => {
  const {value} = useSearch();

  const filteredBurgers = value ? burgers.filter(burger => {
    return burger.name.toLowerCase().includes(value.toLowerCase());
  }) : burgers;

  if(value && filteredBurgers.length === 0) {
    return <Typography textAlign="center" variant='body1' mt={10}>There is no search result.</Typography>
  }

  return (
    <Grid container spacing={4}>
      {filteredBurgers.map((burger) => (
        <Grid item md={3} key={burger.id}>
          <BurgerCard burger={burger} />
        </Grid>
      ))}
    </Grid>
  )
}

export default BurgerList