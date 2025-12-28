import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavMainWrapper = styled.nav`
  background: #fff;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const NavTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  color: #7e7e7e;

  .nav-links {
    display: flex;
    gap: 25px;
    a {
      text-decoration: none;
      color: #7e7e7e;
      &:hover {
        color: #000;
      }
    }
  }

  .contact-info {
    display: flex;
    gap: 20px;
    align-items: center;
    .phone {
      font-weight: 700;
      color: #000;
      text-decoration: none;
    }
    .callback {
      background: none;
      border: none;
      color: #7e7e7e;
      cursor: pointer;
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MainHeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0 20px 0;
  gap: 20px;
  flex-wrap: wrap; /* Mobilda elementlar sig'ishi uchun */

  @media (max-width: 992px) {
    justify-content: space-between;
    padding: 15px 0;
  }
`;

export const Logo = styled.div`
  order: 1;
  img {
    height: 30px;
  }
`;

export const CatalogButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #454545;
  color: #fff;
  padding: 12px 28px;
  border-radius: 50px;
  text-decoration: none;
  order: 2;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
  order: 3; /* Mobilda pastga tushadi */
  min-width: 300px;

  .input-wrapper {
    position: relative;
    width: 100%;
    input {
      width: 100%;
      padding: 12px 20px;
      padding-right: 45px;
      border: 1px solid #e5e5e5;
      border-radius: 50px;
      outline: none;
      background: #fdfdfd;
    }
    .search-icon-wrap {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    order: 4; /* Eng pastga qidiruv tushadi */
    margin-top: 10px;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: flex-end; /* Ikonka va matnlarni pastki chiziq bo'yicha tekislaydi */
  gap: 25px;
  order: 3;

  .action-item {
    display: flex;
    flex-direction: column;
    align-items: center; /* Ikonka va matnni markazga oladi */
    text-decoration: none;
    color: #000;
    font-size: 12px;
    gap: 6px; /* Ikonka va yozuv oraliq masofasi */
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    span {
      line-height: 1; /* Matn ikonka bilan chambarchas turishi uchun */
    }
  }

  .cart-wrapper,
  .heart-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px; /* Ikonkalar uchun bir xil balandlik (muhim!) */
    position: relative;
  }

  /* Qizil badge olib tashlandi, lekin kerak bo'lsa display: flex qiling */
  .badge {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 15px;
    .action-item span {
      display: none; /* Mobilda faqat ikonka qoladi */
    }
  }
`;export const MobileMenuIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  order: 1;
  span {
    width: 24px;
    height: 2px;
    background: #000;
  }
  @media (max-width: 992px) {
    display: flex;
  }
`;



export const MobileOverlay = styled.div`
  display: ${(p) => (p.open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${(p) => (p.open ? "0" : "-100%")}; // Chapdan chiqadi
  width: 280px;
  height: 100vh;
  background: #fff;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);

  .menu-header {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #f0f0f0;

    .close-btn {
      font-size: 24px;
      cursor: pointer;
      color: #333;
    }
  }

  .menu-links {
    padding: 20px;
    display: flex;
    flex-direction: column;

    a {
      padding: 15px 0;
      text-decoration: none;
      color: #333;
      font-size: 16px;
      border-bottom: 1px solid #f5f5f5;

      &:hover {
        color: #000;
      }
    }
  }

  .menu-footer {
    margin-top: auto;
    padding: 20px;
    background: #f9f9f9;

    .mob-catalog-btn {
      display: block;
      background: #454545;
      color: #fff;
      text-align: center;
      padding: 12px;
      border-radius: 8px;
      text-decoration: none;
      margin-bottom: 15px;
    }

    .mob-phone {
      display: block;
      text-align: center;
      font-weight: 700;
      color: #000;
      text-decoration: none;
      margin-bottom: 10px;
      font-size: 18px;
    }

    .mob-callback {
      width: 100%;
      padding: 10px;
      background: none;
      border: 1px solid #ccc;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
