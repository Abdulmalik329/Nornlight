import React from "react";
import { CatalogUy } from "./CatalogHome.styled";
import { Strelka, Strelka1 } from "../icons";


import uy1 from "../../assets/image_3/uy1.png";
import uy2 from "../../assets/image_3/uy2.png";
import uy3 from "../../assets/image_3/uy3.png";
import { WhySection } from "../NornLight/NornLight.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";



function CatalogUy1({ showHeader = true }) {

  const { goToBlog } = useAppNavigation();

  return (
    <div>
      {showHeader && (
        <WhySection style={{ marginTop: "100px" }}>
          <div className="header">
            <h2>Блог</h2>
            <button onClick={goToBlog}>
              Перейти в блог <Strelka />
            </button>
          </div>
        </WhySection>
      )}
      <CatalogUy>
        <div className="wrapper">
          <img src={uy1} alt="" />
          <div className="Catalog">
            <p>Как правильно освещать дом снаружи?</p>
            <Strelka1 />
          </div>
          <span>01.01.2024</span>
        </div>

        <div className="wrapper">
          <img src={uy2} alt="" />
          <div className="Catalog">
            <p>Как правильно освещать дом снаружи?</p>
            <Strelka1 />
          </div>
          <span>01.01.2024</span>
        </div>

        <div className="wrapper">
          <img src={uy3} alt="" />
          <div className="Catalog">
            <p>Как правильно освещать дом снаружи?</p>
            <Strelka1 />
          </div>
          <span>01.01.2024</span>
        </div>
      </CatalogUy>
    </div>
  );
}

export default CatalogUy1;
