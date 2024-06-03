import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { CardProject } from "./components/CardProject";
import { Project } from "./models/project.model";
import { projectsAll } from "./services/project.service";

export const Projects = () => {
  const { openMode } = useTheme();
  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    projectsAll()
      .then(res => {
        setProjectsData(res.data)
      })
  }, [])

  return (
    <div className={`h-screen w-full p-10 max-sm:p-6 ${openMode && "pl-40 max-sm:pl-6"} transition-all`}>
      <div className="h-auto flex flex-wrap gap-4">
        {
          projectsData.map(project => (
            <CardProject key={project.idProject} project={project} />
          ))
        }
      </div>
    </div>
  );
};
