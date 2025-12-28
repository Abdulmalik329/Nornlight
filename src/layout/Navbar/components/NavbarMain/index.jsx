import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavMainWrapper,
  NavTopBar,
  MainHeaderRow,
  Logo,
  MobileMenuIcon,
  MobileMenu,
  MobileOverlay,
  SearchWrapper,
  HeaderActions,
  CatalogButton,
} from "./NavbarMain.styled";

import {
  CartIcon,
  HeartIcon,
  NetworkIcon, // "Сравнение" uchun
  SearchIcon,
  CatalogIcon,
} from "../../../../components";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavMainWrapper>
        <div className="container">
          <NavTopBar>
            <div className="nav-links">
              <Link to="/about-company">О компании</Link>
              <Link to="/delivery-and-payment">Доставка и оплата</Link>
              <Link to="/return">Возврат</Link>
              <Link to="/guarantees">Гарантии</Link>
              <Link to="/contacts">Контакты</Link>
              <Link to="/blog">Блог</Link>
            </div>
            <div className="contact-info">
              <a href="tel:88008904656" className="phone">
                8 (800) 890-46-56
              </a>
              <button className="callback">Заказать звонок</button>
            </div>
          </NavTopBar>

          <MainHeaderRow>
            <MobileMenuIcon onClick={() => setMenuOpen(true)}>
              <span />
              <span />
              <span />
            </MobileMenuIcon>

            <Logo>
              <Link to="/">
                <img src="/logo.svg" alt="NORNLIGHT" />
              </Link>
            </Logo>

            <CatalogButton to="/catalog">
              <CatalogIcon />
              <span>Каталог</span>
            </CatalogButton>

            <SearchWrapper>
              <div className="input-wrapper">
                <input type="text" placeholder="Поиск по товарам" />
                <span className="search-icon-wrap">
                  <SearchIcon />
                </span>
              </div>
            </SearchWrapper>

            <HeaderActions>
              <Link to="/favourites" className="action-item">
                <HeartIcon />
                <span>Избранное</span>
              </Link>
              <Link to="/cart" className="action-item">
                <div className="cart-wrapper">
                  <CartIcon />
                </div>
                <span>Корзина</span>
              </Link>
            </HeaderActions>
          </MainHeaderRow>
        </div>
      </NavMainWrapper>

      <MobileOverlay open={menuOpen} onClick={() => setMenuOpen(false)} />

      <MobileMenu open={menuOpen}>
        <div className="menu-header">
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </div>
        </div>

        <div className="menu-links">
          <Link to="/about-company" onClick={() => setMenuOpen(false)}>
            О компании
          </Link>
          <Link to="/delivery-and-payment" onClick={() => setMenuOpen(false)}>
            Доставка и оплата
          </Link>
          <Link to="/return" onClick={() => setMenuOpen(false)}>
            Возврат
          </Link>
          <Link to="/guarantees" onClick={() => setMenuOpen(false)}>
            Гарантии
          </Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>
            Контакты
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Блог
          </Link>
        </div>

        <div className="menu-footer">
          <Link
            to="/catalog"
            className="mob-catalog-btn"
            onClick={() => setMenuOpen(false)}
          >
            ☰ Каталог
          </Link>
          <a href="tel:88008904656" className="mob-phone">
            8 (800) 890-46-56
          </a>
          <button className="mob-callback">Заказать звонок</button>
        </div>
      </MobileMenu>
    </>
  );
};

export default NavbarMain;
