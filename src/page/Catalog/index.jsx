import React from "react";
import {
  CatalogCard,
  CatalogGrid,
  CatalogGrid1,
  Katalog,
} from "./Catalog.styled";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";

import a1 from "../../assets/chandeliers/a1.svg";
import a2 from "../../assets/chandeliers/a2.svg";
import a3 from "../../assets/chandeliers/a3.svg";
import a4 from "../../assets/chandeliers/a4.svg";
import a5 from "../../assets/chandeliers/a5.svg";
import a6 from "../../assets/chandeliers/a6.svg";
import a7 from "../../assets/chandeliers/a7.svg";
import a8 from "../../assets/chandeliers/a8.svg";
import a9 from "../../assets/chandeliers/a9.svg";
import a10 from "../../assets/chandeliers/a10.svg";
import a11 from "../../assets/chandeliers/a11.svg";
import Section2 from "../../components/Section2";
import CatalogUy1 from "../../components/CatalogHome";
import Text from "../../components/Text";

function Catalog(props) {
  const { goToHome } = useAppNavigation();

  return (
    <div className="container">
      <Katalog>
        <div className="Katalog_p">
          <p>Светильники</p>
          <p>Люстры</p>
          <p>Лампы</p>
          <p>Настольные лампы</p>
          <p>Ночники</p>
          <p>Подстветка</p>
          <p>Уличное освещение</p>
          <p>Мебельные установки</p>
        </div>
        <div className="Katalog_strelka">
          <p onClick={goToHome}>Главная</p>
          <Strelka_ongga />
          <p>Каталог</p>
        </div>
        <div className="Katalog_h1">
          <h1>Каталог</h1>
        </div>
        <CatalogGrid>
          {[a1, a2, a3, a4, a5, a6, a7, a8, a9].map((img, index) => (
            <CatalogCard key={index}>
              <p className="title">
                {
                  [
                    "Люстры",
                    "Светильники",
                    "Бра",
                    "Торшеры",
                    "Настольные лампы",
                    "Споты",
                    "Трековые светильники",
                    "Уличные светильники",
                    "Технические светильники",
                  ][index]
                }
              </p>
              <img src={img} alt="Catalog item" />
              <span>От 540₽ →</span>
            </CatalogCard>
          ))}
        </CatalogGrid>
        <CatalogGrid1>
          {[a10, a11].map((img, index) => (
            <CatalogCard key={index}>
              <p className="title">
                {["Светодиодные ленты", "Комплектуюшие"][index]}
              </p>
              <img src={img} alt="Catalog item" />
              <span>От 540₽ →</span>
            </CatalogCard>
          ))}
        </CatalogGrid1>

        <Section2 />

        <CatalogUy1 />

        <Text />
      </Katalog>
    </div>
  );
}

export default Catalog;
