import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer"

function App() {
  return (
  <div>
    <Navbar />
    <Home />
    <About />
    <Resume />
    <Projects />  
    <Contact />
    <Footer />
  </div>
  );
}

export default App;