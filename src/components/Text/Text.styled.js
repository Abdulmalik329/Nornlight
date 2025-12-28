import styled from "styled-components";

export const Производство = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  padding: 80px 0;
  max-width: 1300px;
  margin: 0 auto;

  /* Sarlavha qismi */
  div:first-child {
    flex: 1;
    h1 {
      font-size: 64px;
      font-weight: 700;
      line-height: 1.1;
      color: #000;
      margin: 0;
    }
  }

  /* Matn qismi */
  div:last-child {
    flex: 1;
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #454545;
      margin-bottom: 25px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  /* --- MOBILE (Figma image_efab95.png) --- */
  @media (max-width: 1024px) {
    flex-direction: column; /* Matnlar ostma-ost tushadi */
    padding: 40px 0;
    gap: 20px;

    div:first-child {
      h1 {
        font-size: 32px; /* Mobilda sarlavha o'lchami */
        line-height: 1.2;
      }
    }

    div:last-child {
      p {
        font-size: 14px; /* Mobilda matn biroz kichikroq */
        line-height: 1.5;
        margin-bottom: 15px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px 0;

    div:first-child h1 {
      font-size: 28px; /* Kichik telefonlar uchun */
    }
  }
`;
