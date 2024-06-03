import { Link, Outlet, useLocation } from "react-router-dom";

export const App = () => {
  const { pathname } = useLocation();
  // console.log(pathname)
  return (
    <section className="bg-gray-200 h-screen dark:bg-gray-900 flex justify-center items-center">
      
      <div className="h-[410px] flex w-full max-w-[470px] flex-col items-center ">
        
        <ul className="flex flex-row w-[100%] text-sm font-medium text-center text-gray-500 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li className="w-full">
            <Link
              to="/"
              className={`${pathname === "/" && " dark:bg-gray-500/50 bg-blue-300/50"
                } dark:text-white text-black inline-block w-full p-4 bg-white border-s-0 border-r border-gray-200 dark:border-gray-700 rounded-tl-lg  hover:bg-blue-50 hover:text-gray-700  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
              aria-current="page"
            >
              Login
            </Link>
          </li>

          <li className="w-full">
            <Link
              to="/register"
              className={`${pathname === "/register" && "dark:bg-gray-500/50 bg-blue-300/50"
                } dark:text-white text-black inline-block w-full p-4 bg-white border-s-0 border-blue-300 dark:border-gray-700 rounded-tr-lg hover:bg-blue-50   dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
            >
              Register
            </Link>
          </li>
        </ul>
        
        <div className="w-full">
          <Outlet />
        </div>

      </div>

    </section>
  );
};

