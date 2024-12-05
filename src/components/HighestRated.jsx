import React, { useEffect, useState } from "react";

const HighestRated = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/highestRated", {
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
      <h1 className="text-2xl font-bold">Highest Rated Game</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {reviews.map((review) => (
          <div key={review.id} className="card bordered">
            <figure>
              <img
                src={review.photo}
                alt={review.title}
                className="w-[350px] mt-2 rounded-lg"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{review.title}</h2>

              <p>{review.rating}</p>
              <p>{review.year}</p>
              <p>{review.genre}</p>
              <button className="btn">Explore Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
