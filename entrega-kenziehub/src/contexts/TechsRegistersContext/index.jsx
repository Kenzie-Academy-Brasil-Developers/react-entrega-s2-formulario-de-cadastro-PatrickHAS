import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schemaRegisterTech } from "../../validators/RegisterTech";
import api from "../../services/Api/api";
import { UserContext } from "../UserContext";

export const TechRegisterContext = createContext({});

export const TechRegisterProvider = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const [techs, setTechs] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaRegisterTech) });

  // Registrar tecnologia
  const RegisterTechSubmit = async (data) => {
    try {
      await api
        .post("users/techs", data, {
          headers: {
            Authorization: `Barear: ${localStorage.getItem("@TOKEN")}`,
          },
        })
        .then(
          (response) => addTechs(response.data),
          reset({ title: "", status: "" })
        );
    } catch (error) {
      return error;
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
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    if (user !== null) {
      getTechs();
    }
  }, [user?.techs]);

  function addTechs(tech) {
    let newTechs = [...techs, tech];
    setTechs(newTechs);
  }

  // Deletar Tecnologia
  async function deleteTech(id) {
    try {
      await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      const filterTechs = techs.filter((tech) => tech.id !== id);
      setTechs(filterTechs);
    } catch (error) {
      return error;
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
        register,
        handleSubmit,
        errors,
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
