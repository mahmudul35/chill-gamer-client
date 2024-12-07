import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HighestRated from "../components/HighestRated";
import RecentGames from "../components/RecentGames";
import TypingComponent from "../components/Typing";
const Home = () => {
  const loadedData = useLoaderData();
  const [dark, setDark] = React.useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="dark:bg-slate-900">
      <div className="flex gap-4 items-center justify-end mt-4 dark:py-6">
        <h1 className="dark:text-base-100">
          Enable {!dark ? "Dark" : "Light"} Theme:{" "}
        </h1>
        <button
          onClick={() => darkModeHandler()}
          className="mr-5 dark:text-base-100 "
        >
          {dark && <IoSunny size={20} />}
          {!dark && <IoMoon size={20} />}
        </button>
      </div>
      <div className="text-center mt-10">
        <TypingComponent dark={dark} />
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

      <HighestRated dark={dark} />
      <RecentGames dark={dark} />
    </div>
  );
};

export default Home;
