import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const WatchList = () => {
  const [watchList, setWatchList] = useState([]);
  const [filteredWatchList, setFilteredWatchList] = useState([]);
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
      .then((data) => {
        setWatchList(data);
        // console.log(data[2].userEmail);
        const filteredWatchList = data.filter((watch) => {
          return email == watch.userEmail;
        });
        setFilteredWatchList(filteredWatchList);
      });
  }, []);

  // Filter watchlist items based on the logged-in user's email
  // const filteredWatchList = watchList.filter((watch) => watch.email === email);

  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold mb-4 text-center">My Watchlist</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Game Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Publishing Year</th>
            </tr>
          </thead>
          <tbody>
            {filteredWatchList.length > 0 ? (
              filteredWatchList.map((watchItem, index) => (
                <tr key={watchItem._id}>
                  <td>{index + 1}</td>
                  <td>{watchItem.title}</td>
                  <td>{watchItem.genre}</td>
                  <td>{watchItem.rating}</td>
                  <td>{watchItem.year}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center font-bold text-2xl" colSpan="5">
                  Your Watchlist is Empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
