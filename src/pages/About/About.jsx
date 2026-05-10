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
            I am very curious person, If some thing I like then I deep dive into it, my enthusiasm peaks when I do something I like.
            Hunger to learn kind of person you can say, I belive in what I do and what surrounds me.
          </p>
          <p>
            I enjoy working with modern technologies, solving real world problems, and continuously learning new tools and frameworks.
            My interests include web development, backend systems, and building projects that improve user experience.
            Oh yaa I am a huge fan of Uzumaki Naruto.
          </p>

          <div className="about-info">
            <p><strong>Experience:</strong> 2+ Years / Learning and growing</p>
            <p><strong>Skills:</strong> Currently Learnig React</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;