import styled from "styled-components";

export const Product_Lampa = styled.div`
  display: flex;
  flex-direction: column; /* Mobilda ustma-ust */
  margin-top: 24px;
  gap: 20px;
  padding: 0 15px;

  @media (min-width: 992px) {
    flex-direction: row; /* Desktopda yonma-yon */
    margin-top: 48px;
    gap: 56px;
    padding: 0;
  }

  /* Rasm qismi */
  .product_lamp {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;

    svg,
    img {
      max-width: 100%;
      height: auto;
    }
  }

  /* Ma'lumotlar qismi */
  .product_details {
    flex: 1;
  }

  & h1 {
    font-weight: 500;
    color: #454545;
    font-size: 24px; /* Mobilda kichikroq */
    line-height: 120%;
    margin-bottom: 15px;

    @media (min-width: 992px) {
      font-size: 40px;
      line-height: 110%;
    }
  }

  .product_text {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 25px;

    .p1,
    .p2 {
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: #b3b3b3;
    }

    .p2 {
      padding: 4px 0;
    }

    .p3 {
      font-size: 14px;
      color: #4d932c;
      font-weight: 500;
    }

    .social_icons {
      display: flex;
      gap: 10px;
      img {
        width: 80px;
      } /* Rasmga qarab sozlang */
    }
  }

  .product_skidka {
    display: flex;
    align-items: baseline;
    gap: 15px;
    margin-bottom: 20px;

    .current-price {
      font-size: 28px;
      font-weight: 600;
      color: #101010;

      @media (min-width: 992px) {
        font-size: 40px;
      }
    }

    .old-price {
      color: #999;
      text-decoration: line-through;
      font-size: 16px;
      @media (min-width: 992px) {
        font-size: 18px;
      }
    }
  }

  .product_text_p {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #4c4c4c;
    margin-bottom: 30px;
    max-width: 500px;
  }

  .product_actions {
    display: flex;
    flex-wrap: wrap; /* Mobilda sig'masa pastga tushadi */
    align-items: center;
    gap: 12px;

    @media (min-width: 992px) {
      gap: 20px;
    }
  }

  .quantity_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    width: 110px;
    height: 48px;
    padding: 0 10px;

    @media (min-width: 992px) {
      width: 130px;
      height: 56px;
      padding: 0 15px;
    }

    button {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
  }

  .add_to_cart_btn {
    flex: 1; /* Mobilda cho'ziladi */
    background: #333333;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    height: 48px;
    font-weight: 500;
    cursor: pointer;

    @media (min-width: 992px) {
      flex: none;
      padding: 0 40px;
      height: 56px;
    }
  }

  .heart_icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: #f8f8f8;
    border-radius: 8px;
    cursor: pointer;

    @media (min-width: 992px) {
      width: 56px;
      height: 56px;
    }
  }
`;
  