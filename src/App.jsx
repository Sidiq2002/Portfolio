import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";
import { Skills } from "./Pages/Skills";
import { ScrollTotop } from "./Components/ScrollTotop";

function App() {
  return (
    <>
      <ScrollTotop />
      <div className="App">
        {/* Global 3D Snow Background - Train Removed */}
        <div className="metro-bg-wrapper">
          <div className="snow-model near"></div>
          <div className="snow-model mid"></div>
          <div className="snow-model far"></div>
        </div>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;