import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup.string().email("Deve ser um email").required("Digite seu email"),
  password: yup.string().required("Digite sua senha"),
});
