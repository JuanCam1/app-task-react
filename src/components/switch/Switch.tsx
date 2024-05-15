import { MdNightlight } from "react-icons/md";

interface SwitchProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  openMode: boolean
}
export const Switch = ({ darkMode, toggleDarkMode, openMode }: SwitchProps) => {
  return (
    <div
      className={`flex ${darkMode ? "justify-start" : "justify-end"
        }  transition-colors rounded-lg h-12 w-full absolute bottom-0 left-0 bg-gray-300 dark:bg-[#242930] p-2 ${!openMode && "hidden"
        }`}
    >
      <div
        className={`w-1/2 rounded-lg bg h-full transition-transform delay-500 cursor-pointer flex  justify-center items-center text-black dark:text-white bg-gray-200 dark:bg-[#16191D] `}
        onClick={toggleDarkMode}
      >
        <MdNightlight className={`${darkMode ? "text-white" : "text-black"}`} />
        <span className={`${darkMode ? "text-white" : "text-black"}`}>
          {darkMode ? "Dark" : "Light"}
        </span>
      </div>

    </div>
  )
}