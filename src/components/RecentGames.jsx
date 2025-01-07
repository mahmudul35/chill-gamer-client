import React, { useEffect, useState } from "react";
import { FaGamepad, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const RecentGames = ({ dark }) => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-nu.vercel.app/reviews", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const sortedGames = data.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
        setRecent(sortedGames.slice(0, 4));
      });
  }, []);

  return (
    <section className="py-16  dark:bg-slate-900 dark:text-gray-200">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center mb-12 text-pink-800">
          Recent Added Games
        </h2>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recent.map((game) => (
            <div
              key={game._id}
              className="group bg-white shadow-md rounded-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-800"
            >
              {/* Game Image */}
              <img
                src={game.photo}
                alt={game.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition"
              />
              {/* Game Info */}
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2 dark:text-gray-100">
                  {game.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <FaGamepad className="mr-2 text-pink-800" />
                  <span>{game.genre}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <FaStar className="mr-2 text-yellow-500" />
                  <span>{game.rating} / 5</span>
                </div>
                <p className="text-gray-700 mt-3 dark:text-gray-300">
                  {game.review.length > 100
                    ? `${game.review.substring(0, 100)}...`
                    : game.review}
                </p>
              </div>
              {/* Explore Button */}
              <div className="p-5 pt-0">
                <Link
                  to={`/reviewDetails/${game._id}`}
                  className="w-full btn bg-pink-800 text-white hover:bg-pink-600 transition"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentGames;
