import { useContext } from "react";
import { createContext, useEffect, useState, ReactNode } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../../services/Api/api";
import { useUserContext } from "../UserContext";

interface ITechRegisterProviderProps {
  children: ReactNode;
}

export interface ITechRegister {
  id: string;
  title: string;
  status: string;
}

interface IRegisterContext {
  techs: ITechRegister[];
  isModal: boolean;
  addTechs(tech: ITechRegister): void;
  navigate: NavigateFunction;
  RegisterTechSubmit: (data: ITechRegister) => Promise<void>;
  deleteTech(id: string): Promise<void>;
  addTechs(tech: ITechRegister): void;
  getTechs(): Promise<void>;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
}

export const TechRegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext
);

export const TechRegisterProvider = ({
  children,
}: ITechRegisterProviderProps) => {
  const { user, setUser } = useUserContext();
  const [techs, setTechs] = useState<ITechRegister[]>([]);
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  // Registrar tecnologia
  const RegisterTechSubmit = async (data: ITechRegister) => {
    try {
      await api
        .post("users/techs", data, {
          headers: {
            Authorization: `Barear: ${localStorage.getItem("@TOKEN")}`,
          },
        })
        .then((response) => addTechs(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  // GET Lista de Tecnologia
  async function getTechs() {
    try {
      await api
        .get(`/users/${localStorage.getItem("@USERID")}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
          },
        })
        .then((response) => {
          setTechs(response.data.techs);
        });
    } catch (error) {}
  }

  useEffect(() => {
    if (user !== null) {
      getTechs();
    }
  }, [user?.techs]);

  function addTechs(tech: ITechRegister) {
    let newTechs = [...techs, tech];
    setTechs(newTechs);
  }

  // Deletar Tecnologia
  async function deleteTech(id: string) {
    try {
      await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      const filterTechs = techs.filter((tech) => tech.id !== id);
      setTechs(filterTechs);
    } catch (error) {
      console.error(error);
    }
  }

  const logout = () => {
    navigate("/");
    setUser(null);
    setTechs([]);
    window.localStorage.clear();
  };

  return (
    <TechRegisterContext.Provider
      value={{
        navigate,
        RegisterTechSubmit,
        techs,
        deleteTech,
        addTechs,
        getTechs,
        isModal,
        setIsModal,
        logout,
      }}
    >
      {children}
    </TechRegisterContext.Provider>
  );
};
export const useTechRegister = () => useContext(TechRegisterContext);
