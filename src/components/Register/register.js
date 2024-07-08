import "./Register.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  };
  const [checkInput, setCheckInput] = useState(defaultValidInput);
  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    let check = isValidInput();
    if (check === true) {
      axios.post("http://localhost:8888/api/v1/register", {
        email,
        phone,
        username,
        password,
      });
    }
  };

  const isValidInput = () => {
    setCheckInput(defaultValidInput);

    //check email
    if (!email) {
      toast.error("Email is required!");
      setCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }
    let regxEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regxEmail.test(email)) {
      toast.error("Please enter a valid email!");
      setCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }

    if (!phone) {
      toast.error("Phone number is required!");
      setCheckInput({ ...defaultValidInput, isValidPhone: false });
      return false;
    }
    if (!username) {
      toast.error("Username is required!");
      return false;
    }
    if (!password) {
      toast.error("Password is required!");
      setCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }

    if (password != confirmPassword) {
      toast.error("Password did not match!");
      setCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
      return false;
    }

    return true;
  };

  useEffect(() => {
    // axios.get("http://localhost:8888/api/v1/test-api").then((data) => {
    //   console.log("data: ", data);
    // });
  }, []);
  return (
    <div className="register-container ">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 col-sm-7 d-sm-block d-none">
            <div className="brand">SaoStar</div>
            <div className="detail">Learning JWT...</div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3 ">
            <div className="brand d-sm-none text-center">SaoStar</div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className={
                  checkInput.isValidEmail
                    ? "form-control"
                    : "form-control is-invalid"
                }
                name="email"
                type="text"
                placeholder="Emai address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {/* <small id="helpId" className="text-muted">
                Help text
              </small> */}
            </div>
            <div className="form-group">
              <label htmlFor="phonenumber" className="form-label">
                Phone number
              </label>
              <input
                name="phonenumber"
                className={
                  checkInput.isValidPhone
                    ? "form-control"
                    : "form-control is-invalid"
                }
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                name="username"
                className="form-control"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                name="password"
                className={
                  checkInput.isValidPassword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword" className="form-label">
                Confirm password
              </label>
              <input
                name="confirmpassword"
                className={
                  checkInput.isValidConfirmPassword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleRegister()}
            >
              Register
            </button>
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
