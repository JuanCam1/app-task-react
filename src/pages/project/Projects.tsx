import { useTheme } from "../../hooks/useTheme";
import { Project } from "./components/Project";

export const Projects = () => {
  const { openMode } = useTheme()
  return (
    <div className={`h-screen w-full p-10 max-sm:p-6 ${openMode && "pl-40 max-sm:pl-6"} transition-all`}>
      <div className="h-auto flex flex-wrap gap-4">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />

      </div>
    </div>
  );
};
