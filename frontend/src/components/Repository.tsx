function Repository() {
  var projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
    { id: 4, title: "Project 4" },
    { id: 5, title: "Project 5" },
  ];

  return (
    <>
      <div>
        <span>Project Repository</span>
        <ol>
          {projects.map(project => {
            return <li key={project.id}>{project.title}</li>
          })}
        </ol>
      </div>
    </>
  )
}

export default Repository
