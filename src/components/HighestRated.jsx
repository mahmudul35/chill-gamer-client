import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HighestRated = ({ dark }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://chill-gamer-server-nu.vercel.app/highestRated", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 dark:text-base-100">
        Highest Rated Game
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8 dark:text-base-100">
        {reviews.map((review) => (
          <div key={review.id} className="card bordered">
            <figure>
              <img
                src={review.photo}
                alt={review.title}
                className="w-[350px] mt-2 rounded-lg h-[210px]"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{review.title}</h2>

              <p>Rating: {review.rating}</p>
              <p>Publising Year: {review.year.slice(0, 4)}</p>
              <p>Genre: {review.genre}</p>
              <Link to={`/reviewDetails/${review._id}`} className="btn">
                Explore Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
