import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { projectById, tasksByIdProject } from "../services/project.service";
import { type Project, type TaskI } from "../models";
import { Tasks } from "./Tasks";


const Project = () => {
  const { idProject } = useParams();
  const [projectData, setProjectData] = useState<Project>();
  const [tasksProject, setTasksProject] = useState<TaskI[]>([]);
  // const { openMode } = useTheme(); ${openMode && "pl-40 max-sm:pl-6"} 

  useEffect(() => {
    if (!idProject) return;

    projectById(idProject)
      .then((res) => setProjectData(res.data))
      .catch(err => console.log(err))

    tasksByIdProject(idProject)
      .then((res) => setTasksProject(res.data))
      .catch(err => console.log(err))
  }, [idProject])


  return (
    <section className={`flex flex-col items-center h-[700px] w-full pt-6 max-sm:p-6 transition-all`}>
      <div className="h-auto flex flex-col justify-center items-center gap-4">
        <h2 className="capitalize text-xl font-bold">
          {projectData?.nameProject}
        </h2>
        <p className="capitalize mb-4 ">
          {projectData?.descriptionProject}
        </p>
      </div>
      {
        tasksProject && tasksProject.length === 0 ? (
          <p className="text-center text-xl">No hay tareas creadas</p>
        ) :
          (
            <Tasks tasks={tasksProject} />
          )
      }

    </section>
  );
}

export default Project