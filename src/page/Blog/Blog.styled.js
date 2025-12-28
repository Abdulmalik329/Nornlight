import styled from "styled-components";

export const BlogContainer = styled.div`
  padding: 20px 0;
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 64px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  .blog-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
