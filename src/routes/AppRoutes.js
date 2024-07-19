import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/login";
import Register from "../components/Register/register";
import Users from "../components/ManageUsers/Users";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/users" element={<PrivateRoutes element={<Users />} />} />
        <Route
          path="/projects"
          element={<PrivateRoutes element={<div>Projects</div>} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
