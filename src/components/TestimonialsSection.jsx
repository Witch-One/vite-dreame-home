import React from "react";

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Jessica",
      rating: 5.0,
      text: "I used to spend forever switching between my dryer, straightener, and curling wand. With Airstyle Pro, I get everything done in one go — and my hair looks smoother than ever. So worth it!",
      image: "5592329b-fdec-4ca9-a901-3cd8ff3601d7.png",
    },
    {
      id: 2,
      name: "Natalie R",
      rating: 5.0,
      text: "I've tried a bunch of styling tools, but this one is on another level. My hair holds shape all day without frizz, and it's actually fun to use. Feels sturdy too!",
      image: "fdb4a610-2b43-4da1-a8a4-3e92b0f589f5.png",
    },
    {
      id: 3,
      name: "Amber",
      rating: 5.0,
      text: "I'm not very skilled with hair tools, but this one made me feel like a pro. The brush cups smoothly, hot tips make styling so much easier.",
      image: "ed1588e2-3ec4-4e10-a288-afa47aa961e4.png",
    },
    {
      id: 4,
      name: "Danielle",
      rating: 5.0,
      text: "I Was SO skeptical at first, but wow — I This hair tool style and the curl last all the way tomorrow evening. So chic.",
      image: "9e414cec-8f6d-422b-a2cb-140bee7e1f92.png",
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
        isLarge ? "h-80" : "h-[220px] md:h-[400px]"
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
    </div>
  );

  return (
    <div className="py-16 px-5 flex flex-col items-center w-full overflow-hidden">
      {/* 标题 */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-5xl font-bold m-0 bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent tracking-tight leading-tight">
          What Our Users Say
        </h2>
      </div>

      {/* 移动端横向滚动 */}
      <div className="block w-full px-5">
        <div
          className="flex md:gap-8 gap-2 overflow-auto pb-4 mx-auto xl:justify-center"
          style={{ scrollbarWidth: "none" }}
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
