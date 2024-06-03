import { Link } from "react-router-dom"
import { Project } from "../models/project.model";

interface Props {
  project: Project
}
export const CardProject = ({ project }: Props) => {
  const { idProject, nameProject, dateCreateProject, descriptionProject, priorityProject, typeProject } = project
  return (
    <Link
      to={`/dashboard/project/${idProject}`}
      className="cursor-pointer bg-gray-100 dark:bg-[#16191D] border border-b-2 border-solid border-gray-300 dark:border-0 dark:border-b-2 dark:border-gray-500 w-[300px] h-[180px] rounded-lg p-4">

      <div className="mb-4">

        <span className="capitalize bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{typeProject}</span>

        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 capitalize">{priorityProject}</span>

      </div>

      <h1 className="capitalize font-bold text-xl text-balance whitespace-nowrap text-ellipsis overflow-hidden mb-2">{nameProject}</h1>

      <p className="text-gray-400 text-xs text-pretty whitespace-nowrap text-ellipsis overflow-hidden line-clamp-3 mb-2 capitalize">
        {descriptionProject}
      </p>

      <span className="text-gray-400 text-xs">{dateCreateProject}</span>

    </Link>
  )
}
