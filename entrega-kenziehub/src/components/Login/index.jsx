import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { schema } from "../../validators/LoginUsers";
import { yupResolver } from "@hookform/resolvers/yup";
import { BtnRegister, H1, LoginContainer } from "./styles";
import api from "../../services/Api/api";

const Login = ({ user, setUser, navigate }) => {
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .post("sessions", data)
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("@USERID", response.data.user.id);
        localStorage.setItem("@TOKEN", response.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <H1>Kenzie Hub</H1>
      <LoginContainer>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <p>{errors.email?.message}</p>
          </div>
          <input type="text" id="email" {...register("email")} />

          <div>
            <label htmlFor="password">Senha</label>
            <p>{errors.password?.message}</p>
          </div>
          <input type="password" id="password" {...register("password")} />

          <button type="submit">Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <BtnRegister onClick={() => navigate("/register")}>
          Cadastra-se!
        </BtnRegister>
      </LoginContainer>
    </>
  );
};

export default Login;
