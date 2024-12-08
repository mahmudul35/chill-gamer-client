import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [reviewData, setReviewData] = useState({
    photo: "",
    title: "",
    review: "",
    rating: "",
    year: "",
    genre: "",
    email: user.email,
    username: user.displayName,
  });

  useEffect(() => {
    fetch(`https://chill-gamer-server-nu.vercel.app/reviewDetails/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleUpdateReview = (e) => {
    e.preventDefault();
    fetch(`https://chill-gamer-server-nu.vercel.app/reviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedReview: reviewData, email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myreviews");
      })
      .catch((err) => {});
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Update Review</h1>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateReview} className="card-body">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                value={reviewData.photo}
                onChange={handleChange}
                placeholder="Photo URL"
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
                value={reviewData.title}
                onChange={handleChange}
                placeholder="Game Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Review Description</span>
              </label>
              <input
                type="text"
                name="review"
                value={reviewData.review}
                onChange={handleChange}
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
                type="number"
                name="rating"
                value={reviewData.rating}
                onChange={handleChange}
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Publishing Year</span>
              </label>
              <input
                type="date"
                name="year"
                value={reviewData.year}
                onChange={handleChange}
                placeholder="Year"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Genres</span>
              </label>
              <select
                name="genre"
                value={reviewData.genre}
                onChange={handleChange}
                className="h-[48px] px-6 rounded-lg input-bordered"
                required
              >
                <option value="">Select Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Shooter">Shooter</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={reviewData.email}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="username"
                value={reviewData.username}
                readOnly
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
