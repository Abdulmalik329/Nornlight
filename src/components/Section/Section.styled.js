import styled from "styled-components";

export const BrandsSection = styled.section`
  margin-top: 80px;
  padding-bottom: 60px;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;

  .brands-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding: 0 20px;

    h2 {
      font-size: 40px; /* Sarlavha kattaroq */
      font-weight: 700;
    }

    .arrows {
      display: flex;
      gap: 15px;
      button {
        background: none;
        border: 1px solid #f2f2f2;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
  }

  .swiper-pagination {
    bottom: 0 !important;
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: #d9d9d9;
      opacity: 1;
      &-active {
        background: #333; /* Faol nuqta dizayndagidek */
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    .brands-header {
      h2 {
        font-size: 28px;
      }
      .arrows {
        display: none;
      } /* Mobilda strelka shart emas */
    }
  }
`;

export const BrandCard = styled.div`
  border: 1px solid #f2f2f2;
  height: 250px; /* Kattaroq balandlik */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 0 20px; /* Slaydlar orasida masofa */
  border-radius: 15px;

  img {
    max-width: 200px; /* Brend logosi kattaroq */
    height: auto;
    filter: grayscale(100%);
    opacity: 0.6;
    transition: 0.5s;
  }

  &:hover img {
    filter: grayscale(0);
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 180px;
    margin: 0 10px;
    img {
      max-width: 140px;
    }
  }
`;
