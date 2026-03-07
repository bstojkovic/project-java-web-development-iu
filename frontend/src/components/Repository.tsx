import { Project } from "../App";

interface RepositoryProps {
  onProjectClicked: Function,
  projects: Project[],
}

function Repository(props: RepositoryProps) {
  function projectClicked(project: Project) {
    props.onProjectClicked(project);
  }

  return (
    <>
      <div>
        <span>Project Repository</span>
        <ol>
          {props.projects.map(project => {
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
