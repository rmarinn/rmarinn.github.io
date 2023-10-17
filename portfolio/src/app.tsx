import { useLocation } from "react-router-dom";
import Flowfield from "./components/Flowfield";

import "./assets/scss/App.scss";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects, { Iris_Classifier_Proj } from "./routes/Projects";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.key} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/iris-classifier"
            element={<Iris_Classifier_Proj />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Flowfield id="flow-field" />
    </>
  );
};

export default App;
