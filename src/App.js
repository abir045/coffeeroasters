import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import CreatePlan from "./components/pages/CreatePlan";
import { OrderContent, homeContent } from "./components/dataList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home content={homeContent} />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreatePlan content={OrderContent} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
