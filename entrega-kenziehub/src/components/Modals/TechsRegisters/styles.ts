import styled from "styled-components";

export const ModalTechsRegisters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Inter";
  font-style: normal;

  position: absolute;

  background-color: rgba(0, 0, 0, 0.4);

  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  height: 260px;

  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (min-width: 500px) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 900px) {
    width: 30%;
  }
`;

export const TitleClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  background: #343b41;

  h2 {
    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px;

    margin-left: 16px;

    color: #f8f9fa;
  }

  button {
    border: none;
    background-color: transparent;

    font-weight: 600;
    font-size: 12.8347px;
    line-height: 21px;

    margin-right: 10px;

    color: #868e96;

    &:hover {
      cursor: pointer;
      color: white;
    }
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;

  font-family: "Inter";
  font-style: normal;

  margin-top: 19px;

  width: 90%;

  div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 17px;

    p {
      font-weight: 400;
      font-size: 9.772px;
      line-height: 0px;

      color: #f8f9fa;
    }

    label {
      font-weight: 400;
      font-size: 9.772px;
      line-height: 0px;

      color: #f8f9fa;
    }
  }

  input {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 16px;

    width: 100%;
    height: 38px;

    background: #343b41;
    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;
    border: none;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }

  select {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 16px;

    width: 100%;
    height: 38px;

    background: #343b41;
    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;
    border: none;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 38px;

    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
`;
