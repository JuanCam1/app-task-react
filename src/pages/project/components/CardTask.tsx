import { TaskI } from '../models'

interface Props {
  task: TaskI
}

//TODO:  agregar el color del estado de la tarea y proyecto
const CardTask = ({ task }: Props) => {
  const { nameTask, descriptionTask, createdTask, stateTask } = task

  let bgState = "bg-red-900"
  let textState = 'text-red-300'
  if (stateTask === "done") {
    bgState = 'bg-blue-900'
    textState = 'text-blue-300'
  } else if (stateTask === "inprogress") {
    bgState = 'bg-orange-900'
    textState = 'text-orange-300'
  }

  return (
    <div
      className="cursor-pointer bg-gray-100 dark:bg-[#16191D] border border-b-2 border-solid border-gray-300 dark:border-0 dark:border-b-2 dark:border-gray-500 w-[300px] h-[180px] rounded-lg p-4">

      <div className="mb-4">

        <span className={`bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:${bgState} dark:${textState} capitalize`}>{stateTask}</span>

      </div>

      <h1 className="capitalize font-bold text-xl text-balance whitespace-nowrap text-ellipsis overflow-hidden mb-2">{nameTask}</h1>

      <p className="text-gray-400 text-xs text-pretty whitespace-nowrap text-ellipsis overflow-hidden line-clamp-3 mb-2 capitalize">
        {descriptionTask}
      </p>

      <span className="text-gray-400 text-xs">{createdTask}</span>

    </div>
  )
}

export default CardTask