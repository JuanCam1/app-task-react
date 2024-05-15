import imagePath from "../../assets/images/pixelJuan.png"

export const Profile = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="bg-white dark:bg-[#16191D] rounded-md p-4 w-[500px] h-[80%]">
        <div className="flex flex-col gap-x-4 items-center">
          <div className={`transition size-28 rounded-full overflow-hidden border border-solid border-gray-400 dark:border-gray-500 `}>
            <img src={imagePath} alt="image" className="w-full h-full object-cover" />
          </div>
          <h1
            className={`whitespace-nowrap overflow-hidden text-ellipsis pl-4 py-4 text-black dark:text-white origin-left font-medium text-xl duration-200 `}
          >
            Juan Camilo
          </h1>
        </div>
      </div>
    </section>
  )
}