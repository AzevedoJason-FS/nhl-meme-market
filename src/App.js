import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog"
import GetStarted from "./GetStarted";
import About from "./About";

const App = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/about-us" element={<About />} />
        {/* 
        <Route path="/services" element={<Blog />} />
        <Route path="/seo-optimization" element={<Blog />} />
        <Route path="/social-media-optimization" element={<Blog />} /> */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
