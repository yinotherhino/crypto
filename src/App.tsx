import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Modal from "./components/Modals/Modal";
import { useState } from "react";
import Form from "./components/Modals/Form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { changeAuth } from "./redux/slices/NavbarSlice";

function App() {
  // const [isAuthOpen, setIsAuthOpen] = useState(false)
  const dispatch = useDispatch();
  const showAuth = useSelector((state: RootState) => state.navbar.showAuth);

  return (
    <>
      <Modal
        isOpen={Boolean(showAuth)}
        closeModal={() => dispatch(changeAuth(null))}>
        <Form />
      </Modal>
      <Router>
        <Layout />
        <Routes>
          <Route element={<Home />} path="/" />
          {/* <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/' /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
