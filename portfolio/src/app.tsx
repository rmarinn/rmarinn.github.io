import { useLocation } from "react-router-dom";
import Flowfield from "./components/Flowfield";

import "./assets/scss/App.scss";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Flowfield id="flow-field" />
      <AnimatePresence mode="wait">
        <Routes key={location.key} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
