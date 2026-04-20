import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/Projects";
import "./App.css";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
    <Footer />
    </BrowserRouter>
  );
}

export default App;