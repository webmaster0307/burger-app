import Image from 'next/image'
import React from 'react'
import CardContent from '@mui/material/CardContent'
import { IBurger } from '@/types/burger'
import Tooltip from '@mui/material/Tooltip'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

interface IBurgerCardProps {
  burger: IBurger;
}

const BurgerCard: React.FC<IBurgerCardProps> = ({burger}) => {
  return (
    <Link href={`/burger/${burger.slug}`}>
      <Card sx={{borderRadius: '16px', height: '100%'}}>
        <Image 
          src={burger.image}
          alt={burger.name}
          width={300}
          height={350}
        />
        <CardContent>
          <Tooltip title={burger.name} placement="bottom" arrow>
            <Typography 
              variant="h5"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >{burger.name}</Typography>
          </Tooltip>
          <Typography variant="body1" mb={1}>${burger.price}</Typography>
          <Typography 
            variant='body2'
            sx={{
              "display": "-webkit-box",
              "-webkit-line-clamp": "3",
              "-webkit-box-orient": "vertical",
              "overflow": "hidden",
              "min-height": "50px",
            }}
          >{burger.description}</Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default BurgerCard