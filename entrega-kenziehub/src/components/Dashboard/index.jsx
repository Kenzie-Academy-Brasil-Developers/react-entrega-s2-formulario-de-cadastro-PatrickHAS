import { useEffect } from "react";
import {
  ContainerH1Btn,
  Header,
  H1,
  BtnLogout,
  ContainerUser,
  InfoUser,
  Main,
  InfoSite,
} from "./styles";

const Dashboard = ({ user, navigate }) => {
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header>
        <ContainerH1Btn>
          <H1>Kenzie Hub</H1>
          <BtnLogout
            onClick={() => {
              navigate("/");
              window.localStorage.clear();
            }}
          >
            Sair
          </BtnLogout>
        </ContainerH1Btn>
      </Header>
      <ContainerUser>
        <InfoUser>
          <h2>Olá, {user?.user.name}</h2>
          <span>{user?.user.course_module}</span>
        </InfoUser>
      </ContainerUser>
      <Main>
        <InfoSite>
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <h4>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades.
          </h4>
        </InfoSite>
      </Main>
    </>
  );
};

export default Dashboard;
