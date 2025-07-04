import React from "react";

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Jessica",
      rating: 5.0,
      text: "I used to spend forever switching between my dryer, straightener, and curling wand. With Airstyle Pro, I get everything done in one go — and my hair looks smoother than ever. So worth it!",
      image: "3b90fd4834a39b43fe1c16e37e157b16d68b73cb.jpg",
    },
    {
      id: 2,
      name: "Natalie R",
      rating: 5.0,
      text: "I've tried a bunch of styling tools, but this one is on another level. My hair holds shape all day without frizz, and it's actually fun to use. Feels sturdy too!",
      image: "5de53567-2423-4f01-bebc-bd75d2954a02.png",
    },
    {
      id: 3,
      name: "Amber",
      rating: 5.0,
      text: "I'm not very skilled with hair tools, but this one made me feel like a pro. The brush cups smoothly, hot tips make styling so much easier.",
      image: "554678a1366d286af557e08546083e40d5238243.jpg",
    },
    {
      id: 4,
      name: "Danielle",
      rating: 5.0,
      text: "I Was SO skeptical at first, but wow — I This hair tool style and the curl last all the way tomorrow evening. So chic.",
      image: "91898a9a-1a33-4280-82bb-c214d6a8c932.png",
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span key={index} className="star">
          ★
        </span>
      ));
  };

  const TestimonialCard = ({ testimonial, isLarge = false }) => (
    <div
      className={`bg-white rounded-2xl relative flex-1 overflow-hidden transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-1 ${
        isLarge ? "h-80" : "h-[400px] w-[290px]"
      }`}
      style={{ flexShrink: 0 }}
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src={
            "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/" +
            testimonial.image
          }
          alt={testimonial.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-5 absolute bottom-2 left-2 right-2 flex flex-col align-center h-[164px] bg-white rounded-2xl">
        <div className="flex items-center gap-2 mb-1 justify-center">
          <div className="flex text-yellow-400 text-lg ">
            {renderStars(testimonial.rating)}
          </div>
          <span className="text-sm text-gray-600 font-semibold font-bold">
            {testimonial.rating.toFixed(1)}
          </span>
        </div>
        <div className="text-lg font-bold text-gray-900 mb-1 flex justify-center">
          {testimonial.name}
        </div>
        <div className="text-xs text-gray-700 line-clamp-3 leading-relaxed flex-1 justify-center">
          {testimonial.text}
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-16 px-5 flex flex-col items-center w-full overflow-hidden">
      {/* 标题 */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold m-0 bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent tracking-tight leading-tight">
          What Our Users Say
        </h2>
      </div>

      {/* 移动端横向滚动 */}
      <div className="block w-full px-5">
        <div
          className="flex gap-8 overflow-auto pb-4 mx-auto justify-center"
          // style={{ scrollbarWidth: "none" }}
        >
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
