import { Box, Container } from "@mui/material";
import Header from "@/components/Header/Header";
import BurgerList from "@/components/BurgerList/BurgerList";

export default function Home() {
  return (
    <Box>
      <Header />
      <Container maxWidth="sm">
        <BurgerList />
      </Container>
    </Box>
  );
}
