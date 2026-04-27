function Projects() {
  const projectList = [
    {
      title: "Robot Monitoring System",
      description: "Real-time PLC monitoring dashboard using Blazor.",
      github: "https://github.com/yourusername/project1",
    },
    {
      title: "Shearing Data Dashboard",
      description: "Live production tracking system with SignalR integration.",
      github: "https://github.com/yourusername/project2",
    },
  ];

  return (
    <div id="projects" style={{ padding: "40px" }}>
      <h2>My Projects</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {projectList.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
              width: "250px",
            }}
          >
            <h3>{project.title}</h3>
            <p style={{ color: "gray" }}>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              style={{ color: "blue" }}
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;