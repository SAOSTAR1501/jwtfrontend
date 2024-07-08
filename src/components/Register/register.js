import "./Register.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Register = (props) => {
  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  //   useEffect(() => {
  //     axios.get("https://reqres.in/api/users?page=2").then((data) => {
  //       console.log("data: ", data);
  //     });
  //   }, []);
  return (
    <div className="register-container ">
      <div className="container">
        <div class="row px-3 px-sm-0">
          <div class="content-left col-12 col-sm-7 d-sm-block d-none">
            <div className="brand">SaoStar</div>
            <div className="detail">Learning JWT...</div>
          </div>
          <div class="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3 ">
            <div className="brand d-sm-none text-center">SaoStar</div>.
            <div class="form-group">
              <label htmlFor="email" class="form-label">
                Email
              </label>
              <input
                name="email"
                className="form-control"
                type="text"
                placeholder="Emai address or your phone number"
              />
              {/* <small id="helpId" class="text-muted">
                Help text
              </small> */}
            </div>
            <div class="form-group">
              <label htmlFor="phonenumber" class="form-label">
                Phone number
              </label>
              <input
                name="phonenumber"
                className="form-control"
                type="text"
                placeholder="Phone number"
              />
            </div>
            <div class="form-group">
              <label htmlFor="username" class="form-label">
                Username
              </label>
              <input
                name="username"
                className="form-control"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <label htmlFor="password" class="form-label">
                Password
              </label>
              <input
                name="password"
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label htmlFor="confirmpassword" class="form-label">
                Confirm password
              </label>
              <input
                name="confirmpassword"
                className="form-control"
                type="password"
                placeholder="Confirm password"
              />
            </div>
            <button className="btn btn-primary">Register</button>
            <hr />
            <span className="text-center">
              <a className="forgot-password" href="#">
                Already have an account?
              </a>
            </span>
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleLogin()}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
