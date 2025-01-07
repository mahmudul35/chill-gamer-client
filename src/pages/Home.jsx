import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HighestRated from "../components/HighestRated";
import RecentGames from "../components/RecentGames";
import SubscriptionPlans from "../components/Subscription";
import Testimonials from "../components/Testimonial";
import TypingComponent from "../components/Typing";
const Home = () => {
  const loadedData = useLoaderData();
  const [dark, setDark] = React.useState(false);
  // const darkModeHandler = () => {
  //   setDark(!dark);
  //   document.body.classList.toggle("dark");
  // };
  return (
    <div className="dark:bg-slate-900">
      <div className=" ">
        <div className="text-center mt-10">
          <TypingComponent dark={dark} />
        </div>
        {/* <div className="flex gap-4 justify-end items-center ">
          <h1 className="dark:text-base-100 hidden md:inline">
            Enable {!dark ? "Dark" : "Light"} Theme:{" "}
          </h1>
          <button
            onClick={() => darkModeHandler()}
            className="mr-5 dark:text-base-100 "
          >
            {dark && <IoSunny size={20} />}
            {!dark && <IoMoon size={20} />}
          </button>
        </div> */}
      </div>

      <Banner />

      {/* <TopGamesOfTheWeek dark={dark} /> */}
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
      <Testimonials />
      <SubscriptionPlans />
    </div>
  );
};

export default Home;
