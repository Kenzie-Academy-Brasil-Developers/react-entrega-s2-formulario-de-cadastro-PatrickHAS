import Styled from "styled-components";

export const Header = Styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;

    border-bottom:#212529 2px  solid;
`;

export const ContainerH1Btn = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;

    font-family: 'Inter';
    font-style: normal;

    @media (min-width: 768px) {
        width: 60%;
    }
`;

export const H1 = Styled.h1`
    display:flex;
    align-items: center;

    width: 105.53px;
    height: 14.63px;

    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #FF577F;
`;

export const BtnLogout = Styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: 'Inter';
    font-style: normal;

    width: 55.49px;
    height: 32px;

    background: #212529;
    color: white;
    border-radius: 4px;
    border: none;

    :hover {
        background:#495057;
        cursor: pointer;
    }
`;

export const ContainerUser = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Inter';
    font-style: normal;

    width: 100%;
    height: 130px;

    border-bottom:#212529 2px  solid;
`;

export const InfoUser = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap:15px;

    width: 90%;

    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;

        color: #F8F9FA;
    }

    span {
        display: flex;
        align-items: center;

        font-weight: 400;
        font-size: 12px;
        line-height: 22px;

        color: #868E96;
    }

    @media (min-width: 768px) {
        justify-content: space-between;
        flex-direction: inherit;
        width: 60%;
    }
`;

export const Main = Styled.main`
    display: none;
    justify-content: center;
    align-items: center;

    font-family: 'Inter';
    font-style: normal;

    width: 100%;
    height: 130px;

    @media (min-width: 768px) {
        display: flex;
    }
`;

export const InfoSite = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap:15px;

    width: 90%;

    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;

        color: #F8F9FA;
    }

    h4 {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: #FFFFFF;
    }

     @media (min-width: 768px) {
        width: 60%;
    }

`;
