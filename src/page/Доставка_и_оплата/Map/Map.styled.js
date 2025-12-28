import styled from "styled-components";

export const Kart = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  iframe {
    display: block;
    width: 100%;
    height: 672px;

    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;
