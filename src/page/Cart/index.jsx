import React from "react";
import productImg from "../../assets/svg/lamp-product.svg";
import {
  Container,
  Title,
  SectionBlock,
  CartHeader,
  CartItem,
  ItemImage,
  ItemName,
  ItemPrice,
  ItemDesc,
  QuantityWrapper,
  QuantityControl,
  DeleteButton,
  SectionTitle,
  FormRow,
  Input,
  Textarea,
  PaymentDetails,
  TotalPrice,
  SubmitButton,
  AgreementText,
} from "./Cart.styled";

function Cart() {
  return (
    <Container>
      <Title>
        Корзина <span>2</span>
      </Title>

      {/* 1. TOVARLAR RO'YXATI */}
      <SectionBlock>
        <CartHeader>
          <div>Фото</div>
          <div>Товары</div>
          <div>Описание</div>
          <div>Артикул</div>
          <div>Количество</div>
          <div></div>
        </CartHeader>

        <CartItem>
          <ItemImage src={productImg} alt="lamp" />
          <div className="item-info">
            <ItemName>Встраиваемый светильник Novotech</ItemName>
            <ItemPrice>6 399 ₽</ItemPrice>
          </div>
          <ItemDesc>
            Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4;
            XS;
          </ItemDesc>
          <div className="article-num">RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</div>
          <QuantityWrapper>
            <QuantityControl>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </QuantityControl>
            <DeleteButton>🗑</DeleteButton>
          </QuantityWrapper>
        </CartItem>
      </SectionBlock>

      {/* 2. MALUMOTLARNI TO'LDIRISH */}
      <SectionBlock>
        <SectionTitle>Оформление</SectionTitle>
        <FormRow>
          <Input placeholder="ФИО" />
          <Input placeholder="Телефон" />
          <Input placeholder="Электронная Почта" />
        </FormRow>

        <SectionTitle>Доставка</SectionTitle>
        <FormRow isFull>
          <Input placeholder="Адрес доставки" />
        </FormRow>
        <Textarea placeholder="Комментарий" />
      </SectionBlock>

      {/* 3. TO'LOV BLOKI */}
      <SectionBlock>
        <SectionTitle>Оплата</SectionTitle>
        <PaymentDetails>
          <div className="pay-row">
            <span>Товары</span>
            <span>12 300 ₽</span>
          </div>
          <div className="pay-row">
            <span>Доставка</span>
            <span>580 ₽</span>
          </div>
        </PaymentDetails>
        <TotalPrice>12 800 ₽</TotalPrice>
        <SubmitButton>Купить</SubmitButton>
        <AgreementText>
          Я согласен на обработку моих персональных данных
        </AgreementText>
      </SectionBlock>
    </Container>
  );
}

export default Cart;
