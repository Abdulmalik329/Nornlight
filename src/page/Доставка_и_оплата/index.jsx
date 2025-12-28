import React from "react";
import { Strelka_ongga } from "@/components/icons";
import { useAppNavigation } from "@/hooks/useAppNavigation.js";
import {
  DeliveryWrapper,
  MainLayout,
  MapContainer,
} from "./DeliveryAndPayment.styled.js";
import { Kompany } from "../AboutCompany/AboutCompany.styled.js";

function DeliveryAndPayment() {
  const { goToHome } = useAppNavigation();

  return (
    <>
      <DeliveryWrapper className="container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <p onClick={goToHome}>Главная</p>
          <Strelka_ongga />
          <p className="active">Доставка и оплата</p>
        </div>
        {/* Main Content Area */}
        <MainLayout>
          <div className="title-side">
            <h1>Доставка и оплата</h1>
          </div>

          <div className="content-side">
            <div className="info-block">
              <h2>Доставка</h2>
              <p>
                Мы осуществляем доставку со склада по Москве и Московской
                области собственной курьерской службой. Транспортными компаниями
                нашу продукцию мы доставляем по всей территории РФ.
                <br />
                <span>Сроки доставки: 4—6 недель</span>
              </p>
            </div>

            <div className="info-block">
              <h2>Курьерская доставка</h2>
              <p>
                БЕСПЛАТНО доставим в приделах МКАД любой заказ{" "}
                <span>от 5 000₽.</span>
                Заказы свыше <span>30 000 ₽</span> имеют бесплатную доставку до
                15 км от МКАД.
              </p>
            </div>

            <div className="info-block">
              <h2>Самовывоз</h2>
              <p>
                Любой заказ можно забрать самостоятельно по адресу: г.Москва,
                Дмитровское шоссе д.100s2
              </p>
            </div>
          </div>
        </MainLayout>
      </DeliveryWrapper>

      {/* Map Section */}
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.1!2d37.545!3d55.885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDUzJzA2LjAiTiAzN8KwMzInNDIuMCJF!5e0!3m2!1sen!2s!4v1630000000000!5m2!1sen!2s"
          title="Office Location Map"
          loading="lazy"
        />
      </MapContainer>
    </>
  );
}

export default DeliveryAndPayment;
