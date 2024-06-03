import { object, string } from "yup";

export const LoginSchema = object().shape({
  emailUser: string()
    .email("Email Invalido")
    .max(50,"Maximo 50 caracteres")
    .required("Campo Requerido"),
  passwordUser: string()
    .min(5, "Minimo 5 caracteres")
    .max(10, "Maximo 20 caracteres")
    .required("Campo Requerido"),
});
