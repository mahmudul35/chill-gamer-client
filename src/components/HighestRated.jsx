import React, { useContext, useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import genre from "../assets/genre.png";
import { AuthContext } from "../context/AuthProvider";
const HighestRated = ({ dark }) => {
  const [reviews, setReviews] = useState([]);
  const { loading } = useContext(AuthContext);
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
    <div className="py-6 container mx-auto">
      <h1 className="text-4xl font-bold text-pink-800 text-center mb-6 dark:text-base-100">
        Highest Rated Game
      </h1>
      {loading ? (
        <div className="flex  justify-center py-8">
          <span className="loading loading-bars loading-lg text-green-500"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mt-8 dark:text-base-100">
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

                <p>
                  <span className="flex items-center gap-1">
                    {" "}
                    <MdStarRate className="text-yellow-600" />
                    {review.rating}
                  </span>{" "}
                </p>
                <p className="flex items-center gap-2">
                  <SlCalender />
                  {review.year.slice(0, 4)}
                </p>
                <p className="flex items-center gap-2">
                  <img src={genre} className="w-5" alt="" /> {review.genre}
                </p>
                <Link
                  to={`/reviewDetails/${review._id}`}
                  className="btn bg-pink-800 text-white hover:bg-pink-700 hover:shadow-lg transition-all duration-300"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HighestRated;
