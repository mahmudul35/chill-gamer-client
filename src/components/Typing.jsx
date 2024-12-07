import React from "react";
import { Typewriter } from "react-simple-typewriter"; // Import the package

const TypingComponent = ({ dark }) => {
  return (
    <div className="mb-7 flex justify-center gap-4">
      <h1 className="text-2xl  font-bold dark:text-base-100">
        Welcome To Chill Gamer{" "}
      </h1>
      <h1 className="text-2xl text-red-700 font-bold">
        <Typewriter
          words={["Explore", "Play", "Review", "Connect", "Discover"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypingComponent;
