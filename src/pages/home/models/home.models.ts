export interface TaskCount {
  todoTasks: number;
  doneTasks: number;
  inProgressTasks: number;
  totalTasks: number;
}

export interface TaskCountAdapter {
  TareasFinalizadas: number;
  TareasEnProgreso: number;
  Tareas: number;
  TotalTareas: number;
}

export interface ProjectCount {
  webProjects: number;
  movileProjects: number;
  desktopProjects: number;
  totalProjects: number;
}

export interface ProjectCountAdapter {
  ProyectosEscritorio: number;
  ProyectosMovile: number;
  TotalProyectos: number;
  ProyectosWeb: number;
}
