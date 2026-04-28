import "./About.css"

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        {/* Left side (Image) */}
        <div className="about-image">
          <img src="/narutoimage.jpg" alt="profile" />
        </div>

        {/* Right side (Conent) */}
        <div className="about-content">
          <h3>I'm Arun, a Developer</h3>

          <p>
            I am man of focus, commitment, sheer will, something you know very little about.
            I am curious, Enthusiastic, Amazing, Creative, Hunger to learn kind of person.
            I belive in what I do and what surrounds me.
            Oh yaa I am a huge fan of Uzumaki Naruto.
          </p>

          <div className="about-info">
            <p><strong>Experience:</strong> Fresher / Learning</p>
            <p><strong>Skills:</strong> Blazor, React, JavaScript</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;