import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
const WatchList = () => {
  const [watchList, setWatchList] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;
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
  console.log(watchList);

  const filteredWatchList = watchList.filter((watch) => watch.email === email);
  return (
    <div>
      <h1>My Watchlist</h1>
      {filteredWatchList.length}
    </div>
  );
};

export default WatchList;
