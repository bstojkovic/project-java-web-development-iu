import { useState } from 'react'
import './App.css'

import Repository from './components/Repository'
import ProjectForm from './components/ProjectForm';

export class Project {
  id: number
  title: string

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}

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

  function currentView() {
    if (currentViewStr == 'repository') {
      return Repository({onProjectClicked});
    } else if (currentViewStr == 'project') {
      return ProjectForm(currentProject);
    }
  }

  return (
    <>
      <div>
        {currentView()}
      </div>
    </>
  )
}

export default App
