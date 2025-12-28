import product1 from "../../assets/svg/lamp-product.svg";
import {
  Container,
  Title,
  Content,
  CartSection,
  SectionTitle,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemCode,
  ItemPrice,
  QuantityControl,
  DeleteButton,
  OrderSection,
  FormGroup,
  Label,
  Input,
  Textarea,
  TotalPrice,
  SubmitButton
} from "./Cart.styled";

function Cart() {
  return (
    <Container>
      <Title>Корзина</Title>

      <Content>
        <CartSection>
          <SectionTitle>Товары в корзине</SectionTitle>
          <CartItem>
            <ItemImage src={product1} alt="Товар" />
            <ItemInfo>
              <ItemName>Встраиваемый светильник Novotech</ItemName>
              <ItemCode>Код: OML-102301-01</ItemCode>
              <ItemPrice>6 399 ₽</ItemPrice>
            </ItemInfo>
            <QuantityControl>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </QuantityControl>
            <DeleteButton>🗑️</DeleteButton>
          </CartItem>{" "}
          <CartItem>
            <ItemImage src={product1} alt="Товар" />
            <ItemInfo>
              <ItemName>Встраиваемый светильник Novotech</ItemName>
              <ItemCode>Код: OML-102301-01</ItemCode>
              <ItemPrice>6 399 ₽</ItemPrice>
            </ItemInfo>
            <QuantityControl>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </QuantityControl>
            <DeleteButton>🗑️</DeleteButton>
          </CartItem>{" "}
          <CartItem>
            <ItemImage src={product1} alt="Товар" />
            <ItemInfo>
              <ItemName>Встраиваемый светильник Novotech</ItemName>
              <ItemCode>Код: OML-102301-01</ItemCode>
              <ItemPrice>6 399 ₽</ItemPrice>
            </ItemInfo>
            <QuantityControl>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </QuantityControl>
            <DeleteButton>🗑️</DeleteButton>
          </CartItem>{" "}
          <CartItem>
            <ItemImage src={product1} alt="Товар" />
            <ItemInfo>
              <ItemName>Встраиваемый светильник Novotech</ItemName>
              <ItemCode>Код: OML-102301-01</ItemCode>
              <ItemPrice>6 399 ₽</ItemPrice>
            </ItemInfo>
            <QuantityControl>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </QuantityControl>
            <DeleteButton>🗑️</DeleteButton>
          </CartItem>
          {/* Еще товары... */}
        </CartSection>

        <OrderSection>
          <SectionTitle>Оформление</SectionTitle>

          <FormGroup>
            <Label>ФИО</Label>
            <Input type="text" placeholder="Введите ФИО" />
          </FormGroup>

          <FormGroup>
            <Label>Телефон</Label>
            <Input type="tel" placeholder="Введите телефон" />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Введите email" />
          </FormGroup>

          <SectionTitle>Доставка</SectionTitle>

          <FormGroup>
            <Label>Город доставки</Label>
            <Input type="text" placeholder="Введите город" />
          </FormGroup>

          <FormGroup>
            <Label>Комментарий</Label>
            <Textarea placeholder="Комментарий к заказу" rows="4" />
          </FormGroup>

          <SectionTitle>Оплата</SectionTitle>

          <TotalPrice>12 600 ₽</TotalPrice>

          <SubmitButton>Купить</SubmitButton>
        </OrderSection>
      </Content>
    </Container>
  );
}


export default Cart;
