import { useContext } from "react";
import { BtnRegister, H1, LoginContainer } from "./styles";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { handleSubmit, onSubmit, errors, register, navigate } =
    useContext(UserContext);
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
