import React from "react";
import { Typewriter } from "react-simple-typewriter"; // Import the package

const TypingComponent = () => {
  return (
    <div className="mb-7">
      <h1 className="text-2xl text-red-700 font-bold">
        <Typewriter
          words={[
            "Welcome to Chill Gamer!",
            "Find the best games and reviews.",
            "Enjoy your experience!",
          ]}
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
