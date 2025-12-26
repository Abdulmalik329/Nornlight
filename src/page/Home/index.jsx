import React from "react";
import hero_lamp from "../../assets/svg/hero-lamp.svg";
import { HomePage, Homes } from "./Home.styled";

import CatalogUy1 from "../../components/CatalogHome";

import Text from "../../components/Text";
import Lamp from "../../components/Lamp";
import NornLight from "../../components/NornLight";
import Section from "../../components/Section";
import Katalogss from "../../components/Katalog";

function Home() {
  return (
    <Homes>
      <div className="controller">
        <HomePage>
          <div className="Home_div">
            <p>Скидка 15%</p>
            <p>на все подвесные</p>
            <p>светильники</p>
            <p className="Home_color">до 5 февраля</p>
          </div>
          <div className="Home_img">
            <img src={hero_lamp} alt="Hero lamp" />
          </div>
        </HomePage>

        <Katalogss />

        <NornLight />

        <Lamp />

        <Section />

        <CatalogUy1 />

        <Text />
      </div>
    </Homes>
  );
}

export default Home;
