import React from "react";
import Navbar from "./NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homePage/homePage";
import Talk from "./TalkPage/Talk";
import WhyPage from "./WhyPage/WhyPage";
//all components are put here
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Talk" element={<Talk />} />
        <Route path="/WhyPage" element={<WhyPage />} />
      </Routes>
    </div>
  );
}

export default App;
