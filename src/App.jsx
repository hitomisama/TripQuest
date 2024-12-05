import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/1_header.jsx";
import Footer from "./components/Footer.jsx";
import Page1 from "./page/Page1.jsx";
import Page2 from "./page/Page2.jsx";
import Page3 from "./page/Page3.jsx";
import Page4 from "./page/Page4.jsx";
import Page5 from "./page/Page5.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page2" element={<Page3 />} />
        <Route path="/page2" element={<Page4 />} />
        <Route path="/page2" element={<Page5 />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;