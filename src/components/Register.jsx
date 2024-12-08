import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const Register = () => {
  const navigate = useNavigate();
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password should be atleast 6 characters, with 1 uppercase, 1 lowercase letter"
      );
      return;
    }
    signUp(email, password)
      .then((result) => {
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          navigate("/");
        });
        const newUser = { name, email };
        fetch("https://chill-gamer-server-nu.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      })
      .catch((error) => {});
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
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
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <span
              onClick={togglePassword}
              className="absolute top-[67.5%] right-11 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-center pb-5">
          Already Have an account?{" "}
          <NavLink to="/auth/login" className="font-bold ">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
