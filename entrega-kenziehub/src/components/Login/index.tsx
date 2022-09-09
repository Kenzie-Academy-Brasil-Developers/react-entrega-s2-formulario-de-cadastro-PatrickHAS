import { BtnRegister, H1, LoginContainer } from "./styles";
import { useUserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validators/LoginUsers";

const Login = () => {
  const { onSubmit, navigate } = useUserContext();

  interface IErros {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IErros>({ resolver: yupResolver(schemaLogin) });

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
