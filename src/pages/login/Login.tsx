import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { LoginSchema } from "./LoginSchema";
import ErrorInput from "../../components/error/ErrorInput";

const INITIAL_VALUES = {
  emailUser: "",
  passwordUser: ""
}
export const Login = () => {
  const [isView, setIsView] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: LoginSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const gotDashboard = () => {
    navigate('/dashboard')
  }
  return (
    <div className="h-[358px] bg-white rounded-b-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
      <div className="space-y-4 h-full">
        <form onSubmit={gotDashboard} autoComplete="off" className="px-6 h-full flex flex-col justify-center gap-6">

          <div>
            <label
              htmlFor="emailUser"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.emailUser}
              type="email"
              name="emailUser"
              id="emailUser"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:outline-0 focus:border-0 "
              placeholder="name@correo.com"
              // required
            />
            <ErrorInput message={formik.errors.emailUser} />
          </div>

          <div>
            <label
              htmlFor="passwordUser"
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
                // required
              />
              <span onClick={() => setIsView(prev => !prev)} className="block cursor-pointer"> {isView ? <FaEyeSlash /> : <IoEye />}</span>
            </div>

            <ErrorInput message={formik.errors.passwordUser} />
          </div>

          <div className="w-full flex justify-center pt-5">
            <button
              type="submit"
              className=" max-sm:w-full w-[30%] text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Iniciar Sesión
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
