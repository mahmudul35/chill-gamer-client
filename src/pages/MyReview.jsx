import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const email = user.email;
  fetch(`http://localhost:3000/reviews`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => setReviews(data));
  const filteredReviews = reviews.filter((review) => review.email === email);
  return (
    <div>
      <h1>My Review</h1>

      {filteredReviews.map((review) => (
        <div key={review._id}>
          <h2>{review.title}</h2>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default MyReview;
