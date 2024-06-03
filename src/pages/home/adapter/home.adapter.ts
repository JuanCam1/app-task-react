import { ProjectCount, TaskCount } from "../models/home.models";


export const homeTaskAdapter = ( data : TaskCount) => {
  const {
    doneTasks: TareasFinalizadas,
    inProgressTasks: TareasEnProgreso,
    todoTasks: Tareas,
    totalTasks: TotalTareas
  } = data;

  return {
    TareasFinalizadas,
    TareasEnProgreso,
    Tareas,
    TotalTareas
  };
};

export const homeProjectAdapter = ( data : ProjectCount) => {
  const {
    desktopProjects: ProyectosEscritorio,
    movileProjects: ProyectosMovile,
    totalProjects: TotalProyectos,
    webProjects: ProyectosWeb
  } = data;

  return {
    ProyectosEscritorio,
    ProyectosMovile,
    ProyectosWeb,
    TotalProyectos
  };
};
