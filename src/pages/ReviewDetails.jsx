import React, { useContext, useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaGamepad,
  FaStar,
  FaUserAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
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
  }, [id]);

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
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to WatchList",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mt-10 container mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center text-pink-800 mb-6">
        {review ? review.title : "Loading..."}
      </h1>

      {review && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Game Image Section */}
          <div className="w-full md:w-2/5 lg:w-1/3 rounded-lg overflow-hidden shadow-lg">
            <img
              src={review.photo}
              alt={review.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Game Details Section */}
          <div className="w-full md:w-3/5 lg:w-2/3">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
                {review.title}
              </h2>
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 mr-2" />
                <span className="text-lg font-medium">{review.rating} / 5</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {review.review}
              </p>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div className="flex items-center">
                  <FaGamepad className="text-pink-800 mr-2" />
                  <p className="text-gray-600 dark:text-gray-400">
                    {review.genre}
                  </p>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-pink-800 mr-2" />
                  <p className="text-gray-600 dark:text-gray-400">
                    {review.year}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div className="flex items-center">
                  <FaUserAlt className="text-pink-800 mr-2" />
                  <p className="text-gray-600 dark:text-gray-400">
                    {review.username}
                  </p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-pink-800 mr-2" />
                  <p className="text-gray-600 dark:text-gray-400">
                    {review.email}
                  </p>
                </div>
              </div>

              {/* WatchList Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleWatchList}
                  className="bg-pink-800 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300"
                >
                  Add to WatchList
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewDetails;
