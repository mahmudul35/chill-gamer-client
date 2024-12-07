import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HighestRated from "../components/HighestRated";
import RecentGames from "../components/RecentGames";
import TypingComponent from "../components/Typing";
const Home = () => {
  const loadedData = useLoaderData();
  return (
    <div>
      <div className="text-center mt-10">
        <TypingComponent />
      </div>
      <Banner />
      {/* {loadedData.map((review) => (
        <div key={review.id}>
          <h2>{review.title}</h2>
          <img src={review.photo} alt={review.title} />
          <p>{review.review}</p>
          <p>{review.rating}</p>
        </div>
      ))} */}

      <HighestRated />
      <RecentGames />
    </div>
  );
};

export default Home;
