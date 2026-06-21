import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import MainLayout from "./Layout/MainLayout";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Industries from "./Industries/Industries";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Packages from "./Pages/Packages/Packages";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Packages />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
