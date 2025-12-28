import styled from "styled-components";
import { bgColors } from "../../theme";

export const FooterWrapper = styled.footer`
  background-color: ${bgColors.lightBlue};
  padding: 79px;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

/* ===== MAIN WRAPPER ===== */
export const FooterWrapper_1 = styled.div`
  display: flex;
  justify-content: center;
  gap: 146px;

  & p {
    margin-top: 30px;
  }

  @media (max-width: 1024px) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* 🔥 ustma-ust */
    gap: 40px;
    align-items: flex-start;
  }
`;

/* ===== LOGO BLOCK ===== */
export const FooterLogo = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  .a1 {
    margin-top: 50px;
    margin-bottom: 35px;
    font-size: 24px;
  }

  .a2 {
    margin-top: 35px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    .a1 {
      font-size: 20px;
      margin-top: 30px;
    }

    img {
      max-width: 100%;
    }
  }
`;

/* ===== SOCIAL ===== */
export const FooterVK = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

/* ===== PRODUCTS COLUMNS ===== */
export const Footer_div2 = styled.div`
  display: flex;
  gap: 71px;

  @media (max-width: 768px) {
    flex-direction: column; /* 🔥 2 ustun → 1 ustun */
    gap: 20px;
  }
`;
