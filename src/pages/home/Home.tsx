import { useEffect, useState } from "react";

import BarGrap from "./components/BarGrap";
import { useTheme } from "../../hooks/useTheme";
import { ProjectsAllCount, tasksAllCount } from "./services/home.service";
import { homeProjectAdapter, homeTaskAdapter } from "./adapter/home.adapter";
import { ProjectCountAdapter, TaskCountAdapter } from "./models/home.models";

export const Home = () => {
  const { openMode } = useTheme();
  const [tasks, setTasks] = useState<TaskCountAdapter>()
  const [projects, setProjects] = useState<ProjectCountAdapter>()


  useEffect(() => {
    tasksAllCount()
      .then(res => {
        const taskData = homeTaskAdapter(res.data)
        setTasks(taskData)
      })

    ProjectsAllCount()
      .then(res => {
        console.log(res.data)
        const projectData = homeProjectAdapter(res.data)
        setProjects(projectData)
      })
  }, [])

  return (
    <div className={`h-screen w-full p-10 max-sm:p-6 ${openMode && "pl-40 max-sm:pl-6"} transition-all`}>
      <div className="h-[80%] grid grid-cols-2 max-sm:grid-cols-1 place-items-center gap-x-3 p-4">
        <div className="w-3/4 h-full border flex items-center flex-col justify-center rounded-md border-[#cecece] p-4">
          {tasks != undefined && <BarGrap label="Tareas" data={tasks} />}
        </div>
        <div className="w-3/4 h-full border  flex items-center flex-col justify-center rounded-md border-[#cecece] p-4">
          {projects != undefined && <BarGrap label="Proyectos" data={projects} />}
        </div>
      </div>
    </div>
  )
}
