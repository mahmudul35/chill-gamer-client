import React from "react";
import { useLoaderData } from "react-router-dom";
import HighestRated from "../components/HighestRated";
const Home = () => {
  const loadedData = useLoaderData();
  return (
    <div>
      <h1>Home</h1>
      {/* {loadedData.map((review) => (
        <div key={review.id}>
          <h2>{review.title}</h2>
          <img src={review.photo} alt={review.title} />
          <p>{review.review}</p>
          <p>{review.rating}</p>
        </div>
      ))} */}
      <HighestRated />
    </div>
  );
};

export default Home;
