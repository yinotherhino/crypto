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
import Products from "./pages/Products";
import Footer from "./components/Sections/Footer/Footer";
import Deposit from "./pages/Deposit";
import Legal from "./pages/Legal";

const App = () => {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Trading />} path="/trading" />
          <Route element={<Deposit />} path="/deposit" />
          <Route element={<Products />} path="/products" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Verify />} path="/verify" />
          <Route element={<Legal />} path="/legal" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
