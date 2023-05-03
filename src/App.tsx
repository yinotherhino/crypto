import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Modal from "./components/Modals/Modal";
import RegisterForm from "./components/Forms/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { changeAuth } from "./redux/slices/NavbarSlice";
import LoginForm from "./components/Forms/LoginForm";

function App() {
  // const [isAuthOpen, setIsAuthOpen] = useState(false)
  const dispatch = useDispatch();
  const showAuth = useSelector((state: RootState) => state.navbar.showAuth);
  const formType = useSelector((state:RootState)=>state.form.formType)

  return (
    <>
      <Modal
        isOpen={Boolean(showAuth)}
        closeModal={() => dispatch(changeAuth(null))}>
        {formType=="register"?<RegisterForm />:<LoginForm />}
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
