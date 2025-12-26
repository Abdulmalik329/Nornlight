import React from "react";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Popular } from "./Популярные_продукты.styled";
import Lamp from "../../components/Lamp";

function PopularProducts(props) {
  const { goToHome } = useAppNavigation();

  return (
    <Popular>
      <div className="Katalog_strelka">
        <p onClick={goToHome}>Главная</p>
        <Strelka_ongga />
        <p>Популярные товары</p>
      </div>
      <h1>Популярные товары</h1>

      <Lamp />
    </Popular>
  );
}

export default PopularProducts;
