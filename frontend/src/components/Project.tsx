import type { ProjectProps } from "../App";

function Project(props: ProjectProps, onProjectClicked: Function) {
  function projectClicked() {
    onProjectClicked(props);
  }

  return (
    <li
        key={props.id}
        onClick={()=>{projectClicked()}}
    >
        <div>{props.title}</div>
        <div>Description: <em>{props.description}</em></div>
        <div>Completion: {props.completion}%</div>
    </li>
  )
}

export default Project
