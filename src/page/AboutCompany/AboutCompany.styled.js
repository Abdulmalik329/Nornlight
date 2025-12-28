import styled from "styled-components";

export const Kompany = styled.div`
  padding: 20px 0;
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #888;
  }
  .container {
    max-width: 1300px; /* Chetlar ko'proq ochilishi uchun bu qiymatni kichraytirish mumkin */
    margin: 0 auto;    /* O'rtaga tekislash */
    padding: 0 20px;   
    display: flex;     /* Navbar ichidagi elementlarni joylash uchun */
    flex-direction: column;
  }
  p:hover {
    color: #333;
    cursor: pointer;
  }
  
`;

export const Task = styled.div`
  display: flex;
  gap: 102px;
  margin-bottom: 60px;

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;
    padding-bottom: 36px;
    grid-area: title; /* Mobil uchun */
  }

  .stats_wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    grid-area: stats; /* Mobil uchun */
  }

  .task_1 {
    width: 530px;
    height: 253px;
    background: #f6f6f6;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-weight: 700;
      font-size: 64px;
      margin: 0;
    }

    .tavar {
      font-weight: 500;
      font-size: 18px;
      color: #454545;
    }
  }

  .text_p {
    grid-area: text; /* Mobil uchun */
    p {
      padding-bottom: 25px;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.6;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-areas:
      "title"
      "stats"
      "text";
    gap: 20px;
    margin-bottom: 40px;

    h1 {
      font-size: 30px;
      padding-bottom: 10px;
    }

    .task_1 {
      width: 100%;
      height: 140px;
      padding: 20px;
      p {
        font-size: 40px;
      }
      .tavar {
        font-size: 14px;
      }
    }
  }
`;

export const BlogWrapper = styled.div`
  margin: 60px 0;
  .blog_title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .mySwiper {
    padding-bottom: 40px;
  }
  .swiper-pagination-bullet-active {
    background: #333;
  }

  .blog_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 15px;
    border: 1px solid #333;
    border-radius: 30px;
    background: none;
    font-weight: 500;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export const BlogCard = styled.div`
  .card_img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 15px;
  }
  .card_info {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 18px;
      margin: 0;
    }
  }
  span {
    color: #888;
    font-size: 14px;
  }
`;
