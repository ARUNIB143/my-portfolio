import "./Home.css"
import { useEffect, useState } from "react";

function Home() {
  const roles = ["Developer", "Frontend Developer", "Blazor Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

 useEffect(() => {
    const current = roles[index];

    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section id="home" className="home">
      <div className="overlay"></div>

      <div className="home-content">
        <h1>Hi, I'm Arun</h1>
        <h2>
          I am a <span className="typing">{text}</span>
        </h2>
      </div>
    </section>
  );
}

export default Home;