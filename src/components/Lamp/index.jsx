import React from 'react';
import { ProductCard, ProductsGrid } from './Lamp.styled';
import { Karzinka } from '../icons';
import product1 from "../../assets/svg/lamp-product.svg";


import yurakcha from "../../assets/svg/yurakcha.svg";
import { Link } from 'react-router-dom';

function Lamp(props) {

    const products = [
        {
          id: 1,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product1,
        },
        {
          id: 2,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product1,
        },
        {
          id: 3,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product1,
        },
        {
          id: 4,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product1,
        },
        {
          id: 5,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product1,
        },
        {
          id: 6,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product1,
        },
        {
          id: 7,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product1,
        },
        {
          id: 8,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product1,
        },
      ];

    return (
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <div className="product-yurakcha">
              <img src={yurakcha} alt="" />
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

            <span className="category">7 000₽</span>

            <div className="product-bottom">
              <span className="price">{product.price}</span>
              <button className="cart-btn">
                <Karzinka />
              </button>
            </div>
          </ProductCard>
        ))}
      </ProductsGrid>
    );
}

export default Lamp;