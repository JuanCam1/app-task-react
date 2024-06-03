import { axiosInstance } from "../../../utils/axiosInstance";
import { ProjectCount, TaskCount } from "../models/home.models";


export const tasksAllCount = async () => {
  return await axiosInstance.get<TaskCount>("/tasks/findAllTasksCount");
};

export const ProjectsAllCount = async () => {
  return await axiosInstance.get<ProjectCount>("/projects/findAllProjectsCount");
};
