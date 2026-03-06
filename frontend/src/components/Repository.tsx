import { Project } from "../App";

function Repository({onProjectClicked}: any) {
  var projects = [
    new Project(1, "Project 1"),
    new Project(2, "Project 2"),
    new Project(3, "Project 3"),
    new Project(4, "Project 4"),
    new Project(5, "Project 5"),
  ];

  function projectClicked(project: Project) {
    onProjectClicked(project);
  }

  return (
    <>
      <div>
        <span>Project Repository</span>
        <ol>
          {projects.map(project => {
            return <li
              key={project.id}
              onClick={()=>{projectClicked(project)}}
            >
              {project.title}
            </li>
          })}
        </ol>
      </div>
    </>
  )
}

export default Repository
