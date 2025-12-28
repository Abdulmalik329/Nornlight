import styled from "styled-components";

export const Popular = styled.div`
  margin-bottom: 1141px;
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & p:hover {
    color: #bbb8b8ff;
    cursor: pointer;
  }
  & h1 {
    font-weight: 700;
    font-size: 40px;
    padding-top: 55px;
    padding-bottom: 89px;
  }
`;

export const  Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;
