import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllReview = () => {
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState("rating");
  const [filterOption, setFilterOption] = useState("Select");

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

  const handleDetails = () => {
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
  };

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
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="flex  mb-4 px-6 my-4">
          <select onChange={handleFilterOption} className="mr-4 p-2 rounded">
            <option value="Select">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Shooter">Shooter</option>
            <option value="RPG">RPG</option>
          </select>
          <button onClick={handleFilter} className="btn">
            Filter
          </button>
        </div>
        <h1 className="text-3xl font-bold ">All Review</h1>
        <div className="flex justify-end mb-4 px-6 my-4">
          <select
            onChange={handleSortOptionChange}
            value={sortOption}
            className="mr-4 p-2 rounded"
          >
            <option value="rating">Sort by Rating</option>
            <option value="year">Sort by Year</option>
          </select>

          <button onClick={handleSortClick} className="btn p-2 rounded">
            Sort Descending Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {reviews.map((review) => (
          <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
              <img src={review.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{review.title}</h2>
              <p className="font-bold text-gray-500  rounded-full">
                {review.genre}
              </p>
              <p>Rating: {review.rating}</p>
              <p>Year: {review.year}</p>
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
