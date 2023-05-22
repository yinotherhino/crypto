import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Platform from "./pages/Platform";
import Trading from "./pages/Trading";
import { useEffect } from "react";
import Verify from "./pages/Verify";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          {/* <Route element={<Platform />} path="/platform" /> */}
          <Route element={<Trading />} path="/trading" />
          <Route element={<Trading />} path="/trading" />
          <Route element={<Trading />} path="/trading" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Verify />} path="/verify" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
