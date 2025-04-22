import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
