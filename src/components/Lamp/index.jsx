import React from "react";
import {
  ProductCard,
  ProductsGrid,
  LampSection,
  AllProductsButton,
} from "./Lamp.styled";
import { Karzinka, Strelka } from "../icons";
import product1 from "../../assets/svg/lamp-product.svg";
import yurakcha from "../../assets/svg/yurakcha.svg";
import { Link } from "react-router-dom";
import { useAppNavigation } from "../../hooks/useAppNavigation";

function Lamp() {
  const { goToPopular } = useAppNavigation();

  const products = Array(8)
    .fill({
      id: 1,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      oldPrice: "7 000₽",
      image: product1,
    })
    .map((p, i) => ({ ...p, id: i + 1 }));

  return (
    <LampSection>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <div className="product-yurakcha">
              <img src={yurakcha} alt="favorite" />
            </div>

            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>
              <p>{product.name}</p>
            </Link>

            <span className="category">{product.oldPrice}</span>

            <div className="product-bottom">
              <span className="price">{product.price}</span>
              <button className="cart-btn">
                <Karzinka />
              </button>
            </div>
          </ProductCard>
        ))}
      </ProductsGrid>

      {/* Figma: "Все товары" tugmasi */}
      <div className="view-all-container">
        <AllProductsButton onClick={goToPopular}>
          Все товары <Strelka />
        </AllProductsButton>
      </div>
    </LampSection>
  );
}

export default Lamp;
