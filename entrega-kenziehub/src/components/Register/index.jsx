import { ContainerForm, HeaderContainer, LabelDiv, TitleBack } from "./styles";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/RegisterContext";

const Register = () => {
  const { navigate, handleSubmit, registerSubmit, errors, register } =
    useContext(RegisterContext);

  return (
    <>
      <HeaderContainer>
        <TitleBack>
          <h1>Kenzie Hub</h1>
          <button onClick={() => navigate("/")}>Voltar</button>
        </TitleBack>
      </HeaderContainer>
      <ContainerForm>
        <h3>Crie sua conta</h3>
        <span>Rápido e grátis, vamos nessa.</span>
        <form onSubmit={handleSubmit(registerSubmit)}>
          <LabelDiv>
            <label htmlFor="name">Nome</label>
            <p>{errors.name?.message}</p>
          </LabelDiv>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />

          <LabelDiv>
            <label htmlFor="email">Email</label>
            <p>{errors.email?.message}</p>
          </LabelDiv>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />

          <LabelDiv>
            <label htmlFor="password">Senha</label>
            <p>{errors.password?.message}</p>
          </LabelDiv>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />

          <LabelDiv>
            <label htmlFor="passwordConfirm">Confirmar senha</label>
            <p>{errors.passwordConfirm?.message}</p>
          </LabelDiv>
          <input
            type="password"
            id="passwordConfirm"
            placeholder="Confirme sua senha"
            {...register("passwordConfirm")}
          />

          <LabelDiv>
            <label htmlFor="bio">Bio</label>
            <p>{errors.bio?.message}</p>
          </LabelDiv>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />

          <LabelDiv>
            <label htmlFor="contact">Contato</label>
            <p>{errors.contact?.message}</p>
          </LabelDiv>
          <input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />

          <LabelDiv>
            <label htmlFor="module">Selecionar módulo</label>
            <p>{errors.course_module?.message}</p>
          </LabelDiv>
          <select
            id="module"
            placeholder="Qual seu módulo?"
            {...register("course_module")}
          >
            <option></option>
            <option>Primeiro Módulo (Frontend iniciante)</option>
            <option>Segundo Módulo (Frontend intermediário)</option>
            <option>Terceiro Módulo (Frontend avançado)</option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>
      </ContainerForm>
    </>
  );
};

export default Register;
