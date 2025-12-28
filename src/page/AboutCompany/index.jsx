import React from "react";
import { Link } from "react-router-dom"; // Link qo'shildi
import { Kompany, Task, BlogWrapper, BlogCard } from "./AboutCompany.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Strelka_ongga } from "../../components";
import Section2 from "../../components/Section2";

// Rasmlarni import qilish (assets yo'lingizga qarang)
import uy1 from "../../assets/image_3/uy1.png";
import uy2 from "../../assets/image_3/uy2.png";
import uy3 from "../../assets/image_3/uy3.png";
import uy4 from "../../assets/image_3/uy1.png";


// Swiper kutubxonasi
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Iconlar
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

function AboutCompany() {
  const { goToHome } = useAppNavigation();

  // Rasmlar massivi
  const blogImages = [uy1, uy2, uy3, uy4];

  return (
    <div className="container">
      <Kompany>
        <div className="Katalog_strelka">
          <p onClick={goToHome}>Главная</p>
          <Strelka_ongga />
          <p>О компании</p>
        </div>
      </Kompany>

      <Task>
        <div className="stats_wrapper">
          <h1>О компании</h1>

          <div className="task_1">
            <p>170+</p>
            <p className="tavar">Товаров</p>
          </div>
          <div className="task_1">
            <p>1000+</p>
            <p className="tavar">Довольных покупателей</p>
          </div>
          <div className="task_1">
            <p>170+</p>
            <p className="tavar">Товаров</p>
          </div>
        </div>

        <div className="text_p">
          <p>
            Интернет-магазиn NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.
          </p>
          <p>
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
          <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.
          </p>
          <p>
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </div>
      </Task>

      <Section2 />

      <BlogWrapper>
        <h2 className="blog_title">Блог</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {blogImages.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <BlogCard>
                <img className="card_img" src={imgSrc} alt={`house-${index}`} />
                <div className="card_info">
                  <h3>Как правильно освещать дом снаружи?</h3>
                  <FiArrowUpRight size={24} />
                </div>
                <span>01.01.2024</span>
              </BlogCard>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button linkka o'rildi */}
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <button className="blog_btn">
            Перейти в блог <FiArrowRight />
          </button>
        </Link>
      </BlogWrapper>

      <div style={{ marginBottom: "60px" }}>
        <h2
          style={{ fontSize: "24px", marginBottom: "20px", fontWeight: "700" }}
        >
          Блог
        </h2>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
          для освещения вашего дома или офиса. У нас вы найдете разнообразные
          модели светильников, от современных и стильных до классических и
          элегантных. Мы предлагаем качественные и надежные светильники от
          лучших производителей, которые подарят вам комфорт и уют.
        </p>
        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
          Покупая светильники в нашем интернет-магазине, вы получаете отличное
          соотношение цены и качества. Мы осуществляем доставку по всей России,
          чтобы каждый клиент мог насладиться прекрасным светом и удобством
          покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис
          тепла и света с NORNLIGHT!
        </p>
      </div>
    </div>
  );
}

export default AboutCompany;
