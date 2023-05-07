import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import About from "./pages/About";
import Platform from "./pages/Platform";
import Trading from "./pages/Trading";

function App() {
  // const [isAuthOpen, setIsAuthOpen] = useState(false)
  const dispatch = useDispatch();
  const showAuth = useSelector((state: RootState) => state.navbar.showAuth);
  // const formType = useSelector((state:RootState)=>state.form.formType)

  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Platform />} path="/platform" />
          <Route element={<Trading />} path="/trading" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
