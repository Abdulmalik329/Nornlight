import React from "react";
import { BlogContainer } from "./Blog.styled";
import CatalogUy1 from "../../components/CatalogHome";

function Blog() {
  return (
    <div className="container">
      <BlogContainer>
        <div className="Katalog_strelka">
          <p>Главная</p>
          <span>{">"}</span>
          <p>Блог</p>
        </div>
        <h1>Блог</h1>

        <CatalogUy1 showHeader={false} />
        <div style={{ marginTop: "40px" }}>
          <CatalogUy1 showHeader={false} />
        </div>
      </BlogContainer>
    </div>
  );
}

export default Blog
