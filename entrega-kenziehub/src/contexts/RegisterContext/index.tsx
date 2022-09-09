import { createContext, ReactNode, useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../../services/Api/api";

interface IRegisterProviderProps {
  children: ReactNode;
}

export interface IRegisterData {
  password: string;
  email: string;
  course_module: string;
  contact: string;
  bio: string;
  name: string;
  passwordConfirm: string;
}

interface IRegisterContext {
  navigate: NavigateFunction;
  registerSubmit: (data: IRegisterData) => Promise<void>;
}

export const RegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext
);

export const RegisterProvider = ({ children }: IRegisterProviderProps) => {
  const navigate = useNavigate();

  const registerSubmit = async (data: IRegisterData) => {
    try {
      await api
        .post("users", data)
        .then((response) => response.status === 201 && navigate("/"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RegisterContext.Provider value={{ registerSubmit, navigate }}>
      {children}
    </RegisterContext.Provider>
  );
};
export const useRegisterContext = () => useContext(RegisterContext);
