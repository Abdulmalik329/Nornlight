import React from "react";
import { ReturnBreadcrumbs, ReturnContent, ReturnWrapper } from "./Return.styled.js";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation.js";

function Return() {
  const { goToHome } = useAppNavigation();

  return (
    <>
      <ReturnWrapper>
        <div className="container">
          <ReturnBreadcrumbs>
            <div className="Katalog_strelka">
              <p onClick={goToHome}>Главная</p>
              <Strelka_ongga />
              <p style={{ color: "#000" }}>Возврат</p>
            </div>
          </ReturnBreadcrumbs>

          <ReturnContent>
            <div className="title-section">
              <h1>Возврат</h1>
            </div>

            <div className="text-wrapper">
              <div>
                <h2>Обмен и возврат по желанию покупателя</h2>
                <p>
                  Если товар по каким-то причинам не подошел вам, вы имеете
                  право вернуть его или обменять на другой в течение 7 дней* с
                  момента purchases при соблюдении следующих условий:
                </p>
                <ul>
                  <li>
                    Товар имеет первоначальный вид, имеется товарная кондиция;
                  </li>
                  <li>
                    Товар имеет полную комплектацию, включая упаковочные
                    материалы;
                  </li>
                  <li>
                    Товар не имеет следов подключался и не имеет признаков
                    монтажа;
                  </li>
                  <li>
                    Упаковка товара не имеет повреждений, присутствует
                    первоначальный товарный вид;
                  </li>
                  <li>
                    Есть документ, подтверждающий покупку в нашем
                    интернет-магазине.
                  </li>
                  <li>
                    Для возврата товара необходимо привезти его к нам в офис.
                  </li>
                  <li>
                    Товар из других городов можно прислать нам транспортной
                    компанией.
                  </li>
                  <li>*В течение 14 дней для отдельных брендов.</li>
                </ul>
              </div>

              <div>
                <h2>Обмен и возврат по ошибке продавца</h2>
                <p>Причины обмена или возврата по ошибке продавца:</p>
                <ul>
                  <li>Неполная комплектация товара</li>
                  <li>Брак или дефект товара</li>
                  <li>Необходимо сделать фото дефекта и отправить на почту.</li>
                  <li>Мы заменим бракованный товар бесплатно.</li>
                </ul>
              </div>

              <div>
                <h2>Возврат денежных средств</h2>
                <p>
                  Возврат денежных средств осуществляется путем перевода на
                  банковские реквизиты покупателя.
                </p>
              </div>
            </div>
          </ReturnContent>
        </div>
      </ReturnWrapper>
    </>
  );
}

export default Return;
