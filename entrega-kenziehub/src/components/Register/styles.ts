import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Inter";
  font-style: normal;

  width: 100%;
  height: 80px;
`;

export const TitleBack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 50px;

  h1 {
    font-weight: 700;
    font-size: 18px;

    color: #ff577f;
  }

  button {
    font-size: 10px;

    width: 59.54px;
    height: 31.95px;

    background: #212529;
    color: white;

    border-radius: 4px;
    border: none;

    &:hover {
      background: #495057;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    h1 {
      font-size: 20px;
    }

    button {
      font-size: 12px;

      width: 69.54px;
      height: 38.95px;
    }
  }

  @media (min-width: 900px) {
    width: 40%;
  }

  @media (min-width: 1100px) {
    width: 30%;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  font-family: "Inter";
  font-style: normal;

  width: 90%;

  background: #212529;
  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: 3.19812px;

  h3 {
    font-weight: 700;
    font-size: 14.3916px;
    line-height: 22px;

    margin-top: 20px;

    color: #f8f9fa;
  }

  span {
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;

    margin-top: 10px;

    color: #868e96;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 900px) {
    width: 40%;
  }

  @media (min-width: 1100px) {
    width: 30%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;

    margin-top: 20px;
    width: 90%;

    label {
      font-weight: 400;
      font-size: 9.73988px;
      line-height: 0px;

      color: #f8f9fa;
    }
    p {
      font-weight: 400;
      font-size: 9.73988px;
      line-height: 0px;

      color: #f8f9fa;
    }

    input {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;

      width: 100%;
      height: 28.38px;

      background: #343b41;
      color: white;

      border: 0.973988px solid #343b41;
      border-radius: 3.19812px;
      outline: none;
    }

    select {
      box-sizing: border-box;

      display: flex;
      flex-direction: row;
      align-items: center;

      font-size: 12px;

      width: 100%;
      height: 28.38px;

      background: #343b41;
      color: #868e96;

      border: 0.973988px solid #343b41;
      border-radius: 3.19812px;
      outline: none;
    }

    button {
      box-sizing: border-box;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 28.38px;

      background: #59323f;
      color: white;

      border: 1.2182px solid #59323f;
      border-radius: 4px;

      margin: 10px 0;

      :hover {
        background-color: #ff577f;
        cursor: pointer;
      }

      @media (min-width: 900px) {
        margin-bottom: 30px;
      }
    }
    @media (min-width: 425px) {
      label {
        font-size: 12px;
      }
      input {
        height: 38.38px;
      }
      select {
        font-size: 13px;
        height: 38.38px;
      }
      button {
        height: 38.38px;
      }
    }

    @media (min-width: 900px) {
      gap: 20px;
    }
  }
`;

export const LabelDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
