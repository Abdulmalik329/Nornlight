import styled from "styled-components";

export const LampSection = styled.section`
  padding: 0 15px;
  margin-top: 60px;

  .view-all-container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Mobilda 2 ta ustun */
    gap: 10px;
  }
`;

export const ProductCard = styled.div`
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  transition: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  .product-yurakcha {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 2;
  }

  .product-img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  p {
    font-size: 16px; /* Mobilda matn o'lchami */
    font-weight: 500;
    margin: 0 0 12px 0;
    line-height: 1.3;
    color: #333;
  }

  .category {
    font-size: 12px;
    color: #ccc;
    text-decoration: line-through;
    margin-bottom: 4px;
    display: block;
  }

  .product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    .price {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }

    .cart-btn {
      width: 50px;
      height: 30px;
      background: #333;
      border-radius: 30px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;

      &:hover {
        background: #000;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 10px;

    p {
      font-size: 14px;
    }

    .product-bottom .price {
      font-size: 16px;
    }
  }
`;

export const AllProductsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%; /* Mobilda to'liq kenglik */
  max-width: 300px;
  padding: 15px 0;
  background: none;
  border: 1px solid #333;
  border-radius: 100px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #333;
    color: #fff;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
