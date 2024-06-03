import { useFormik } from "formik";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const INITIAL_VALUES = {
  idUseR: "",
  nameUser: "",
  emailUser: "",
  passwordUser: ""
}
export const Register = () => {
  const [isView, setIsView] = useState(false);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      console.log(values)
    },

  })
  return (
    <div className="h-full bg-white rounded-b-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 space-y-4 md:space-y-6 sm:p-4">
        <form className="space-y-4 md:space-y-6">
          <div className="max-sm:pb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="max-sm:pb-4">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="correo@correo.com"
              required
            />
          </div>
          <div className="max-sm:pb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <div className="flex items-center border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border-gray-300 rounded-lg pr-2">
              <input
                onChange={formik.handleChange}
                value={formik.values.passwordUser}
                type={isView ? "text" : "password"}
                name="passwordUser"
                id="passwordUser"
                placeholder="••••••••"
                className="bg-transparent border-none  text-gray-900 sm:text-sm  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white focus:ring-red-600 focus:border-blue-600 "
                required
              />
              <span onClick={() => setIsView(prev => !prev)} className="block cursor-pointer"> {isView ? <FaEyeSlash /> : <IoEye />}</span>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className=" max-sm:w-full w-[30%] text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
