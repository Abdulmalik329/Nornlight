import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`;

export const TopSection = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 40px 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 25px;

  p {
    font-size: 14px;
    color: #666;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: #bbb8b8ff;
    }

    &:last-child {
      color: #2c3e50;
      cursor: default;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  color: #2c3e50;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
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
  color: #2c3e50;
  margin-bottom: 12px;
`;

export const WorkSchedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    font-size: 14px;
    color: #666;
    margin: 0;

    &:last-child {
      color: #999;
      margin-top: 6px;
    }
  }
`;

export const MapSection = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 60px 80px;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0 40px 60px;
  }

  @media (max-width: 768px) {
    padding: 0 20px 40px;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const InfoBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  gap: 40px;
  align-items: center;
  background: white;
  padding: 35px 50px;
  border-radius: 12px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
  margin-top: -40px;
  position: relative;
  z-index: 10;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    padding: 25px 30px;
    gap: 20px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
`;

export const InfoText = styled.div`
  font-size: 15px;
  color: ${(props) => (props.link ? "#3498db" : "#666")};
  cursor: ${(props) => (props.link ? "pointer" : "default")};

  ${(props) =>
    props.link &&
    `
    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const InfoButton = styled.button`
  padding: 14px 35px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #1a252f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
