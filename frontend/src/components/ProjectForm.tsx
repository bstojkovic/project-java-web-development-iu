import { useState } from "react";
import { type ProjectProps } from "../App";

interface ProjectFormProps {
  currentProject: ProjectProps,
  onFormCancelled: Function,
  onProjectSubmitted: Function,
}

function ProjectForm(props: ProjectFormProps) {
  const [title, setTitle] = useState(props.currentProject.title);
  const [description, setDescription] = useState(props.currentProject.description);
  const [completion, setCompletion] = useState(props.currentProject.completion);

  function formSubmit(formData: FormData) {
    props.onProjectSubmitted(formData);
  }

  return (
    <>
      <div>
        <span>Project Form</span>
        <form action={formSubmit}>
          <label htmlFor="title">Project title: </label>
          <input placeholder="Type in a title..." aria-label="title" name="title" value={title} onChange={e => setTitle(e.target.value)}></input>
          <br></br>

          <label htmlFor="description">Project description: </label>
          <input placeholder="Type in a description..." aria-label="description" name="description" value={description} onChange={e => setDescription(e.target.value)}></input>
          <br></br>

          <label htmlFor="completion">Completion percentage: </label>
          <input type="number" min="0" max="100" aria-label="completion" name="completion" value={completion} onChange={e => setCompletion(Number(e.target.value))} />
          <span>%</span>
          <br></br>
          
          <button>Submit</button>
        </form>
        <button onClick={()=>{props.onFormCancelled()}}>Cancel</button>
      </div>
    </>
  )
}

export default ProjectForm
