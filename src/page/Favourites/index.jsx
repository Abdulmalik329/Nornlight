import styled from "styled-components";
import Lamp from "../../components/Lamp";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Popular } from "./Favourite.styled";
import { Container } from "./Favourite.styled";
function Favourites() {
    const { goToHome } = useAppNavigation();
  
  return (
    <Container>
      <Popular>
      <h1>Избранные товары</h1>
      <Lamp />
      </Popular>
    </Container>
  );
}


export default Favourites;
  