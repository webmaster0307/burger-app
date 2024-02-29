import { Box, Container } from "@mui/material";
import BurgerList from "@/components/BurgerList/BurgerList";
import { getBurgers } from "@/utils/getBurgers";

export default async function Home() {
  const data = await getBurgers();

  return (
    <Container maxWidth="lg">
      <BurgerList burgers={data.products || []} />
    </Container>
  );
}
