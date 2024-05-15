import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { Switch } from "../switch/Switch";
import imagePath from "../../assets/images/pixelJuan.png"
import controlPath from "../../assets/control.png"
import { FaHome } from "react-icons/fa";
import { MdCreateNewFolder  } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

export const Sidebar = () => {
  const { darkMode, toggleDarkMode, openMode, toggleOpenMode } = useTheme()

  return (
    <div
      className={` ${openMode ? "w-52" : "w-20 max-sm:w-18"
        } bg-white dark:bg-[#16191D] fixed z-10 border-r-2 border-solid border-cecece dark:border-gray-500 h-screen p-5  pt-8 duration-300`}
    >
      <img
        src={controlPath}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full ${!openMode && "rotate-180"}`}
        onClick={toggleOpenMode}
      />
      <div className="flex flex-col gap-x-4 items-center">
        <div className={`transition size-28 rounded-full overflow-hidden border border-solid border-gray-400 dark:border-gray-500  ${!openMode && "scale-0"}`}>
          <img src={imagePath} alt="image" className="w-full h-full object-cover" />
        </div>
        <h1
          className={`whitespace-nowrap overflow-hidden text-ellipsis pl-4 py-4 text-black dark:text-white origin-left font-medium text-xl duration-200  ${!openMode && "scale-0"
            }`}
        >
          Juan Camilo
        </h1>
      </div>

      <ul className="pt-6 ">
          <Link
            to="/dashboard"
            className={`flex rounded-md pb-2 cursor-pointer pl-2 py-2 hover:bg-blue-100 hover:dark:bg-white/20 text-gray-300 text-sm items-center gap-x-4 
               mt-6 bg-light-white`}
          >
            <FaHome size={24} />
            <span
              className={`${!openMode && "hidden"
                } whitespace-nowrap overflow-hidden text-ellipsis origin-left duration-200 text-black dark:text-white`}
            >
              Inicio
            </span>
          </Link>

          <Link
            to="/dashboard/projects"
            className={`flex rounded-md pb-2 cursor-pointer pl-2 py-2 hover:bg-blue-100 hover:dark:bg-white/20 text-gray-300 text-sm items-center gap-x-4 
               mt-6`}
          >
            <FaFolderOpen size={24} />
            <span
              className={`${!openMode && "hidden"
                } whitespace-nowrap overflow-hidden text-ellipsis origin-left duration-200 text-black dark:text-white`}
            >
              Proyectos
            </span>
          </Link>

          <Link
            to="/dashboard"
            className={`flex rounded-md pb-2 cursor-pointer pl-2 py-2 hover:bg-blue-100 hover:dark:bg-white/20 text-gray-300 text-sm items-center gap-x-4 
               mt-2`}
          >
            <MdCreateNewFolder   size={24} />
            <span
              className={`${!openMode && "hidden"
                } whitespace-nowrap overflow-hidden text-ellipsis origin-left duration-200 text-black dark:text-white`}
            >
              Nuevo Proyecto
            </span>
          </Link>

          <Link
            to="/dashboard/profile"
            className={`flex rounded-md pb-2 cursor-pointer pl-2 py-2 hover:bg-blue-100 hover:dark:bg-white/20 text-gray-300 text-sm items-center gap-x-4 
               mt-6`}
          >
            <FaUserCog size={24} />
            <span
              className={`${!openMode && "hidden"
                } whitespace-nowrap overflow-hidden text-ellipsis origin-left duration-200 text-black dark:text-white`}
            >
              Perfil
            </span>
          </Link>

          <Link
            to="/dashboard"
            className={`flex rounded-md pb-2 cursor-pointer pl-2 py-2 hover:bg-blue-100 hover:dark:bg-white/20 text-gray-300 text-sm items-center gap-x-4 
               mt-2`}
          >
            <IoLogOut size={24} />
            <span
              className={`${!openMode && "hidden"
                } whitespace-nowrap overflow-hidden text-ellipsis origin-left duration-200 text-black dark:text-white`}
            >
              Salir
            </span>
          </Link>



      </ul>

      <Switch darkMode={darkMode} toggleDarkMode={toggleDarkMode} openMode={openMode} />


    </div>
  );
};
