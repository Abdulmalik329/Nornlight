import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import hero_lamp from "../../assets/svg/hero-lamp.svg";
import { HomePage, Homes } from "./Home.styled";

import Katalogss from "../../components/Katalog";
import NornLight from "../../components/NornLight";
import Lamp from "../../components/Lamp";
import Section from "../../components/Section";
import CatalogUy1 from "../../components/CatalogHome";

function Home() {
  const slides = [1, 2, 3]; // Slaydlar soni

  return (
    <Homes>
      <div className="controller">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          style={{ marginBottom: "60px" }}
        >
          {slides.map((_, index) => (
            <SwiperSlide key={index}>
              <HomePage>
                <div className="Home_div">
                  <p>Скидка 15%</p>
                  <p>на все подвесные</p>
                  <p>светильники</p>
                  <div className="Home_color">до 5 февраля</div>
                </div>
                <div className="Home_img">
                  <img src={hero_lamp} alt="Hero lamp" />
                </div>
              </HomePage>
            </SwiperSlide>
          ))}
        </Swiper>

        <Katalogss />
        <NornLight />
        <Lamp />
        <Section />
        <CatalogUy1 />
        {/* <Text /> */}
      </div>
    </Homes>
  );
}

export default Home;
