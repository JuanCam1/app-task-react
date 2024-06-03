import { axiosInstance } from "../../../utils/axiosInstance";
import { TaskI } from "../models";

export const tasksAll = async () => {
  return await axiosInstance.get<TaskI[]>("/tasks");
};

export const taskById = async (idTask: string) => {
  return await axiosInstance.get<TaskI>(`/tasks/${idTask}`);
};

// export const projectCreate = async (project: Project) => {
//   return await axiosInstance.post<Project>("/projects", project);
// };

// export const projectUpdate = async (project: Project) => {
//   return await axiosInstance.put<Project>(`/projects/${project._id}`, project);
// };

