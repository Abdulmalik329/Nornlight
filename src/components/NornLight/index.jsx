import React from "react";
import {
  WhyCard,
  WhyGrid,
  WhySection,
  MobileButtonWrapper,
} from "./NornLight.styled";
import { Strelka } from "../icons";

import icon1 from "../../assets/image_2/icon1.svg";
import icon2 from "../../assets/image_2/icon2.svg";
import icon3 from "../../assets/image_2/icon3.svg";
import icon4 from "../../assets/image_2/icon4.svg";
import { useAppNavigation } from "../../hooks/useAppNavigation";

function NornLight() {
  const { goToAbout } = useAppNavigation();

  const data = [
    {
      id: 1,
      icon: icon1,
      title: "Только проверенные бренды",
      desc: "Бренды, проверенные временем и качеством",
    },
    {
      id: 2,
      icon: icon2,
      title: "Самые низкие цены",
      desc: "Ниже некуда, мы гарантируем лучшую цену",
    },
    {
      id: 3,
      icon: icon3,
      title: "Быстрая доставка",
      desc: "Доставляем по всей РФ за 1-10 дней",
    },
    {
      id: 4,
      icon: icon4,
      title: "Большой ассортимент",
      desc: "Более 1000 товаров на любой вкус",
    },
  ];

  return (
    <WhySection>
      <div className="header">
        <h2>Почему NORNLIGHT?</h2>
        <button onClick={goToAbout}>
          О компании <Strelka />
        </button>
      </div>

      <WhyGrid>
        {data.map((item) => (
          <WhyCard key={item.id}>
            <div className="icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </WhyCard>
        ))}
      </WhyGrid>

      {/* Mobilda grid tagida ko'rinadigan tugma */}
      <MobileButtonWrapper>
        <button onClick={goToAbout}>
          О компании <Strelka />
        </button>
      </MobileButtonWrapper>
    </WhySection>
    
  );
}

export default NornLight;
