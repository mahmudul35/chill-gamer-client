import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const WatchList = () => {
  const [watchList, setWatchList] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;

  // Fetch watchlist data when the component mounts
  useEffect(() => {
    fetch(`http://localhost:3000/watchList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setWatchList(data));
  }, []);

  // Filter watchlist items based on the logged-in user's email
  const filteredWatchList = watchList.filter((watch) => watch.email === email);

  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold mb-4">My Watchlist</h1>

      {/* If no items in the watchlist, display a message */}
      {filteredWatchList.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <ul>
          {/* Render filtered watchlist items */}
          {filteredWatchList.map((watchItem) => (
            <li
              key={watchItem._id}
              className="mb-4 bg-gray-100 p-4 rounded-lg shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    {watchItem.gameTitle}
                  </h3>
                  <p className="text-sm text-gray-600">{watchItem.gameId}</p>
                </div>
                <button
                  onClick={() => console.log("Remove from watchlist")}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WatchList;
