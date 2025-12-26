import React from 'react';
import { CatalogCard, CatalogGrid, Katalog } from "./Katalog.styled";
import { Strelka } from '../icons';
import { useAppNavigation } from '../../hooks/useAppNavigation';

// Rasmlar importi
import a1 from "../../assets/chandeliers/a1.svg";
import a2 from "../../assets/chandeliers/a2.svg";
import a3 from "../../assets/chandeliers/a3.svg";
import a4 from "../../assets/chandeliers/a4.svg";
import a5 from "../../assets/chandeliers/a5.svg";
import a6 from "../../assets/chandeliers/a6.svg";

function Katalogss(props) {
    const { goToKatalog } = useAppNavigation();
    

    return (
      <div>
        <Katalog>
          <h1>Каталог</h1>
          <div
            className="Home_strelka"
            onClick={() => {}}
            style={{ cursor: "pointer" }}
          >
            <button onClick={goToKatalog}>Весь каталог</button>
            <Strelka />
          </div>
        </Katalog>

        <CatalogGrid>
          {[a1, a2, a3, a4, a5, a6].map((img, index) => (
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
                  ][index]
                }
              </p>
              <img src={img} alt="Catalog item" />
              <span>От 540₽ →</span>
            </CatalogCard>
          ))}
        </CatalogGrid>
      </div>
    );
}

export default Katalogss;