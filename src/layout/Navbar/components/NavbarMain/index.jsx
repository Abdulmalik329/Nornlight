import React from "react";
import {
  CartIcon,
  CatalogIcon,
  HeartIcon,
  NetworkIcon,
  SearchIcon,
} from "../../../../components";

import {
  NavMainWrapper,
  SearchWrapper,
  NavigationItems,
} from "./NavbarMain.styled";
import { Link } from "react-router-dom";

function NavbarMain(props) {
  return (
    <NavMainWrapper>
      <Link to="/">
        <img src="/logo.svg" alt="Logo" />
      </Link>

      <SearchWrapper>
        <Link to="/catalog" className="catalog-button">
          <CatalogIcon />
          <span>Каталог</span>
        </Link>
        <div className="input-wrapper">
          <input type="text" placeholder="Поиск по товарам" />
          <span className="search-icon-wrap">
            <SearchIcon />
          </span>
        </div>
      </SearchWrapper>

      <NavigationItems>
        <Link to="/favourites" className="item">
          <HeartIcon />
          <span>Избранное</span>
        </Link>

        <Link to="/comparison" className="item">
          <NetworkIcon />
          <span>Сравнение</span>
        </Link>

        <Link to="/cart" className="item">
          <CartIcon />
          <span>Корзина</span>
        </Link>
      </NavigationItems>
    </NavMainWrapper>
  );
}

export default NavbarMain;
