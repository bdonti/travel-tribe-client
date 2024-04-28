import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const { signUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
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

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location.state ? location.state : "/");
        toast.success("Logged in Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginErrorMessage(errorMessage);
      });
  };

  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
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
              <div>
                <svg className="w-full bg-slate-600" height="1">
                  <line
                    x1="10"
                    y1="10"
                    x2="90"
                    y2="90"
                    style={{ stroke: "black", strokeWidth: 2 }}
                  />
                </svg>
              </div>
            </form>
            <div className="flex flex-col justify-center items-center mb-5 font-bold">
              <p>Social Links</p>
              <div className="space-x-5 mt-5">
                <button onClick={handleSignInWithGoogle} className="text-xl">
                  <FaGoogle className="inline" />
                </button>
                <button onClick={handleSignInWithGithub} className="text-xl">
                  <FaGithub className="inline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
