import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Unknown from "./pages/Unknown";
import AccessLog from "./pages/AccessLog";
import User from "./pages/User";
import Login from "./pages/Login";
import Layout from "./components/common/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/unknown" element={<Unknown />} />
            <Route path="/access" element={<AccessLog />} />
            <Route path="/user" element={<User />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
