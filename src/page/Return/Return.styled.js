import styled from "styled-components";

export const ReturnWrapper = styled.div`
  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
  }


`;


export const ReturnBreadcrumbs = styled.div`
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;

    & p {
      font-size: 14px;
      color: #888;
      &:hover {
        color: #bbb8b8ff;
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      gap: 8px;
    }
  }
`;

export const ReturnContent = styled.div`
  display: flex;
  gap: 100px;
  padding-bottom: 80px;

  /* Mobilda sarlavha va matn ustun bo'lishi uchun */
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
    padding-bottom: 40px;
  }

  & h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;
    color: #454545;
    min-width: 250px;

    @media (max-width: 768px) {
      font-size: 32px; /* Mobilda sarlavha kichrayadi */
    }
  }

  .text-wrapper {
    max-width: 800px;
  }

  & h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    color: #000;
    margin-top: 20px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  & p {
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #000;
    padding-top: 15px;
    padding-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  & ul {
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #0b5d9c;
    padding-left: 25px;
    padding-bottom: 30px;

    li {
      margin-bottom: 10px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding-left: 20px;
    }
  }
`;
