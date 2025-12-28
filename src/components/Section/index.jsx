import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { BrandCard, BrandsSection } from "./Section.styled";
import { Left, Right } from "../icons";

import brand1 from "../../components/icons/Brands/brand1.svg";
import brand2 from "../../components/icons/Brands/brand2.svg";
import brand3 from "../../components/icons/Brands/brand3.svg";

function Section() {
  const brands = [brand1, brand2, brand3, brand1, brand2, brand3];

  return (
    <BrandsSection>
      <div className="brands-header">
        <h2>Только проверенные бренды</h2>
        <div className="arrows">
          <button className="prev-btn">
            <Left />
          </button>
          <button className="next-btn">
            <Right />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1} // Bittada faqat bitta brend korinadi
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        className="mySwiper"
      >
        {brands.map((b, i) => (
          <SwiperSlide key={i}>
            <BrandCard>
              <img src={b} alt={`brand-${i}`} />
            </BrandCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </BrandsSection>
  );
}

export default Section;
