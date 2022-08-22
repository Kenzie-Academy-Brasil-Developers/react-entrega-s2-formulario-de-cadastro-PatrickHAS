import { yupResolver } from "@hookform/resolvers/yup";
import { useState, createContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schemaLogin } from "../../validators/LoginUsers";
import { useEffect } from "react";
import api from "../../services/Api/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  const onSubmit = (data) => {
    api
      .post("sessions", data)
      .then((response) => {
        setUser(response.data.user);
        reset({ email: "", password: "" });
        localStorage.setItem("@USERID", response.data.user.id);
        localStorage.setItem("@TOKEN", response.data.token);
        navigate("/dashboard");
      })
      .catch((err) => err);
  };

  // Auto login
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
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
        register,
        handleSubmit,
        errors,
        onSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
