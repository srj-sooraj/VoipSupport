import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Platforms from "../pages/Platforms";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Solutions from "../pages/Solutions";
import CaseStudies from "../pages/CaseStudies";
import BookDemo from "../pages/BookDemo";
import ScrollToTop from "../components/layout/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;