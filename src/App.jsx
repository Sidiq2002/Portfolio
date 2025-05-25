import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";
import { Skills } from "./Pages/Skills";
import { ScrollTotop } from "./Components/ScrollTotop";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = `Portfolio ${location.pathname}`;
  }, [location]);

  return (
    <>
      <ScrollTotop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="Home" element={<Home />} />
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
