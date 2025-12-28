import React from "react";
import { ProductDetailContainer } from "./Продукты.styled";
import { Strelka_ongga } from "../../components"; // Oldindan mavjud ikonka
import Lamp2 from "../../components/Lamp2"; // Sizning yuqoridagi asosiy mahsulot blokigiz

const ProductDetail = () => {
  // Jadval ma'lumotlari (rasmga asosan)
  const productSpecs = [
    { label: "Цвет", value: "Желтый" },
    { label: "Год", value: "2016" },
    { label: "Диаметр колеса", value: "27.5" },
    { label: "Материal рамы", value: "Карбон" },
    { label: "Размер", value: "L" },
    { label: "Страна", value: "Швейцария" },
    { label: "Производитель", value: "Scott" },
    {
      label: "Покрышки",
      value:
        "Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound",
    },
    {
      label: "Рама",
      value:
        "Scale Carbon / HMX-technology / Технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL",
    },
  ];

  return (
    <ProductDetailContainer>
      <nav className="breadcrumb">
        <span>Главная</span>
        <Strelka_ongga />
        <span>Каталог</span>
        <Strelka_ongga />
        <span style={{ color: "#333" }}>Встраиваемый светильник Novotech</span>
      </nav>

      {/* 2. Mahsulotning asosiy qismi (Rasm va sotib olish) */}
      <Lamp2 />

      {/* 3. Texnik xususiyatlar (Jadval) */}
      <section className="specs_section">
        <h2>Характеристика</h2>
        <table>
          <tbody>
            {productSpecs.map((spec, index) => (
              <tr key={index}>
                <td>{spec.label}</td>
                <td>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
