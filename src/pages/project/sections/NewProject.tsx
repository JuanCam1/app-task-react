import { useFormik } from "formik";
import { INITIAL_VALUES } from "../constants/initialProject";
import { useNavigate } from "react-router-dom";
import { ProjectSchema } from "./NewProjectSchema";
import ErrorInput from "../../../components/error/ErrorInput";

const NewProject = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: ProjectSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const gotDashboard = () => {
    navigate('/dashboard/projects')
  }
  return (
    <div className="h-screen w-full p-10 max-sm:p-6 pl-50 max-sm:pl-6 transition-all flex justify-center items-center">
      <div className="space-y-4 h-auto w-[100%] max-w-[600px] dark:bg-gray-800 dark:border-gray-700 rounded-md py-8">

        <h2 className="capitalize text-center font-bold text-2xl">Agregar Proyecto</h2>
        <form onSubmit={gotDashboard} autoComplete="off" className="px-6 h-full flex flex-col gap-4">

          <div>
            <label
              htmlFor="nameProject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre del Proyecto
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.nameProject}
              type="email"
              name="nameProject"
              id="nameProject"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:outline-0 focus:border "
            />
            <ErrorInput message={formik.errors.nameProject} />
          </div>

          <div>
            <label
              htmlFor="descriptionProject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Descripción del Proyecto
            </label>
            <textarea
              onChange={formik.handleChange}
              value={formik.values.descriptionProject}
              name="descriptionProject"
              id="descriptionProject"
              className="bg-gray-50 h-24 resize-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:outline-0 focus:border "
            // required
            />
            <ErrorInput message={formik.errors.descriptionProject} />
          </div>

          <div>

            <label htmlFor="typeProject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
            <select id="typeProject" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue="Web App" >Seleccione el tipo</option>
              <option value="Movile App">Movile App</option>
              <option value="Web App">Web App</option>
              <option value="Desktop App">Desktop App</option>
            </select>
          </div>
          
          <div>

            <label htmlFor="typeProject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prioridad</label>
            <select id="typeProject" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue="Web App" >Prioridad</option>
              <option value="Movile App">Baja</option>
              <option value="Web App">Media</option>
              <option value="Desktop App">Alta</option>
            </select>
          </div>         

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className=" max-sm:w-full w-[30%] text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Crear Proyecto
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default NewProject