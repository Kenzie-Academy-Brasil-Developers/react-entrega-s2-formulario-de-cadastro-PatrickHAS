import { useState, createContext, useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect, ReactNode } from "react";
import api from "../../services/Api/api";

interface IUserProviderProps {
  children: ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  avatar_url: string;
  techs: ITech[];
  created_at: Date;
  updated_at: Date;
}

interface IAuthContext {
  user: IUser;
  loading: boolean;
  id: string | null;
  token: string | null;
  setUser: React.Dispatch<React.SetStateAction<IUser>> | any;
  navigate: NavigateFunction;
  onSubmit: (data: ILoginData) => Promise<void>;
  setLoading: (value: React.SetStateAction<boolean>) => void;
}

export const UserContext = createContext<IAuthContext>({} as IAuthContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("@TOKEN");
  const id = localStorage.getItem("@USERID");
  const navigate = useNavigate();

  const onSubmit = async (data: ILoginData) => {
    await api
      .post("sessions", data)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem("@USERID", response.data.user.id);
        localStorage.setItem("@TOKEN", response.data.token);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => err);
  };

  // Auto login
  useEffect(() => {
    async function loadUser() {
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          window.localStorage.clear();
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        navigate,
        onSubmit,
        token,
        id,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
