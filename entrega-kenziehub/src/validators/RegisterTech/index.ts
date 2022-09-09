import * as yup from "yup";

export const schemaRegisterTech = yup.object({
  title: yup.string().required("Tecnologia obrigatória"),
  status: yup.string().required("Status obrigatório"),
});
