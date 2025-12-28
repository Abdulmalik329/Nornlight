import React, { useState } from "react";
import sidelar from "../../assets/svg/Sidelar.svg";
import yurakcha from "../../assets/svg/yurakcha.svg";
import { Lampa } from "../icons";
import { Product_Lampa } from "./Lamp2.styled";

function Lamp2() {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => count > 1 && setCount((prev) => prev - 1);

  return (
    <Product_Lampa>
      {/* Chap tomondagi rasm */}
      <div className="product_lamp">
        <Lampa /> {/* Agar bu SVG bo'lsa styled-da responsive qilingan */}
      </div>

      {/* O'ng tomondagi ma'lumotlar */}
      <div className="product_details">
        <h1>Встраиваемый светильник Novotech</h1>

        <div className="product_text">
          <div>
            <p className="p1">Scott</p>
            <p className="p2">Артикул : 7655-188</p>
            <p className="p3">В наличии</p>
          </div>
          <div className="social_icons">
            <img src={sidelar} alt="Socials" />
          </div>
        </div>

        <div className="product_skidka">
          <span className="current-price">435 000 ₽</span>
          <span className="old-price">522 000 ₽</span>
        </div>

        <div className="product_text_p">
          <p>
            Профессиональный гоночный хардтейл для кросс-кантри уровня
            Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных
            хардтейлов для кросс-кантри.
          </p>
        </div>

        <div className="product_actions">
          <div className="quantity_wrapper">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>

          <button className="add_to_cart_btn">В корзину</button>

          <button className="heart_icon">
            <img src={yurakcha} alt="Sevimli" />
          </button>
        </div>
      </div>
    </Product_Lampa>
  );
}

export default Lamp2;
