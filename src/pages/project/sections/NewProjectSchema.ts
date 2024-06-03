import { object, string } from "yup";

export const ProjectSchema = object().shape({
  nameProject: string()
    .email("Email Invalido")
    .max(50, "Maximo 50 caracteres")
    .min(4, "Minimo 4 caracteres")
    .required("Campo Requerido"),
  descriptionProject: string()
    .email("Email Invalido")
    .max(50, "Maximo 50 caracteres")
    .min(50, "Maximo 10 caracteres")
    .required("Campo Requerido"),
  typeProject: string().required("Campo Requerido"),
  priorityProject: string()
    .required("Campo Requerido")
});
