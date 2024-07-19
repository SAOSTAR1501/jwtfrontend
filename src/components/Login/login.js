import { useEffect, useState } from "react";
import "./Login.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";

const Login = (props) => {
  let navigate = useNavigate();
  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const defaultValidInput = {
    isValidValueLogin: true,
    isValidPassword: true,
  };
  const [checkInput, setCheckInput] = useState(defaultValidInput);

  const handleLogin = async () => {
    setCheckInput(defaultValidInput);

    if (!valueLogin) {
      setCheckInput({ ...defaultValidInput, isValidValueLogin: false });
      toast.warning("Please enter your email or phone number.");
      return;
    }
    if (!password) {
      setCheckInput({ ...defaultValidInput, isValidPassword: false });
      toast.warning("Please enter your password.");
      return;
    }

    let response = await loginUser(valueLogin, password);
    if (response && response.data && response.data.EC === 0) {
      //success
      let data = {
        isAuthenticated: true,
        token: "fake token",
      };
      sessionStorage.setItem("account", JSON.stringify(data));
      toast.success("Login successfully!");
      navigate("/users");
      window.location.reload();

      //redux
    }
    if (response && response.data && response.data.EC !== 0) {
      //success
      toast.error(response.data.EM);
    }
  };

  const handlePressEnter = (event) => {
    if (event.key === "Enter" && event.keyCode === 13) {
      handleLogin();
    }
  };

  useEffect(() => {
    const session = sessionStorage.getItem("account");

    if (session) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="login-container ">
      <div className="container">
        <div class="row px-3 px-sm-0">
          <div class="content-left col-12 col-sm-7 d-sm-block d-none">
            <div className="brand">SaoStar</div>
            <div className="detail">Learning JWT...</div>
          </div>
          <div class="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3 ">
            <div className="brand d-sm-none text-center">SaoStar</div>
            <input
              className={
                checkInput.isValidValueLogin
                  ? "form-control"
                  : "form-control is-invalid"
              }
              type="text"
              placeholder="Emai address or your phone number"
              value={valueLogin}
              onChange={(event) => {
                setValueLogin(event.target.value);
              }}
            />
            <input
              className={
                checkInput.isValidPassword
                  ? "form-control"
                  : "form-control is-invalid"
              }
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onKeyDown={(event) => handlePressEnter(event)}
            />
            <button className="btn btn-primary" onClick={() => handleLogin()}>
              Login
            </button>
            <span className="text-center">
              <a className="forgot-password" href="#">
                Forgot your password?
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => handleNavigateToRegister()}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
