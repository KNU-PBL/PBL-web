import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Unknown from "./pages/Unknown";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unknown" element={<Unknown />} />
        </Routes>
      </Router>
      <div></div>
    </>
  );
}

export default App;
