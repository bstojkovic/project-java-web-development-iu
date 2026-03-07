import { useState } from 'react';
import './App.css';

import Repository from './components/Repository';
import ProjectForm from './components/ProjectForm';

export class Project {
  id: number
  title: string
  description: string
  completion: number

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.description = "";
    this.completion = 0;
  }
}

const projects = [
  new Project(1, "Project 1"),
  new Project(2, "Project 2"),
  new Project(3, "Project 3"),
  new Project(4, "Project 4"),
  new Project(5, "Project 5"),
];

function App() {
  const [currentViewStr, setCurrentViewStr] = useState('repository');
  const [currentProject, setCurrentProject] = useState(new Project(0, ''));

  function setCurrentView(viewName: string) {
    setCurrentViewStr(viewName);
  }

  function onProjectClicked(project: Project) {
    setCurrentProject(project);
    setCurrentView('project');
  }

  function onFormCancelled() {
    setCurrentView('repository');
  }

  function onProjectSubmitted(formData: FormData) {
    currentProject.title = String(formData.get("title"));
    currentProject.description = String(formData.get("description"));
    currentProject.completion = Number(formData.get("completion"));
    setCurrentView('repository');
  }

  return (
    <>
      <div>
        {
          currentViewStr == 'repository' ?
          <Repository onProjectClicked={onProjectClicked} projects={projects}/> :
          <ProjectForm
            currentProject={currentProject}
            onFormCancelled={onFormCancelled}
            onProjectSubmitted={onProjectSubmitted}
          />
        }
      </div>
    </>
  )
}

export default App
