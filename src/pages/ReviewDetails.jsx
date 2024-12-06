import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ReviewDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/reviewDetails/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const handleWatchList = () => {
    fetch("http://localhost:3000/watchList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
