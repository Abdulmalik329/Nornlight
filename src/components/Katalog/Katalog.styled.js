import styled from "styled-components";

export const KatalogWrapper = styled.div`
  margin-top: 80px;
  padding: 0 15px;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const KatalogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  .desktop_btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 30px;
    border: 1px solid #333;
    border-radius: 100px;
    background: none;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    } /* Mobilda yashirish */
  }
`;

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SwiperWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;

    .swiper-pagination {
      position: relative;
      margin-top: 25px; /* Nuqtalar uchun joy */
    }
    .swiper-pagination-bullet {
      background: #ccc;
    }
    .swiper-pagination-bullet-active {
      background: #333;
    }
  }
`;

export const CatalogCard = styled.div`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 20px;
  height: 220px;
  position: relative;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    width: 80%; /* Matn rasm ostida qolmasligi uchun */
  }

  img {
    position: absolute;
    right: 10px;
    bottom: 40px;
    width: 80px; /* Mobilda mos o'lcham */
    height: auto;
  }

  span {
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-size: 12px;
    color: #888;
  }
`;

export const MobileButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    border: 1px solid #333;
    border-radius: 100px;
    background: none;
    font-size: 16px;
    cursor: pointer; /* */
  }
`;
