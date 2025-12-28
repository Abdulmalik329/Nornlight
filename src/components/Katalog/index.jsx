import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  CatalogCard,
  CatalogGrid,
  KatalogHeader,
  KatalogWrapper,
  SwiperWrapper,
  MobileButton,
} from "./Katalog.styled";
import { Strelka } from "../icons";
import { useAppNavigation } from "../../hooks/useAppNavigation";

import a1 from "../../assets/chandeliers/a1.svg";
import a2 from "../../assets/chandeliers/a2.svg";
import a3 from "../../assets/chandeliers/a3.svg";
import a4 from "../../assets/chandeliers/a4.svg";
import a5 from "../../assets/chandeliers/a5.svg";
import a6 from "../../assets/chandeliers/a6.svg";

function Katalogss() {
  const { goToKatalog } = useAppNavigation();

  const categories = [
    { title: "Люстры", img: a1 },
    { title: "Светильники", img: a2 },
    { title: "Бра", img: a3 },
    { title: "Торшеры", img: a4 },
    { title: "Настольные лампы", img: a5 },
    { title: "Споты", img: a6 },
  ];

  return (
    <KatalogWrapper>
      <KatalogHeader>
        <h1>Каталог</h1>
        <button className="desktop_btn" onClick={goToKatalog}>
          Весь каталог <Strelka />
        </button>
      </KatalogHeader>

      {/* Desktop uchun 3 talik Grid */}
      <CatalogGrid>
        {categories.map((item, index) => (
          <CatalogCard key={index}>
            <p className="title">{item.title}</p>
            <img src={item.img} alt={item.title} />
            <span>От 540₽ →</span>
          </CatalogCard>
        ))}
      </CatalogGrid>

      {/* Mobile uchun 2 talik Slayder */}
      <SwiperWrapper>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={2} // Bittada 2 ta rasm ko'rinishi uchun
          pagination={{ clickable: true }}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <CatalogCard>
                <p className="title">{item.title}</p>
                <img src={item.img} alt={item.title} />
                <span>От 540₽ →</span>
              </CatalogCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>

      <MobileButton onClick={goToKatalog}>
        Весь каталог <Strelka />
      </MobileButton>
    </KatalogWrapper>
  );
}

export default Katalogss;
