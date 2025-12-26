import styled from "styled-components";

export const ProductCharacteristics = styled.div`
  margin-top: 60px;
  width: 1300px;


  h2 {
    font-weight: 500;
    font-size: 24px;
    color: #454545;
    margin-bottom: 30px;
  }

  .char_row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    font-size: 14px;
    line-height: 140%;
    padding: 29px 24px;

    &:nth-child(odd) {
      background: #f8f8f8;   
    }

  }

  .char_label {
    font-weight: 500;
    font-size: 16px;
    line-height: 123%;
    color: #101010;
  }
  
  .char_value {
    width: 606px;
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.01em;
    text-align: right;
    color: #4c4c4c;
  }

`;