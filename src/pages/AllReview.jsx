import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleDetails = () => {
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
  };
  return (
    <div className="card">
      <h1>All Review</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={review.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{review.title}</h2>
              <p className="font-bold text-gray-500  rounded-full">
                {review.genre}
              </p>
              <p>{review.review}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/reviewDetails/${review._id}`}
                  className="btn w-full"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
