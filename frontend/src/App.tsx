import { useState } from 'react'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('repository');

  function switchView() {

    if (currentView == 'repository') {
      setCurrentView('project');
    } else if (currentView == 'project') {
      setCurrentView('repository');
    }
  }

  return (
    <>
      <div>
        <span>Current view: {currentView}</span>
        <br />
        <button onClick={switchView}>Switch view</button>
      </div>
    </>
  )
}

export default App
