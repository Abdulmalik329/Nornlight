import React from "react";
import { Kompany, Task } from "./AboutCompany.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Strelka_ongga } from "../../components";
import Section2 from "../../components/Section2";
import CatalogUy1 from "../../components/CatalogHome";

function AboutCompany(props) {
  const { goToHome } = useAppNavigation();

  return (
    <div>
      <Kompany>
        <div className="Katalog_strelka">
          <p onClick={goToHome}>Главная</p>
          <Strelka_ongga />
          <p>О компании</p>
        </div>
      </Kompany>

      <Task>
        <div>
          <h1>О компании</h1>
          <div className="task_1">
            <p>170+ </p>
            <p className="tavar">Товаров</p>
          </div>
          <div className="task_1">
            <p>1000+ </p>
            <p className="tavar">Довольных покупателей</p>
          </div>
          <div className="task_1">
            <p>170+ </p>
            <p className="tavar">Товаров</p>
          </div>
        </div>
        <div className="text_p">
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

      <CatalogUy1 />
    </div>
  );
}

export default AboutCompany;
