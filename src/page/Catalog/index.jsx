import React from "react";
import { Link } from "react-router-dom";
import {
  CatalogCard,
  CatalogGrid,
  Katalog,
  BlogWrapper,
  BlogCard,
} from "./Catalog.styled";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import Section2 from "../../components/Section2";
import Text from "../../components/Text/Text";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

// Rasmlar
import a1 from "../../assets/chandeliers/a1.svg";
import uy1 from "../../assets/image_3/uy1.png";
import uy2 from "../../assets/image_3/uy2.png";
import uy3 from "../../assets/image_3/uy3.png";

function Catalog() {
  const { goToHome } = useAppNavigation();

  const categories = [
    { title: "Люстры", img: a1 },
    { title: "Светильники", img: a1 },
    { title: "Бра", img: a1 },
    { title: "Торшеры", img: a1 },
    { title: "Настольные лампы", img: a1 },
    { title: "Споты", img: a1 },
    { title: "Трековые светильники", img: a1 },
    { title: "Уличные светильники", img: a1 },
    { title: "Технические светильники", img: a1 },
    { title: "Светодиодные ленты", img: a1 },
    { title: "Комплектующие", img: a1 },
  ];

  const blogPosts = [
    {
      id: 1,
      img: uy1,
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
    {
      id: 2,
      img: uy2,
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
    {
      id: 3,
      img: uy3,
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
  ];

  return (
    <div className="container">
      <Katalog>
        {/* Yuqori kategoriya menu */}
        <div className="Katalog_p">
          {[
            "Светильники",
            "Люстры",
            "Лампы",
            "Настольные лампы",
            "Ночники",
            "Подстветка",
            "Уличное освещение",
          ].map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>

        {/* Breadcrumbs */}
        <div className="Katalog_strelka">
          <p onClick={goToHome}>Главная</p>
          <Strelka_ongga />
          <p style={{ color: "#111" }}>Каталог</p>
        </div>

        <div className="Katalog_h1">
          <h1>Каталог</h1>
        </div>

        {/* Catalog Grid (6-ustunli) */}
        <CatalogGrid>
          {categories.map((cat, index) => (
            <CatalogCard key={index}>
              <div className="card_info">
                <p className="title">{cat.title}</p>
                <span>От 540₽ →</span>
              </div>
              <img src={cat.img} alt={cat.title} />
            </CatalogCard>
          ))}
        </CatalogGrid>

        <Section2 />

        {/* Blog Slayder qismi */}
        <BlogWrapper>
          <div className="blog_header">
            <h2 className="blog_title">Блог</h2>
            <Link to="/blog">
              <button className="blog_btn_border">
                Перейти в блог <FiArrowRight />
              </button>
            </Link>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 3, pagination: false },
            }}
            className="mySwiper"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <BlogCard>
                  <div className="img_box">
                    <img className="card_img" src={post.img} alt="house" />
                    <div className="circle_icon">
                      <FiArrowUpRight size={22} />
                    </div>
                  </div>
                  <div className="card_body">
                    <h3>{post.title}</h3>
                    <FiArrowUpRight size={24} />
                  </div>
                  <span>{post.date}</span>
                </BlogCard>
              </SwiperSlide>
            ))}
          </Swiper>

          <Link to="/blog">
            <button className="blog_btn_full">
              Перейти в блог <FiArrowRight />
            </button>
          </Link>
        </BlogWrapper>

        <Text />
      </Katalog>
    </div>
  );
}

export default Catalog;
