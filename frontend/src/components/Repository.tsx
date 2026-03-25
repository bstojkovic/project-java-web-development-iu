import type { ProjectProps } from "../App";
import Project from "./Project";

interface RepositoryProps {
  onProjectClicked: Function,
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
      </div>
    </>
  )
}

export default Repository
