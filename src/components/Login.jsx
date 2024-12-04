import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    signIn(email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        setError("Invalid email or password. Please try again.");
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        setError("Failed to sign in with Google. Please try again.");
      });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <span
              onClick={togglePassword}
              className="absolute top-[35.5%] right-11 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <label className="label">Forgot password?</label>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="divider px-8">OR</div>
        <div className="form-control mt-1 px-8">
          <button onClick={handleGoogleLogin} className="btn  bg-base-100">
            <FaGoogle /> Login with Google
          </button>
        </div>
        <p className="text-center py-5">
          Don't Have an account?{" "}
          <NavLink to="/auth/register" className="font-bold ">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
