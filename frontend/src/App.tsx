import { useState } from 'react';
import './App.css';

import Repository from './components/Repository';
import ProjectForm from './components/ProjectForm';

export interface ProjectProps {
  id: number
  title: string
  description: string
  completion: number
}

const projects = [
  {id: 1, title: "Project 1", description: "Test", completion: 0}
];

function App() {
  const [currentViewStr, setCurrentViewStr] = useState('repository');
  const [currentProject, setCurrentProject] = useState(projects[0]);

  function setCurrentView(viewName: string) {
    setCurrentViewStr(viewName);
  }

  function onProjectClicked(project: ProjectProps) {
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
