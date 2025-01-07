import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100?img=1",
      quote:
        "Chill Gamer has transformed the way I connect with other gamers. The community is vibrant, and the features are unmatched!",
      designation: "Pro Gamer",
    },
    {
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/100?img=2",
      quote:
        "I love the tournaments hosted here! Everything is well-organized and so much fun to participate in!",
      designation: "Streamer",
    },
    {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/100?img=3",
      quote:
        "The platform is a game-changer for casual and professional gamers alike. Highly recommended!",
      designation: "Game Developer",
    },
  ];

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-800 mb-4">
          What Our Gamers Say
        </h2>
        <p className="text-gray-600 mb-12">
          Hear from our amazing community of gamers!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 shadow-lg rounded-lg transition-transform transform hover:scale-105"
            >
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                className="w-16 h-16 mx-auto rounded-full border-4 border-pink-800 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {testimonial.designation}
              </p>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
