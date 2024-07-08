import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const handleCreateNewAccount = () => {
    navigate("/register");
  };
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
              className="form-control"
              type="text"
              placeholder="Emai address or your phone number"
            />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
            <button className="btn btn-primary">Login</button>
            <span className="text-center">
              <a className="forgot-password" href="#">
                Forgot your password?
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => handleCreateNewAccount()}
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
