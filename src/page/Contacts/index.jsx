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
            <p style={{ color: "#000" }}>Контакты</p>
          </Breadcrumb>
          <Title>Контакты</Title>
        </div>

        <PhoneBlock>
          <PhoneNumber>8 (800) 890-46-56</PhoneNumber>
          <WorkSchedule>
            <p>Пн-Пт: 10:00 до 19:00</p>
            <p>Сб-Вс: заказ через корзину</p>
          </WorkSchedule>
        </PhoneBlock>
      </TopSection>

      <MapSection>
        <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.447472065126!2d37.534882!3d55.872418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDUyJzIwLjciTiAzN8KwMzInMDYuNiJF!5e0!3m2!1sru!2suz!4v1700000000000"
            title="Office Location"
            loading="lazy"
          />
        </MapWrapper>

        <InfoBar>
          <InfoItem>
            <InfoTitle>Адрес магазина</InfoTitle>
            <InfoText>г. Москва, Дмитровское шоссе д.100с2</InfoText>
          </InfoItem>

          <InfoItem>
            <InfoTitle>Почта</InfoTitle>
            <InfoText>NORNLIGHT@mail.ru</InfoText>
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
