import React, { useContext, useEffect, useState } from "react";
import { FaFilter, FaSortAmountDownAlt, FaStar } from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AllReview = () => {
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState("rating");
  const [filterOption, setFilterOption] = useState("Select");
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://chill-gamer-server-nu.vercel.app/reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const sortReviews = (reviews, sortOption) => {
    const sortedReviews = [...reviews];
    sortedReviews.sort((a, b) => {
      if (sortOption === "rating") {
        return b.rating - a.rating;
      } else if (sortOption === "year") {
        const sliceYearB = b.year.slice(0, 4);
        const sliceYearA = a.year.slice(0, 4);
        return sliceYearB - sliceYearA;
      }
      return 0;
    });
    return sortedReviews;
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSortClick = () => {
    const sortedReviews = sortReviews(reviews, sortOption);
    setReviews(sortedReviews);
  };

  const handleFilterOption = (e) => {
    setFilterOption(e.target.value);
  };

  const handleFilter = () => {
    const filteredReviews = reviews.filter(
      (review) => review.genre === filterOption
    );
    setReviews(filteredReviews);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Filter Section */}
          <div className="flex mb-4 md:mb-0 space-x-4 items-center">
            <FaFilter className="text-pink-600 text-xl" />
            <select
              onChange={handleFilterOption}
              className="p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="Select">Select Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Shooter">Shooter</option>
              <option value="RPG">RPG</option>
            </select>
            <button
              onClick={handleFilter}
              className="btn bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-500 transition-all flex items-center"
            >
              <FaFilter className="mr-2" />
              Filter
            </button>
          </div>

          <h1 className="text-4xl font-extrabold text-center md:text-left text-pink-800">
            All Reviews
          </h1>

          {/* Sort Section */}
          <div className="flex justify-end space-x-4 items-center">
            <select
              onChange={handleSortOptionChange}
              value={sortOption}
              className="p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="rating">Sort by Rating</option>
              <option value="year">Sort by Year</option>
            </select>
            <button
              onClick={handleSortClick}
              className="btn bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-500 transition-all flex items-center"
            >
              <FaSortAmountDownAlt className="mr-2" />
              Sort Descending
            </button>
          </div>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center py-8">
            <span className="loading loading-bars loading-lg text-pink-600"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="card bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all"
              >
                <figure className="relative">
                  <img
                    src={review.photo}
                    alt={review.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 px-4 py-1 bg-black text-white rounded-md">
                    {review.genre}
                  </div>
                </figure>

                <div className="card-body p-6">
                  <h2 className="card-title text-xl font-semibold text-gray-800 mb-3">
                    {review.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">{review.review}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <FaStar className="text-yellow-400 mr-2" />
                    {review.rating} | <strong>Year:</strong>{" "}
                    {review.year.slice(0, 4)}
                  </p>
                  <div className="card-actions mt-4">
                    <Link
                      to={`/reviewDetails/${review._id}`}
                      className="btn bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-500 transition-all w-full text-center"
                    >
                      Explore Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReview;
