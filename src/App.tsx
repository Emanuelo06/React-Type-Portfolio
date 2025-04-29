import LinesBackground from "./components/LinesBackground";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden p-4 md:pl-48">

      <LinesBackground />
      <Navbar/>
      <About/> 
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;