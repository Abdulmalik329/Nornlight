import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: 600;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CartSection = styled.div`
  background: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ItemCode = styled.div`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background: #f0f0f0;
    }
  }

  span {
    min-width: 30px;
    text-align: center;
    font-weight: 600;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export const OrderSection = styled.div`
  background: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
  height: fit-content;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const TotalPrice = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin: 20px 0;
  text-align: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1a252f;
    transform: translateY(-2px);
  }
`;
