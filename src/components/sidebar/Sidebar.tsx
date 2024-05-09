import { useEffect, useState } from "react";
import { MdNightlight } from "react-icons/md";
import { Link } from "react-router-dom";
import imagePath from "../../assets/images/pixelJuan.png"

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // const [value, setValueWrap] = useLocalStorage("modeDark",isDark);

  const Menus = [
    { title: "Home", src: "Folder", gap: true, path: "/dashboard" },
    { title: "Projects", src: "Folder", gap: true, path: "/dashboard/projects" },
    { title: "Add Project ", src: "Calendar", path: "/dashboard/projects" },
    { title: "Perfil ", src: "Folder", gap: true, path: "profile" },
    { title: "Logout", src: "Setting", path: "/" }
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isDark]);


  return (
    <div
      className={` ${open ? "w-52" : "w-20"
        } bg-white dark:bg-[#16191D] fixed z-10 border-r-2 border-solid border-cecece dark:border-gray-500 h-screen p-5  pt-8 duration-300`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex flex-col gap-x-4 items-center">
        <div className={`transition size-28 rounded-full overflow-hidden border border-solid border-gray-400 dark:border-gray-500  ${!open && "scale-0"}`}>
          <img src={imagePath} alt="image" className="w-full h-full object-cover" />
        </div>
        <h1
          className={`whitespace-nowrap overflow-hidden text-ellipsis pl-4 py-4 text-black dark:text-white origin-left font-medium text-xl duration-200  ${!open && "scale-0"
            }`}
        >
          Juan Camilo
        </h1>
      </div>
      <ul className="pt-6 ">
        {Menus.map((Menu, index) => (
          <Link
            to={Menu.path}
            key={index}
            className={`flex rounded-md pb-2 cursor-pointer pl-2 py-2 hover:bg-blue-100 hover:dark:bg-white/20 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
          >
            <img src={`./src/assets/${Menu.src}.png`} className="size-[24px]" />
            <span
              className={`${!open && "hidden"
                } whitespace-nowrap overflow-hidden text-ellipsis origin-left duration-200 text-black dark:text-white`}
            >
              {Menu.title}
            </span>
          </Link>
        ))}
      </ul>

      <div
        className={`flex ${isDark ? "justify-start" : "justify-end"
          }  transition-colors rounded-lg h-12 w-full absolute bottom-0 left-0 bg-gray-300 dark:bg-[#242930] p-2 ${!open && "hidden"
          }`}
      >
        <div
          className={`w-1/2 rounded-lg bg h-full transition-transform delay-500 cursor-pointer flex  justify-center items-center text-black dark:text-white bg-gray-200 dark:bg-[#16191D] `}
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          <MdNightlight className={`${isDark ? "text-black" : "text-white"}`} />
          <span className={`${isDark ? "text-black" : "text-white"}`}>
            {isDark ? "Dark" : "Light"}
          </span>
        </div>

      </div>
    </div>
  );
};
