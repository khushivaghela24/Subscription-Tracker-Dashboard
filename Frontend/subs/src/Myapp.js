import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

export default function Myapp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}