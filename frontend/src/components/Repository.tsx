import type { ProjectProps } from "../App";
import Project from "./Project";

interface RepositoryProps {
  onProjectClicked: Function,
  onProjectAdd: Function,
  projects: ProjectProps[],
}

function Repository(props: RepositoryProps) {
  function projectClicked(projectProps: ProjectProps) {
    props.onProjectClicked(projectProps);
  }

  return (
    <>
      <div>
        <span>Project Repository</span>
        <ol>
          {props.projects.map(projectProps => {
            return Project(projectProps, projectClicked)
          })}
        </ol>
        <button onClick={() => {props.onProjectAdd()}}>Add a Project</button>
      </div>
    </>
  )
}

export default Repository
