import React, { useEffect, useState } from "react";

const RecentGames = ({ dark }) => {
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/reviews", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const sortedGames = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setRecent(sortedGames.slice(0, 4));
      });
  });
  return (
    <section className=" py-10 mt-4 dark:text-base-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 ">
          Recent Added Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
          {recent.map((game) => (
            <div
              key={game._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden  dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              <img
                src={game.photo}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 ">
                <h3 className="text-xl font-bold dark:text-gray-200">
                  {game.title}
                </h3>
                <p className="text-gray-500">Rating: {game.rating}</p>
                <p className="text-gray-500">{game.genre}</p>
                <p className="text-gray-700 mt-2 dark:text-gray-500">
                  {game.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentGames;
