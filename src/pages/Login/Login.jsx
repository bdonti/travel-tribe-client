import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const { signUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(location.state ? location.state : "/");
        toast.success("Logged in Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginErrorMessage(errorMessage);
      });
  };
  return (
    <div>
      <h1 className="font-bold text-center mt-5">Please Login</h1>
      <div className="hero">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <Link
                    to={"/register"}
                    className="label-text-alt link link-hover"
                  >
                    Do not have any account? Please Register Now
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="font-bold text-red-500 text-center my-2">
                {loginErrorMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
