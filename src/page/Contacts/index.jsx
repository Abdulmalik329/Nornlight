import React from "react";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import {
  Container,
  Breadcrumb,
  TopSection,
  Title,
  PhoneBlock,
  PhoneNumber,
  WorkSchedule,
  MapSection,
  MapWrapper,
  InfoBar,
  InfoItem,
  InfoTitle,
  InfoText,
  InfoButton,
} from "./Contacts.styled";

function Contacts() {
  const { goToHome } = useAppNavigation();

  return (
    <Container>
      <TopSection>
        <div>
          <Breadcrumb>
            <p onClick={goToHome}>Главная</p>
            <Strelka_ongga />
            <p>Контакты</p>
          </Breadcrumb>
          <Title>Контакты</Title>
        </div>

        <PhoneBlock>
          <PhoneNumber>8 (800) 890-46-56</PhoneNumber>
          <WorkSchedule>
            <p>Пн-Пт: 10:00 до 19:00</p>
            <p>Сб-Вс: заказ через корзину</p>
            <p>Звонок по России бесплатный</p>
          </WorkSchedule>
        </PhoneBlock>
      </TopSection>

      {/* Карта */}
      <MapSection>
        <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.061470960959!2d69.20108341061842!3d41.28576660217431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta'lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1766910495210!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </MapWrapper>

        {/* Информационная панель под картой */}
        <InfoBar>
          <InfoItem>
            <InfoTitle>Адрес магазина</InfoTitle>
            <InfoText>г Москва, Дмитровское шоссе д 100с2</InfoText>
          </InfoItem>

          <InfoItem>
            <InfoTitle>Почта</InfoTitle>
            <InfoText link>NORNLIGHT@mail.ru</InfoText>
          </InfoItem>

          <InfoItem>
            <InfoTitle>Телефон</InfoTitle>
            <InfoText>8 (800) 890-46-56</InfoText>
          </InfoItem>

          <InfoButton>Оставить заявку</InfoButton>
        </InfoBar>
      </MapSection>
    </Container>
  );
}

export default Contacts;
