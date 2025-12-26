import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Strelka_ongga } from "../../components";

import { BlogContainer } from "./Blog.styled";
import CatalogUy1 from "../../components/CatalogHome";

function Blog(props) {
  const { goToHome } = useAppNavigation();

  return (
    <BlogContainer>
      <div className="Katalog_strelka">
        <p onClick={goToHome}>Главная</p>
        <Strelka_ongga />
        <p>Блог</p>
      </div>

      <h1>Блог</h1>

      <CatalogUy1 showHeader={false} />
      <br />
      <CatalogUy1 showHeader={false} />
    </BlogContainer>
  );
}

export default Blog;
