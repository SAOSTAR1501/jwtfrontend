import "./App.scss";
import Login from "./components/Login/login";
// import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/register";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Router>
  );
}

export default App;
