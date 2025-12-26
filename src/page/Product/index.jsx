import React from "react"; 
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { ProductDetal } from "./Продукты.styled";
import Lamp2 from "../../components/Lamp2";
import Jadval from "../../components/Jadval";


function ProductDetail(props) {
  const { goToHome } = useAppNavigation();

  return (
    <ProductDetal>
      <div className="Katalog_strelka">
        <p onClick={goToHome}>Главная</p>
        <Strelka_ongga />
        <p>Каталог</p>
      </div>

      <Lamp2 />
      <Jadval />
    </ProductDetal>
  );
}

export default ProductDetail;
