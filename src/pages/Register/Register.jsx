import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;

    if (!/[A-Z]/.test(password)) {
      setRegisterErrorMessage(
        "Password must have at least one uppercase letter."
      );
      return;
    }

    if (!/[a-z]/.test(password)) {
      setRegisterErrorMessage(
        "Password must have at least one lowercase letter."
      );
      return;
    }

    if (password.length < 6) {
      setRegisterErrorMessage("Password must have at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            toast.success("Created User Successfully");
            console.log("User created successfully:", user);
            setRegisterErrorMessage("");
            form.reset();
          })
          .catch((error) => {
            setRegisterErrorMessage(error.message);
            console.error("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        setRegisterErrorMessage(error.message);
        console.error("Error creating user:", error);
      });
  };

  return (
    <div>
      <h1 className="font-bold text-center">Please Register</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="url"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <p className="font-bold text-red-500 text-center my-2">
                  {registerErrorMessage}
                </p>
                <label className="label">
                  <Link
                    to={"/login"}
                    className="label-text-alt link link-hover"
                  >
                    Already have account? Please Login Now
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
