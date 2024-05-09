
export const Project = () => {
  return (
    <div  className="cursor-pointer bg-gray-100 dark:bg-[#16191D] border border-b-2 border-solid border-gray-300 dark:border-0 dark:border-b-2 dark:border-gray-500 w-[300px] h-[180px] rounded-lg p-4">
      
      <div className="mb-4">
        
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Mobile App</span>
        
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">High</span>
      
      </div>
      
      <h1 className="font-bold text-xl text-balance whitespace-nowrap text-ellipsis overflow-hidden mb-2">App Calcular Notas</h1>
      
      <p className="text-gray-400 text-xs text-pretty whitespace-nowrap text-ellipsis overflow-hidden line-clamp-3 mb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      
      <span className="text-gray-400 text-xs">08 Marzo</span>
    
    </div>
  )
}
