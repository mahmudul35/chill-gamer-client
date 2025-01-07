import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "react-tooltip/dist/react-tooltip.css";

const TopGamesOfTheWeek = ({ dark }) => {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-nu.vercel.app/topGamesOfTheWeek")
      .then((res) => res.json())
      .then((data) => setTopGames(data))
      .catch((error) => {});
  }, []);

  return (
    <section className="bg-gray-100 py-10 dark:text-base-100  dark:bg-slate-900 ">
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold text-pink-800 text-center mb-6 dark:text-base-100">
          Top Games of the Week
        </h2>
        <Marquee gradient={false} speed={100} className="flex items-center">
          {topGames.map((game) => (
            <div
              key={game._id}
              className="flex-shrink-0 w-72 h-80 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer  mr-7 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              <img
                src={game.photo}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{game.title}</h3>
                <p className="text-sm text-gray-500">Genre: {game.genre}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TopGamesOfTheWeek;
