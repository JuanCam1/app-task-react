import { Project } from "./components/Project";

export const Projects = () => {
  return (
    <div className="h-screen w-full p-20">
      <div className="h-auto flex flex-wrap gap-4">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />

      </div>
    </div>
  );
};



// <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1">
// <div className="">
//   <h1>Projects</h1>
// </div>
// <div className="">
//   <h1>Projects</h1>
// </div>
// <div className="">
//   <h1>Projects</h1>
// </div>
// <div className="">
//   <h1>Projects</h1>
// </div>
// </div>