import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HighestRated from "../components/HighestRated";
import TypingComponent from "../components/Typing";
const Home = () => {
  const loadedData = useLoaderData();
  return (
    <div>
      <Banner />
      {/* {loadedData.map((review) => (
        <div key={review.id}>
          <h2>{review.title}</h2>
          <img src={review.photo} alt={review.title} />
          <p>{review.review}</p>
          <p>{review.rating}</p>
        </div>
      ))} */}
      <TypingComponent />
      <HighestRated />
    </div>
  );
};

export default Home;
