import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Dashboard, About, Deposit, Home, Legal, Trading, Profile, Security, Verify, Products, Withdraw, Reset} from "./pages"
import {Layout, Footer} from "./components";

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
          <Route element={<Withdraw />} path="/withdraw" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Verify />} path="/verify" />
          <Route element={<Reset />} path="/reset-password" />
          <Route element={<Legal />} path="/legal" />
          <Route element={<Security />} path="/security" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
