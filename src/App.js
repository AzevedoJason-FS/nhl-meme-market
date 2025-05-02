import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import GetStarted from "./GetStarted";
import About from "./About";
import FAQ from "./FAQ";
import WebDesign from "./WebDesign";
import GoogleProfile from "./GoogleProfile";
import SeoOptimization from "./SeoOptimization";
import SocialMedia from "./SocialMedia";
import NotFound from "./NotFound";
import Services from "./Services";

const App = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/website-development-and-design" element={<WebDesign />} />
        <Route path="/google-business-profile-optimization" element={<GoogleProfile />} />
        <Route path="/seo-optimization" element={<SeoOptimization />} />
        <Route path="/social-media-content-design" element={<SocialMedia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
