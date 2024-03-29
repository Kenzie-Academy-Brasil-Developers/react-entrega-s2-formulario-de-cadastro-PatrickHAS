import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  ITechRegister,
  useTechRegister,
} from "../../../contexts/TechsRegistersContext";
import { schemaRegisterTech } from "../../../validators/RegisterTech";

import {
  ModalContainer,
  ModalTechsRegisters,
  RegisterForm,
  TitleClose,
} from "./styles";

const TechsRegisters = () => {
  const { RegisterTechSubmit, isModal, setIsModal } = useTechRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechRegister>({ resolver: yupResolver(schemaRegisterTech) });

  return (
    <ModalTechsRegisters>
      <ModalContainer>
        <TitleClose>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setIsModal(!isModal)}>X</button>
        </TitleClose>
        <RegisterForm onSubmit={handleSubmit(RegisterTechSubmit)}>
          <div>
            <label htmlFor="title">Nome</label>
            <p>{errors.title?.message}</p>
          </div>
          <input
            type="text"
            id="title"
            placeholder=" Digite aqui sua tecnologia"
            {...register("title")}
          />
          <div>
            <label htmlFor="status">Selecionar status</label>
            <p>{errors.status?.message}</p>
          </div>
          <select id="status" {...register("status")}>
            <option></option>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </RegisterForm>
      </ModalContainer>
    </ModalTechsRegisters>
  );
};

export default TechsRegisters;
