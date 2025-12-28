import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const TopSection = styled.div`
  max-width: 1300px; /* Standart konteyner kengligi */
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  p {
    font-size: 14px;
    color: #888;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 64px; /* Dizayndagi katta sarlavha */
  color: #454545;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const PhoneBlock = styled.div`
  text-align: right;
  @media (max-width: 1024px) {
    text-align: left;
  }
`;

export const PhoneNumber = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #454545;
`;

export const WorkSchedule = styled.div`
  margin-top: 10px;
  p {
    font-size: 14px;
    color: #454545;
    margin: 2px 0;
  }
`;

export const MapSection = styled.div`
  width: 100%;
  position: relative;
  margin-top: 20px;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 550px; /* Xarita balandligi */

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const InfoBar = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1100px;
  background: white;
  padding: 30px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  gap: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    position: static; /* Mobilda xaritadan tashqariga chiqadi */
    transform: none;
    width: 100%;
    grid-template-columns: 1fr;
    border-radius: 0;
    box-shadow: none;
    padding: 20px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.span`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
`;

export const InfoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #454545;
`;

export const InfoButton = styled.button`
  background: #454545;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px; /* Dumaloq tugma */
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #000;
  }
`;
