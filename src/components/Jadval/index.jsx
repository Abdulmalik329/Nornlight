import React from 'react';
import { ProductCharacteristics } from './Jadval.styled';

function Jadval(props) {
    return (
      <div>
        <ProductCharacteristics>
          <h2>Характеристика</h2>

          <div className="char_row">
            <span className="char_label">Цвет</span>
            <span className="char_value">Желтый</span>
          </div>

          <div className="char_row">
            <span className="char_label">Год</span>
            <span className="char_value">2016</span>
          </div>

          <div className="char_row">
            <span className="char_label">Диаметр колеса</span>
            <span className="char_value">27.5</span>
          </div>

          <div className="char_row">
            <span className="char_label">Материал рамы</span>
            <span className="char_value">Карбон</span>
          </div>

          <div className="char_row">
            <span className="char_label">Размер</span>
            <span className="char_value">L</span>
          </div>

          <div className="char_row">
            <span className="char_label">Страна</span>
            <span className="char_value">Швейцария</span>
          </div>

          <div className="char_row">
            <span className="char_label">Производитель</span>
            <span className="char_value">Scott</span>
          </div>

          <div className="char_row">
            <span className="char_label">Покрышки</span>
            <span className="char_value">
              Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
              PaceStar compound
            </span>
          </div>

          <div className="char_row">
            <span className="char_label">Рама</span>
            <span className="char_value">
              Scale Carbon / HMX-технология / технология IMP / Коническая
              рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
            </span>
          </div>

          <div className="char_row">
            <span className="char_label">Подседельный Штырь</span>
            <span className="char_value">
              Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
              Carbon 2B SDS / 34.9mm
            </span>
          </div>

          <div className="char_row">
            <span className="char_label">Седло</span>
            <span className="char_value">
              Ritchey WCS Streem V3 Titanium rails
            </span>
          </div>

          <div className="char_row">
            <span className="char_label">Вилка</span>
            <span className="char_value">
              Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
              коническая рулевая труба / Удалённая блокировка, регулировка
              отскока / ход 100mm
            </span>
          </div>
        </ProductCharacteristics>
      </div>
    );
}

export default Jadval;