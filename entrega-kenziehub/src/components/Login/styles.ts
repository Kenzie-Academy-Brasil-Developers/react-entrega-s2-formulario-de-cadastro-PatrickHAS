import Styled from "styled-components";

export const H1 = Styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Inter';
    font-style: normal;

    font-size: 22px;
    font-weight: 700;

    margin-top: 81px;
    margin-bottom: 19px;

    width: 100%;
    height: 30px;

    color: #FF577F;
`;

export const LoginContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
   

    background: #212529;

    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    @media (min-width: 500px) {
        width: 400px;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14.439px;
        line-height: 22px;

        margin-top: 30px;
        margin-bottom: 22px;

        width: 39.31px;
        height: 22.46px;

        color: #F8F9FA;
    }

    span {
        width: 136.37px;
        height: 14.44px;

        margin-top: 27px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        line-height: 14px;

        color: #868E96;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 18px;

        width: 90%;
        

        div {
            display:flex;
            justify-content: space-between;
            align-items: center;

            width:100%;

        }

        label {
            font-family: 'Inter';
            font-style: normal;

            font-weight: 400;
            font-size: 10px;
            line-height: 0px;

            color: #F8F9FA;
        }

        input {
            box-sizing: border-box;
            outline: none;
            
            width: 100%;
            height: 38.5px;

            background: #343B41;
            color: white;

            border: 0.9772px solid #F8F9FA;
            border-radius: 3.20867px;
        }

        input:hover {
            border: 0.9772px solid  #FF577F;
            cursor: pointer
        }

        input:focus {
            border: 0.9772px solid  #FF577F;
        }

        p {
            display: flex;
            justify-content: end;

            font-family: 'Inter';
            font-style: normal;
            font-size: 10px;

            color: white;
        }

        button {
            box-sizing: border-box;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            font-family: 'Inter';
            font-style: normal;

            width: 100%;
            height: 38.5px;

            margin-top: 17px;

            background: #FF577F;
            color: white;
            border: none;
            
            border: 0.9772px solid  #FF577F;
            border-radius: 4.06066px;
        }

        button:hover {
            cursor: pointer
        }
    }
`;

export const BtnRegister = Styled.button`
    box-sizing: border-box;

    width: 90%;
    height: 38.5px;

    margin-top: 17px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #868E96;
    color: white;

    border: 1.2182px solid #868E96;
    border-radius: 4px;
    
    :hover {
        cursor: pointer
    }
`;
