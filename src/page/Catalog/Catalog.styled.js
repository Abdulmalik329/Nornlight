import styled from "styled-components";

export const Katalog = styled.div`
  padding-bottom: 80px;

  .Katalog_p {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 14px;
    background-color: #f3f2f2;
    height: 54px;
    border-radius: 100px;
    margin-top: 20px;
    align-items: center;
    @media (max-width: 900px) {
      display: none;
    }
  }

  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 30px 0;
    p {
      font-size: 13px;
      color: #888;
      cursor: pointer;
    }
  }

  .Katalog_h1 h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CatalogCard = styled.div`
  grid-column: span 2;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 25px;
  height: 220px;
  position: relative;
  cursor: pointer;

  /* Oxirgi 2 ta element kengayadi */
  &:nth-last-child(2),
  &:nth-last-child(1) {
    grid-column: span 3;
  }

  .card_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .title {
      font-size: 18px;
      font-weight: 600;
      max-width: 160px;
    }
    span {
      font-size: 14px;
      color: #111;
      font-weight: 500;
    }
  }

  img {
    position: absolute;
    right: 15px;
    bottom: 15px;
    max-width: 150px;
    max-height: 130px;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    grid-column: span 1 !important;
    height: 170px;
    img {
      max-width: 100px;
    }
  }
`;



export const BlogWrapper = styled.div`
  margin: 80px 0;

  .blog_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    .blog_title {
      font-size: 32px;
      font-weight: 700;
    }
  }

  /* Desktop uchun tugma */
  .blog_btn_border {
    padding: 12px 25px;
    border: 1px solid #111;
    border-radius: 50px;
    background: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .mySwiper {
    padding-bottom: 50px;
    .swiper-pagination-bullet {
      background: #ccc;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #333;
    }
  }

  /* Mobil uchun tugma */
  .blog_btn_full {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      width: 100%;
      padding: 16px;
      border: 1px solid #111;
      border-radius: 50px;
      background: #fff;
      justify-content: center;
      gap: 10px;
      font-weight: 600;
      margin-top: 10px;
    }
  }
`;

export const BlogCard = styled.div`
  .img_box {
    position: relative;
    .card_img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      border-radius: 15px;
    }
    .circle_icon {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }

  .card_body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 0 10px;
    h3 {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      line-height: 1.2;
    }
  }

  span {
    color: #888;
    font-size: 14px;
    display: block;
    padding-bottom: 20px;
    border-bottom: 2px solid #f6f6f6;
  }
`;
