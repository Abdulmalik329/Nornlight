import styled from "styled-components";

export const BlogContainer = styled.div`
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 12px;

    & p:hover {
      color: #bbb8b8ff;
      cursor: pointer;
    }
  }

  & h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;
    margin-top: 30px;
    margin-bottom: 60px;
  }
`;
