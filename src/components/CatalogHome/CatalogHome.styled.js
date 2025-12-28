import styled from "styled-components";

export const CatalogUy = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 20px;

  /* --- MOBILE VERSION --- */
  @media (max-width: 768px) {
    flex-direction: column; /* Rasmdagi kabi bitta ustun */
    gap: 30px;
  }

  .wrapper {
    flex: 1;
    border-bottom: 2px solid #f6f6f6;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
      object-fit: cover;
    }

    /* Mobilda rasm va matn orasidagi masofani saqlash */
    @media (max-width: 768px) {
      padding-bottom: 20px;
    }
  }

  .Catalog {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 29px 0 10px 0;
    gap: 10px;

    p {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      line-height: 1.2;
    }

    svg {
      flex-shrink: 0;
      margin-top: 5px;
    }

    @media (max-width: 768px) {
      p {
        font-size: 18px; /* Mobilda biroz kichikroq */
      }
    }
  }

  span {
    color: #888;
    font-size: 14px;
  }
`;

// NornLight.styled.js dagi WhySection ni mobilda boshqarish uchun qo'shimcha:
export const BlogHeaderWrapper = styled.div`
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      button {
        width: 100%; /* Tugma to'liq kenglikda */
        justify-content: center;
      }
    }
  }
`;
