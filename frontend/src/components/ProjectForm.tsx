import { Project } from "../App";

function ProjectForm(project: Project) {
  function formSubmit() {
    console.log("Form submitted!");
  }

  return (
    <>
      <div>
        <span>Project Form</span>
        <form action={formSubmit}>
          <label htmlFor="title">Project title: </label>
          <input placeholder="Type in a title..." aria-label="title" value={project.title}></input>
          <br></br>

          <label htmlFor="description">Project description: </label>
          <input placeholder="Type in a description..." aria-label="description"></input>
          <br></br>

          <label htmlFor="completion">Completion percentage: </label>
          <input type="number" min="0" max="100" aria-label="completion" defaultValue="0" />
          <span>%</span>
          <br></br>
          
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default ProjectForm
