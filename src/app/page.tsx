import { Box, Container } from "@mui/material";
import Header from "@/components/Header/Header";
import BurgerList from "@/components/BurgerList/BurgerList";
import { API_BASE_URL } from "@/constants/url";
import { IBurgerListResponse } from "@/types/burger";

async function getData() {
  const res = await fetch(`${API_BASE_URL}/data/products.json`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: IBurgerListResponse = await res.json();
 
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <Box>
      <Header />
      <Container maxWidth="lg">
        <BurgerList burgers={data.products || []} />
      </Container>
    </Box>
  );
}
