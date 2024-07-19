import "./App.scss";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Router>
        <div className="app-header">
          <Nav />
        </div>
        <div className="app-container">
          <AppRoutes />
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
    </>
  );
}

export default App;
