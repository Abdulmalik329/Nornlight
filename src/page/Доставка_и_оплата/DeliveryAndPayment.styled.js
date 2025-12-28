import styled from "styled-components";

export const DeliveryWrapper = styled.div`
  padding-bottom: 100px;

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 48px 0;
    font-size: 14px;
    color: #888;

    p {
      cursor: pointer;
    }
    .active {
      color: #000;
    }
    .container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 20px;
    }

    @media (max-width: 768px) {
      margin: 20px 0;
      gap: 8px;
    }
  }
`;



export const MainLayout = styled.section`
  display: flex;
  gap: 100px;

  /* Desktopda sarlavha chapda, kontent o'ngda */
  .title-side {
    flex: 0 0 320px;
    h1 {
      font-weight: 700;
      font-size: 64px;
      line-height: 1.1;
      color: #454545;
    }
  }

  .content-side {
    flex: 1;
    max-width: 640px;

    .info-block {
      margin-bottom: 60px;

      h2 {
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 20px;
        color: #000;
      }

      p {
        font-size: 20px;
        line-height: 1.4;
        color: #000;

        span {
          color: #2f4da3;
          font-weight: 600;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;

    .title-side {
      width: 100%;
      h1 {
        font-size: 32px;
      }
    }

    .content-side {
      width: 100%;
      .info-block {
        margin-bottom: 30px;
        h2 {
          font-size: 20px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  margin-top: 40px;

  iframe {
    width: 100%;
    height: 600px;
    border: 0;
    display: block;

    @media (max-width: 768px) {
      height: 300px; /* Mobilda xarita kichrayadi */
    }
  }
`;
