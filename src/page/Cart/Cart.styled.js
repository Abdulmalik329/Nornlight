import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #fff;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #454545;
  margin-bottom: 40px;
  span {
    background: #f03e3e;
    color: #fff;
    font-size: 16px;
    padding: 2px 10px;
    border-radius: 50px;
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SectionBlock = styled.div`
  background: #f2f2f2;
  padding: 30px;
  border-radius: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 20px;
  }
`;

export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 100px 1.5fr 2fr 1fr 180px 40px;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  color: #888;
  font-size: 14px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1.5fr 2fr 1fr 180px 40px;
  gap: 20px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border-radius: 20px;
    border: none;
    align-items: flex-start;
  }
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

export const ItemName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #454545;
`;

export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-top: 5px;
`;

export const ItemDesc = styled.div`
  font-size: 13px;
  color: #888;
  @media (max-width: 1024px) {
    margin: 10px 0;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 1025px) {
    justify-content: flex-end;
    gap: 20px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: #f2f2f2;
  padding: 8px 15px;
  border-radius: 10px;
  button {
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #454545;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isFull ? "1fr" : "repeat(3, 1fr)"};
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 25px;
  border: 1px solid #ddd;
  border-radius: 50px; /* image_ef4983 dagi pill shakli */
  outline: none;
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 20px 25px;
  border: 1px solid #ddd;
  border-radius: 20px;
  min-height: 120px;
  outline: none;
  resize: none;
`;

export const PaymentDetails = styled.div`
  margin-bottom: 20px;
  .pay-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 16px;
    span:first-child {
      color: #888;
    }
  }
`;

export const TotalPrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 20px;
  background: #454545;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  @media (min-width: 992px) {
    width: 300px;
  }
`;

export const AgreementText = styled.p`
  font-size: 12px;
  color: #999;
  margin-top: 15px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
