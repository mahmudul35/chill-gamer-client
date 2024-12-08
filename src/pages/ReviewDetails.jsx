import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const ReviewDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://chill-gamer-server-nu.vercel.app/reviewDetails/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const handleWatchList = () => {
    const watchListData = {
      username: review.username,
      email: review.email,
      title: review.title,
      gameId: review._id,
      photo: review.photo,
      genre: review.genre,
      rating: review.rating,
      review: review.review,
      year: review.year.slice(0, 4),
      userEmail: user.email,
    };

    fetch("https://chill-gamer-server-nu.vercel.app/watchList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchListData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Added to WatchList");
        }
      });
  };
  return (
    <div className="mt-6">
      <h1>Review Details</h1>

      {review && (
        <div className="flex items-center justify-center ">
          <div className="card  bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={review.photo}
                className="rounded-lg w-64 p-3"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title items-start">
                {review.title}
                <button
                  onClick={handleWatchList}
                  className="badge h-11 w-[200px] badge-secondary"
                >
                  Add to WatchList
                </button>
              </h2>
              <p>{review.review}</p>
              <p>Rating: {review.rating}</p>
              <p>Genre: {review.genre}</p>
              <p>Review By: {review.username}</p>
              <p>Email: {review.email}</p>

              {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewDetails;
