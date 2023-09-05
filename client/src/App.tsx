import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
   Dashboard,
   About,
   Deposit,
   Home,
   Legal,
   Trading,
   Profile,
   Security,
   Verify,
   Products,
   Withdraw,
   Reset,
   Rewards,
} from "./pages";
import { Layout, Footer } from "./components";
import ProtectRoute from "./components/ProtectRoute";
import DepositForm from "./components/Forms/DepositForm";
import Scroll from "./components/Scroll/Scroll";

const App = () => {
   return (
      <>
         <Router>
            <Layout />
            <DepositForm />

            <Routes>
               <Route element={<Home />} path="/" />
               <Route element={<About />} path="/about" />
               <Route element={<Rewards />} path="/rewards" />
               <Route element={<Trading />} path="/trading" />
               <Route element={<Deposit />} path="/deposit" />
               <Route element={<Products />} path="/products" />
               <Route
                  element={
                     <ProtectRoute>
                        <Withdraw />
                     </ProtectRoute>
                  }
                  path="/withdraw"
               />
               <Route
                  element={
                     <ProtectRoute>
                        <Profile />
                     </ProtectRoute>
                  }
                  path="/profile"
               />
               <Route
                  element={
                     <ProtectRoute>
                        <Dashboard />
                     </ProtectRoute>
                  }
                  path="/dashboard"
               />
               <Route element={<Verify />} path="/verify" />
               <Route element={<Reset />} path="/reset-password" />
               <Route element={<Legal />} path="/legal" />
               <Route
                  element={
                     <ProtectRoute>
                        <Security />
                     </ProtectRoute>
                  }
                  path="/security"
               />
               <Route element={<Scroll />} path="/scroll" />
            </Routes>
            <Footer />
         </Router>
      </>
   );
};

export default App;
