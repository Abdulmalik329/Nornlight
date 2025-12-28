import styled from "styled-components";

export const GuaranteesBreadcrumbs = styled.div`
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 30px;

    & p {
      font-size: 14px;
      color: #888;
      &:hover {
        color: #454545;
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      gap: 8px;
      margin-bottom: 20px;
    }
  }
`;

export const GuaranteesContent = styled.div`
  display: flex;
  gap: 100px; /* Masofani biroz kamaytirdik, 341px juda katta */
  padding-bottom: 104px;

  /* Mobilda elementlar bir-birining tagiga tushishi kerak */
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
    padding-bottom: 50px;
  }

  & h1 {
    width: 100%;
    max-width: 319px;
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;
    color: #454545;

    @media (max-width: 768px) {
      font-size: 32px; /* Mobilda sarlavha kichrayadi */
    }
  }

  .text-content {
    max-width: 800px;
  }

  & h2 {
    padding-top: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    color: #000;
    padding-bottom: 28px;

    @media (max-width: 768px) {
      font-size: 20px;
      padding-bottom: 15px;
    }
  }

  & p,
  & ul {
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #000;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 16px; /* Mobilda matn o'qishga qulay bo'lishi uchun */
    }
  }

  & ul {
    padding-left: 20px;
    li {
      margin-bottom: 10px;
    }
  }
`;
