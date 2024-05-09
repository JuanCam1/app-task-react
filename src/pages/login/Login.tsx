import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="h-[358px] bg-white rounded-b-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
      <div className="space-y-4 h-full">
        <form autoComplete="off" className="px-6 h-full flex flex-col justify-center gap-8">
          
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-red-600 focus:border-blue-600 "
              required
            />
          </div>

          <div className="w-full flex justify-center pt-5">
            <button
              type="submit"
              className=" max-sm:w-full w-[30%] text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={
                () => {
                  navigate('/dashboard')
                }
              }
            >
              Sign in
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
