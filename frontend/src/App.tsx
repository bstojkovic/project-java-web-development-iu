import { useState } from 'react'
import './App.css'

import Repository from './components/Repository'
import ProjectForm from './components/ProjectForm';

function App() {
  const [currentViewStr, setCurrentViewStr] = useState('repository');

  function switchView() {
    if (currentViewStr == 'repository') {
      setCurrentViewStr('project');
    } else if (currentViewStr == 'project') {
      setCurrentViewStr('repository');
    }
  }

  function currentView() {
    if (currentViewStr == 'repository') {
      return Repository()
    } else if (currentViewStr == 'project') {
      return ProjectForm()
    }
  }

  return (
    <>
      <div>
        <button onClick={switchView}>Switch view</button>
        <br></br>
        {currentView()}
      </div>
    </>
  )
}

export default App
