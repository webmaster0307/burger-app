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

export default async function Page({params}: {params: { slug: string}}) {
  const burgers = await getBurgers();
  const burger = burgers.products.find((burger) => burger.slug === params.slug);

  if(!burger) {
    return (
      <Card>
        <CardContent>
          <Typography>There is no data.</Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <Container maxWidth="md">
      <Card sx={{borderRadius: '8px', pb: 8}}>
        <CardContent>
          <Typography 
            component={Link} 
            href="/" 
            variant="body1" 
            fontSize="20px" 
            display="flex" 
            alignItems="center" 
            color="text.primary"
          >
            <KeyboardBackspaceIcon sx={{mr: 1}} /> Go Back
          </Typography>
          <Box textAlign="center" pt={2} px={20}>
            <Image 
              src={burger.image}
              alt={burger.name}
              width={500}
              height={300}
              style={{
                borderRadius: '10px'
              }}
            />
            <Typography variant="h4" mt={2}>{burger.name}</Typography>
            <Box pt={4} textAlign="left">
              <Typography variant="body1">${burger.price}</Typography>
              <Typography variant="body2" mt={4}>{burger.description}</Typography>
              <Typography variant="body2" mt={2}>Nutrition: {`${burger.calorie} calories`}</Typography>
            </Box>
            <Button variant="contained" sx={{mt: 10, textTransform: 'none', px: 8, borderRadius: '50px'}} color="secondary">Add to Cart</Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}