import { axiosInstance } from "../../../utils/axiosInstance";
import { TaskI } from "../models";
import { Project } from "../models/project.model";

export const projectsAll = async () => {
  return await axiosInstance.get<Project[]>("/projects");
};

export const projectById = async (idProject: string) => {
  return await axiosInstance.get<Project>(`/projects/${idProject}`);
};

// export const projectCreate = async (project: Project) => {
//   return await axiosInstance.post<Project>("/projects", project);
// };

// export const projectUpdate = async (project: Project) => {
//   return await axiosInstance.put<Project>(`/projects/${project._id}`, project);
// };

export const tasksByIdProject = async (idProject:string) => {
  return await axiosInstance.get<TaskI[]>(`/tasks/taskByIdProject/${idProject}`);
}
