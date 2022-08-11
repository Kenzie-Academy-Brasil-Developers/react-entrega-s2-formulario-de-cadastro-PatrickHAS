import * as yup from "yup";

export const schemaRegister = yup.object({
  email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "No minimo 8 caracteres")
    .matches(
      "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
      "Senha deve conter (a-Z / 0-9 / !#@$%&)"
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Senha deve ser igual")
    .required("Confirme sua senha"),
  name: yup
    .string()
    .required("Nome obrigatório")
    .matches("^[ a-zA-Z á]*$", "Precisa ser um nome"),
  bio: yup.string().required("Fale um pouco sobre você"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Selecione seu modulo"),
});
