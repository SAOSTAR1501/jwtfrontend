import "./App.scss";
import Login from "./components/Login/login";
// import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/register";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/news" element={<div>News</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
