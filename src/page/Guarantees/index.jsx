import React from "react";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import {
  GuaranteesBreadcrumbs,
  GuaranteesContent,
} from "./Guarantees.styled.js";

function Guarantees() {
  const { goToHome } = useAppNavigation();

  return (
    <div className="container">
      <GuaranteesBreadcrumbs>
        <div className="Katalog_strelka">
          <p onClick={goToHome}>Главная</p>
          <Strelka_ongga />
          <p style={{ color: "#000" }}>Гарантии</p>
        </div>
      </GuaranteesBreadcrumbs>

      <GuaranteesContent>
        <div className="title-section">
          <h1>Гарантии</h1>
        </div>

        <div className="text-content">
          <h2>Обмен и возврат по желанию покупателя</h2>
          <p>
            Все товары в магазине «NornLight» имеют гарантию. Она заявляется
            производителем и имеет определенный срок действия на различные
            группы товаров.
          </p>
          <p>
            Если ваше изделие вышло из строя в течение гарантийного срока вы
            можете обратиться к нам и получить бесплатный ремонт. Для этого
            нужно:
          </p>

          <ul>
            <li>
              Предоставить чек, накладную или сообщить почту или номер телефона,
              указанные при оформлении заказа.
            </li>
            <li>
              Привезти товар к нам на склад или отправить его транспортной
              компанией.
            </li>
            <li>
              После товар отправляется на экспертизу и ремонт. Если ремонт
              невозможен, мы обменяем изделие на аналогичное либо вернем деньги
              за покупку.
            </li>
          </ul>

          <p>
            Обращаем внимание, что «А-Свет» не является сервисным центром, а
            выполняет роль посредника между клиентом и поставщиком.
          </p>
          <p>
            Поэтому сроки проведения ремонта могут отличаться для товаров
            различных брендов.
          </p>
        </div>
      </GuaranteesContent>
    </div>
  );
}

export default Guarantees;
