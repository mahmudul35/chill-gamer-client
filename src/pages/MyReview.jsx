import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const email = user.email;

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

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const newReviews = reviews.filter((review) => review._id !== id);
          setReviews(newReviews);
        }
      });
  };

  const filteredReviews = reviews.filter((review) => review.email === email);

  return (
    <div>
      <h1>My Review</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3  w-12">Serial</th>
              <th className="px-6 py-3  w-1/5">Game Name</th>
              <th className="px-6 py-3  w-2/5">Review</th>
              <th className="px-6 py-3  w-1/5">Rating</th>
              <th className="px-6 py-3  w-1/5">Genre</th>
              <th className="px-6 py-3  w-1/5">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews.map((review, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <th className="px-6 py-3">{index + 1}</th>
                <td className="px-6 py-3">{review.title}</td>
                <td className="px-6 py-3">{review.review}</td>
                <td className="px-6 py-3">{review.rating}</td>
                <td className="px-6 py-3">{review.genre}</td>
                <td className="px-6 py-3 space-x-2">
                  <div className="flex gap-4">
                    <button className="btn btn-outline text-blue-500 hover:bg-blue-100 px-4 py-2 rounded-md">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="btn bg-red-500 text-white hover:bg-red-100 px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
