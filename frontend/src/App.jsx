import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Academic from "./pages/Academic";
import ProgramDetail from "./pages/ProgramDetail";
import Gallery from "./pages/Gallery";
import Cells from "./pages/Cells";
import Facilities from "./pages/Facilities";
import Apply from "./pages/Apply";
import Notice from "./pages/Notice";
import Results from "./pages/Results";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/academic/:id" element={<ProgramDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cells-units" element={<Cells />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/admissions" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notices" element={<Notice />} />
        <Route path="/results" element={<Results />} />
      </Routes>

      <Footer />

      <Chatbot />
    </>
  );
}

export default App;
