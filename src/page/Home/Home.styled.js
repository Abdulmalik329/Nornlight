import styled from "styled-components";

export const Homes = styled.div`
  width: 100%;
  padding-bottom: 80px;

  .controller {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Swiper pagination nuqtalari stili */
  .swiper-pagination-bullet {
    background: #ccc;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #888;
  }
`;

export const HomePage = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  border-radius: 40px; /* Slayder yumaloqroq */
  padding: 60px 100px;
  margin-bottom: 30px; /* Pagination uchun joy */
  height: 500px;

  .Home_div {
    flex: 1;
    p {
      font-size: 64px;
      font-weight: 700;
      line-height: 1.1;
      margin: 0;
      color: #333;
    }

    .Home_color {
      display: inline-flex;
      background-color: #333;
      color: white;
      border-radius: 100px;
      padding: 10px 30px;
      font-size: 18px;
      margin-top: 30px;
      font-weight: 400;
    }
  }

  .Home_img {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    img {
      max-width: 400px;
      height: auto;
    }
  }

  /* --- MOBILE --- */
  @media (max-width: 1024px) {
    padding: 40px 25px;
    height: auto;
    min-height: 450px;
    flex-direction: column-reverse;
    text-align: left; /* Dizaynda matn chapda */
    align-items: flex-start;

    .Home_div {
      p {
        font-size: 28px;
      }
      .Home_color {
        font-size: 14px;
        margin-top: 15px;
      }
    }
    .Home_img {
      width: 100%;
      justify-content: center;
      margin-bottom: 20px;
      img {
        max-width: 200px;
      }
    }
  }
`;
