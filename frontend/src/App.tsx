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
  const [projectInForm, setProjectInForm] = useState(projects[0]);
  const [projectFormMode, setProjectFormMode] = useState('edit');

  function setCurrentView(viewName: string) {
    setCurrentViewStr(viewName);
  }

  function onProjectClicked(project: ProjectProps) {
    setProjectFormMode('edit');
    setProjectInForm(project);
    setCurrentView('project');
  }
  
  function onProjectAdd() {
    setProjectFormMode('create');
    setProjectInForm({id: -1, title: "", description: "", completion: 0});
    setCurrentView('project');
  }

  function onFormCancelled() {
    setCurrentView('repository');
  }

  function onProjectSubmitted(formData: FormData) {
    var newTitle = String(formData.get("title"));
    var newDescription = String(formData.get("description"));
    var newCompletion = Number(formData.get("completion"));

    if (projectFormMode == 'edit') {
      projectInForm.title = newTitle;
      projectInForm.description = newDescription;
      projectInForm.completion = newCompletion;
    } else if (projectFormMode == 'create') {
      var newProject = {
        id: -1,
        title: newTitle,
        description: newDescription,
        completion: newCompletion
      }

      projects.push(newProject)
      setProjectInForm(newProject);
    }

    setCurrentView('repository');
  }

  return (
    <>
      <div>
        {
          currentViewStr == 'repository' ?
          <Repository onProjectClicked={onProjectClicked} onProjectAdd={onProjectAdd} projects={projects}/> :
          <ProjectForm
            currentProject={projectInForm}
            onFormCancelled={onFormCancelled}
            onProjectSubmitted={onProjectSubmitted}
          />
        }
      </div>
    </>
  )
}

export default App
