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
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Inter';
    font-style: normal;

    width: 100%;
`;

export const TechsAdd = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    margin-top: 26px;

    h3 {
        width: 94px;
        height: 18px;

        font-weight: 600;
        font-size: 16px;
        line-height: 18px;

        color: #F8F9FA;
    }

    button {
        width: 35px;
        height: 35px;

        font-size: 18px;

        background: #212529;
        border-radius: 4px;
        border: none;

        color: white;

        &:hover {
            background:#495057;
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {
        width: 60%;
    }
`;

export const TechList = Styled.ul`
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow-x: auto;

    width: 90%;
    height: 90%;

    margin-top: 20px;

    background: #212529;
    border-radius: 4px;

    @media (min-width: 768px) {
        width: 60%;
    }
`;

export const ListContainer = Styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    width: 95%;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 20px;

        width: 100%;
        height: 48.73px;

        background: #121214;
        border-radius: 4.06066px;

        h2 {
            font-weight: 700;
            font-size: 14.2123px;
            line-height: 24px;

            margin-left: 12px;

            color: #F8F9FA;
        }

        div {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            width: 40%;

            span {
                font-weight: 400;
                font-size: 12.182px;
                line-height: 22px;

                margin-right: 18px;

                color: #868E96;
            }

            img {
                margin-right: 18px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`;
