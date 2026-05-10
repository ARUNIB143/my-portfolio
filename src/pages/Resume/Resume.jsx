import "./Resume.css"

function Resume(){
    return(
         <section id="resume" className="resume-section">

      <h2 className="resume-title">Resume</h2>

      <p className="resume-desc">
        My professional journey, experience, and technical skills.
      </p>

      <div className="resume-container">

        {/* LEFT SIDE */}
        <div className="resume-left">

          <div className="resume-item">
            <h3>Experience</h3>

            <div className="timeline">

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h4>Software Developer</h4>
                  <span>Technocraft Industry (India) Ltd | 2024 - Present</span>

                  <p>
                    Developing industrial and web applications using
                    Dot.Net, Blazor, C#, SQL Server, Excel automation, and dashboards.
                    Writing backend logic to handle real-time data processing,
                    reporting, and complex SQL queries.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h4>Full Stack Development Intern</h4>
                  <span>Varcons Pvt technologies Ltd | Oct 2022 - Nov 2022</span>

                  <p>
                    Developed and learned a lot about how a website is built and deployed.
                    How a frontend and backend works with storage of data database.
                    Using Web technologies and UI/UX Design standards along with VS code editor.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="resume-item">
            <h3>Education</h3>

            <div className="timeline">

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h4>Bachelor of Technology</h4>
                  <span>KLE DR. M. SHESHGIRI COLLEGE OF ENGINEERING AND TECHNOLOGY | 2019 - 2023</span> <br/>
                  <span>Visvesvaraya Technology University</span>

                  <p>
                    I have compelted my Compter Science Engineering here. Learned a lot of thing about the tech.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h4>Pre University</h4>
                  <span>RLS PU Science College Belagavi | 2018 - 2019</span>

                  <p>
                    Greatefull to be in one for the reputed Pre University and learned a lot.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="resume-right">

          <div className="skills-card">
            <h3>Technical Skills</h3>

            <div className="skills-list">
              <span>C#</span>
              <span>C++</span>
              <span>ASP.Net Framework</span>
              <span>Blazor</span>
              <span>SQL Server</span>
              <span>HTML5</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Bootstrap</span>
              <span>Git/GitHub</span>
              <span>Docker</span>
              <span>CI/CD Pipelines</span>
              <span>AWS</span>
              <span>Automation</span>
              <span>Postman</span>
              <span>VS code</span>
            </div>
          </div>

          <div className="resume-download">
            <a href="ArunBelagavi_Resume_2025.pdf" download>
              Download CV
            </a>
          </div>

        </div>

      </div>

    </section>
    );
}

export default Resume;