  import React from "react";
  import { CatalogUy, BlogHeaderWrapper } from "./CatalogHome.styled";
  import { Strelka, Strelka1 } from "../icons";

  import uy1 from "../../assets/image_3/uy1.png";
  import uy2 from "../../assets/image_3/uy2.png";
  import uy3 from "../../assets/image_3/uy3.png";
  import { WhySection } from "../NornLight/NornLight.styled";
  import { useAppNavigation } from "../../hooks/useAppNavigation";

  function CatalogUy1({ showHeader = true }) {
    const { goToBlog } = useAppNavigation();

    // Ma'lumotlarni massivga olsak kod qisqaradi va boshqarish oson bo'ladi
    const blogPosts = [
      {
        id: 1,
        img: uy1,
        title: "Как правильно освещать дом снаружи?",
        date: "01.01.2024",
      },
      {
        id: 2,
        img: uy2,
        title: "Как правильно освещать дом снаружи?",
        date: "01.01.2024",
      },
      {
        id: 3,
        img: uy3,
        title: "Как правильно освещать дом снаружи?",
        date: "01.01.2024",
      },
    ];

    return (
      <div>
        {showHeader && (
          <BlogHeaderWrapper>
            <WhySection style={{ marginTop: "100px" }}>
              <div className="header">
                <h2>Блог</h2>
                <button onClick={goToBlog}>
                  Перейти в блог <Strelka />
                </button>
              </div>
            </WhySection>
          </BlogHeaderWrapper>
        )}

        <CatalogUy>
          {blogPosts.map((post) => (
            <div className="wrapper" key={post.id}>
              <img src={post.img} alt={post.title} />
              <div className="Catalog">
                <p>{post.title}</p>
                <Strelka1 />
              </div>
              <span>{post.date}</span>
            </div>
          ))}
        </CatalogUy>
      </div>
    );
  }

  export default CatalogUy1;
