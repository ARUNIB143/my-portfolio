import "./Projects.css"
import { FaCode, FaDatabase, FaRobot, FaChartBar, FaGlobe, FaMobileAlt } from "react-icons/fa"

function Projects() {
  return (
   <section id="projects" className="projects-section">
    
    <h2 className="projects-title">Projects</h2>

    <p className="projects-desc">
      Below are the projects that I have worked/contributed on. Through these project I have learned different part of the technologies used,
      and I got lot to learn form them.
    </p>

    <div className="projects-container">
      
      <div className="project-card">
        <div className="icon"><FaRobot /></div>
         <div className="project-content">
          <h3>Robot Monitoring System</h3>
          <p>Built a real-time dashboard using Blazor and PLC integration to monitor robot operations.</p>
        </div>
      </div>

      <div className="project-card">
          <div className="icon"><FaDatabase /></div>
          <div className="project-content">
            <h3>Data Collector</h3>
            <p>Developed a console app to collect machine data and store it in SQL Server automatically.</p>
          </div>
      </div>

      <div className="project-card">
        <div className="icon"><FaChartBar /></div>
        <div className="project-content">
          <h3>Efficiency Dashboard</h3>
          <p>Created charts using Chart.js to visualize machine efficiency and production trends.</p>
        </div>
      </div>

      <div className="project-card">
        <div className="icon"><FaCode /></div>
        <div className="project-content">
          <h3>Excel Automation Tool</h3>
          <p>Automated Excel reports with dynamic formulas using ClosedXML and C#.</p>
        </div>
      </div>

      <div className="project-card">
        <div className="icon"><FaGlobe /></div>
        <div className="project-content">
          <h3>Portfolio Website</h3>
          <p>Designed and built a responsive portfolio using React and modern UI styling.</p>
        </div>
      </div>

      <div className="project-card">
        <div className="icon"><FaMobileAlt /></div>
        <div className="project-content">
          <h3>Future Mobile App</h3>
          <p>Currently exploring mobile development with React Native for cross-platform apps.</p>
        </div>
      </div>

    </div>

   </section>
  );
}

export default Projects;