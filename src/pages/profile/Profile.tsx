import { ChangeEvent, useEffect, useRef, useState } from "react"
import imagePath from "../../assets/images/pixelJuan.png"

export const Profile = () => {
  const [imageSelected, setImageSelected] = useState(imagePath);
  const [isEdit, setIsEdit] = useState(false);
  const [dataProfile, setDataProfile] = useState({
    nameUser: "Juan Camilo Rojas Diaz",
    emailUser: "jcdiaz1998@outlook.es"
  });

  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(()=> {
    if(isEdit){
      nameRef.current?.focus()
    }
  },[isEdit])

  const onImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && evt.target.files[0]) {
      setImageSelected(URL.createObjectURL(evt.target.files[0]));
    }
  }

  const onDataChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setDataProfile({ ...dataProfile, [name]: value })
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="bg-white dark:bg-[#16191D] rounded-md px-4 pt-7 w-[500px] h-auto max-sm:h-screen max-sm:flex max-sm:flex-col max-sm:items-end max-sm:justify-center">
        <div className="flex float-end items-center">
          <label className="container">
            <input
              value="wedding-gift"
              className="peer cursor-pointer hidden after:opacity-100"
              checked={isEdit}
              type="checkbox"
              onChange={() => setIsEdit(prev => !prev)}
            />
            <span
              className="inline-block w-5 h-5 border-2 relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:bg-[#333] after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"
            ></span>
          </label>
        </div>
        <div className="flex flex-col gap-x-4 items-center">
          <div className={`size-32 rounded-full overflow-hidden border border-solid border-gray-400 dark:border-gray-500 `}>
            <img src={imageSelected} alt="image" className="w-full h-full object-cover" />
          </div>
          <div className="my-6">
            <input
              className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
              type="file"
              accept="image/png, image/jpeg, image/jpg image/webpp"
              onChange={onImageChange}
            />
          </div>
          <input
            type="text"
            className={`dark:bg-[#0e131a] pl-4 py-2 text-black dark:text-white w-2/5 max-sm:w-4/5 font-medium text-sm mb-6 rounded-md`}
            value={dataProfile.nameUser}
            name="nameUser"
            onChange={onDataChange}
            disabled={false}
            ref={nameRef}
          />

          <input
            type="email"
            className={`dark:bg-[#0e131a] pl-4 py-2 text-black dark:text-white w-2/5 max-sm:w-4/5  font-medium text-sm rounded-md`}
            value={dataProfile.emailUser}
            name="emailUser"
            onChange={onDataChange}
            disabled={true}
          />

          <button className={`mt-6 border border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white p-2 rounded-md transition-all ${!isEdit && "opacity-0"}`}>Actualizar</button>
        </div>
      </div>
    </section>
  )
}