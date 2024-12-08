import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const email = user.email;

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure want to Delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-nu.vercel.app/reviews/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Review Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              const newReviews = reviews.filter((review) => review._id !== id);
              setReviews(newReviews);
            }
          });
      }
    });
  };

  const filteredReviews = reviews.filter((review) => review.email === email);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-8">My Review</h1>
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
                <th className="px-6 py-3 text-center">{index + 1}</th>
                <td className="px-6 py-3 text-center">{review.title}</td>
                <td className="px-6 py-3 text-center">{review.review}</td>
                <td className="px-6 py-3 text-center">{review.rating}</td>
                <td className="px-6 py-3 text-center">{review.genre}</td>
                <td className="px-6 py-3 space-x-2">
                  <div className="flex gap-4">
                    <Link
                      to={`/update/${review._id}`}
                      className="btn btn-outline text-blue-500 hover:bg-blue-100 px-4 py-2 rounded-md"
                    >
                      Edit
                    </Link>
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
