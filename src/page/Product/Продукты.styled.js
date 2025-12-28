import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
  font-family: "Inter", sans-serif;

  /* Breadcrumbs */
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 30px;
    font-size: 14px;
    color: #828282;

    span {
      cursor: pointer;
      &:hover {
        color: #333;
      }
    }
  }

  /* Xarakteristika bo'limi */
  .specs_section {
    margin-top: 60px;

    h2 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 25px;
      color: #333;
    }

    table {
      width: 100%;
      border-collapse: collapse;

      tr {
        transition: background 0.2s;

        /* Zebra chiziqlari (rasmdagidek) */
        &:nth-child(odd) {
          background-color: #f9f9f9;
        }

        td {
          padding: 16px;
          font-size: 14px;
          color: #333;
          line-height: 1.4;

          /* O'ng tarafdagi qiymatlar */
          &:last-child {
            text-align: right;
            color: #828282;
            width: 60%; /* Mobilda matn sig'ishi uchun */
          }
        }
      }
    }
  }

  /* Mobil moslashuv */
  @media (max-width: 768px) {
    .specs_section {
      margin-top: 40px;

      table td {
        padding: 12px;
        font-size: 13px;
      }
    }
  }
`;
