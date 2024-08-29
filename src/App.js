import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurWork from "./Pages/OurWork";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourportfolio" element={<OurWork />} />
      </Routes>
    </Router>
  );
}

export default App;
