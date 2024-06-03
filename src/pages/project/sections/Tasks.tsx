import { useTheme } from "../../../hooks/useTheme";
import { TaskI } from "../models";
import CardTask from "../components/CardTask";

interface TasksProps {
  tasks: TaskI[];
}
export const Tasks = ({ tasks }: TasksProps) => {
  const { openMode } = useTheme();

  return (
    <div className={`h-screen w-full p-10 max-sm:p-6 ${openMode && "pl-40 max-sm:pl-6"} transition-all`}>
      <div className="h-auto flex flex-wrap gap-4">
        {
          tasks.map(task => (
            <CardTask key={task.idTask} task={task} />
          ))
        }
      </div>
    </div>
  );
};
