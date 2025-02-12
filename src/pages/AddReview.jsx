import React, { useContext } from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { AuthContext } from "../context/AuthProvider";
const AddReview = () => {
  const { user } = useContext(AuthContext);
  const handleAddReview = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const title = e.target.title.value;
    const review = e.target.review.value;
    const rating = e.target.rating.value;
    const year = e.target.year.value;
    const genre = e.target.genre.value;
    const email = e.target.email.value;
    const username = e.target.username.value;

    const reviewData = {
      photo,
      title,
      review,
      rating,
      year,
      genre,
      email,
      username,
    };

    fetch("https://chill-gamer-server-nu.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Review!</h1>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddReview} action="POST" className="card-body">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Game Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Game title"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Review Description</span>
              </label>
              <input
                type="text"
                name="review"
                placeholder="Review Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Publishing year</span>
              </label>
              <input
                type="date"
                name="year"
                placeholder="coffee supplier"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Genres </span>
              </label>
              <select
                name="genre"
                id=""
                className="h-[48px] px-6 rounded-lg input-bordered"
              >
                <option value="">Select Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Shooter">Shooter</option>
              </select>
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                readonly
                placeholder="User Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="User Name"
                className="input input-bordered"
                value={user.displayName}
                readonly
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-pink-800 text-white hover:bg-pink-700 hover:shadow-lg transition-all duration-300">
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
