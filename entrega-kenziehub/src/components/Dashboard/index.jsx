import { useContext, useEffect } from "react";
import { TechRegisterContext } from "../../contexts/TechsRegistersContext";
import { UserContext } from "../../contexts/UserContext";
import TechsRegisters from "../Modals/TechsRegisters";

import {
  ContainerH1Btn,
  Header,
  H1,
  BtnLogout,
  ContainerUser,
  InfoUser,
  Main,
  TechsAdd,
  TechList,
  ListContainer,
} from "./styles";

const Dashboard = () => {
  const { user, navigate } = useContext(UserContext);
  const { techs, deleteTech, logout, isModal, setIsModal } =
    useContext(TechRegisterContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {isModal && <TechsRegisters />}
      <Header>
        <ContainerH1Btn>
          <H1>Kenzie Hub</H1>
          <BtnLogout onClick={logout}>Sair</BtnLogout>
        </ContainerH1Btn>
      </Header>
      <ContainerUser>
        <InfoUser>
          <h2>Olá, {user?.name}</h2>
          <span>{user?.course_module}</span>
        </InfoUser>
      </ContainerUser>
      <Main>
        <TechsAdd>
          <h3>Tecnologias</h3>
          <button onClick={() => setIsModal(!isModal)}>+</button>
        </TechsAdd>
        {techs.length === 0 ? (
          <></>
        ) : (
          <TechList>
            <ListContainer>
              {techs.map((tech, index) => (
                <li key={index}>
                  <h2>{tech.title}</h2>
                  <div className="status-delete">
                    <span>{tech.status}</span>
                    <img
                      src="./trash.png"
                      alt=""
                      onClick={() => deleteTech(tech.id)}
                    />
                  </div>
                </li>
              ))}
            </ListContainer>
          </TechList>
        )}
      </Main>
    </>
  );
};

export default Dashboard;
