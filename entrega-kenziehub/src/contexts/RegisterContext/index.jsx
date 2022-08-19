import { yupResolver } from "@hookform/resolvers/yup";
import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schemaRegister } from "../../validators/RegisterUsers";
import api from "../../services/Api/api";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaRegister) });

  const registerSubmit = (data) => {
    try {
      api
        .post("users", data)
        .then((response) => response.status === 201 && navigate("/"));
    } catch (error) {
      return error;
    }
  };

  return (
    <RegisterContext.Provider
      value={{ register, handleSubmit, errors, registerSubmit, navigate }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
