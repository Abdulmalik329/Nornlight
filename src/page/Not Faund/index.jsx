import React from "react";
import { Link } from "react-router-dom";
import { NotFoundWrapper } from "./NotFound.styled";

function NotFound() {
  return (
      <NotFoundWrapper>
        {/* Dizayndagi 404 raqami */}
        <h1 className="error-code">404</h1>

        {/* Xatolik xabari */}
        <p className="error-text">Похоже, ничего не нашлось :(</p>

        {/* Bosh sahifaga qaytish tugmasi */}
        <Link to="/" className="home-btn">
          На главную
        </Link>
      </NotFoundWrapper>
  );
}

export default NotFound;
