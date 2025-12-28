import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh; /* Sahifani markazda ushlab turish uchun */
  text-align: center;
  padding: 20px;

  .error-code {
    font-weight: 700;
    font-size: 200px; /* Desktop uchun katta o'lcham */
    line-height: 1;
    color: #f3f3f3; /* Dizayndagi och kulrang */
    margin-bottom: 20px;
    letter-spacing: -5px;
  }

  .error-text {
    font-size: 24px;
    font-weight: 500;
    color: #333;
    margin-bottom: 40px;
  }

  .home-btn {
    background-color: #454545; /* Dizayndagi to'q kulrang tugma */
    color: #fff;
    border: none;
    padding: 16px 50px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
    text-decoration: none;

    &:hover {
      background-color: #333;
    }
  }

  /* Mobile versiya uchun moslashuv */
  @media (max-width: 768px) {
    min-height: 60vh;

    .error-code {
      font-size: 120px; /* Mobilda kichraytiriladi */
      margin-top: 50px;
    }

    .error-text {
      font-size: 18px;
      margin-bottom: 30px;
    }

    .home-btn {
      width: 100%; /* Mobilda to'liq kenglikda */
      max-width: 300px;
      padding: 14px 0;
    }
  }
`;
