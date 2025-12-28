import styled from "styled-components";

export const WhySection = styled.section`
  margin-top: 80px;
  padding: 0 15px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h2 {
      font-size: 32px;
      font-weight: 700;
    }

    button {
      display: flex; /* Desktopda ko'rinadi */
      align-items: center;
      gap: 10px;
      padding: 12px 30px;
      border: 1px solid #333;
      border-radius: 100px;
      background: none;
      cursor: pointer;
      font-size: 16px;
    }
  }

  /* --- MOBILE VERSION --- */
  @media (max-width: 768px) {
    margin-top: 40px;

    .header {
      margin-bottom: 30px;
      h2 {
        font-size: 24px; /* Mobilda sarlavha kichikroq */
      }
      button {
        display: none; /* Sarlavha yonidagi tugma yashiriladi */
      }
    }
  }
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Mobilda 2x2 grid */
    gap: 10px;
  }
`;

export const WhyCard = styled.div`
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 0; /* Dizayndagidek o'tkir burchaklar */
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 250px;

  .icon {
    background: #333;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    img {
      width: 30px;
      height: 30px;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 12px;
    color: #888;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
    min-height: 200px;

    .icon {
      width: 48px;
      height: 48px;
      margin-bottom: 20px;
      img {
        width: 24px;
      }
    }
  }
`;

export const MobileButtonWrapper = styled.div`
  display: none; /* Desktopda yashirin */

  @media (max-width: 768px) {
    display: flex;
    margin-top: 20px;
    width: 100%;

    button {
      width: 100%; /* Mobilda to'liq kenglik */
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 15px;
      border: 1px solid #333;
      border-radius: 100px;
      background: none;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;
