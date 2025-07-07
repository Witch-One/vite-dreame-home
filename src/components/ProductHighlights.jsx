import React, { useState } from "react";

const ProductHighlights = () => {
  const [showAll, setShowAll] = useState(false);
  const hoveredItem = {
    id: 0,
    title: "Power Cord with the Handle",
    description: "x1",
    image:
      "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/0bd085e0-3080-46db-a03d-03ce88667455.png",
  };

  const highlights = [
    {
      id: 1,
      title: "Fast Dryer",
      description: "x1",
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/f7c2901a-4c15-420e-bf8a-68a11af002b5.png",
    },
    {
      id: 2,
      title: "Flyaway Attachment",
      description: "x1",
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/d8c9ae56-d191-4f8e-b29a-007cd4018c06.png",
    },
    {
      id: 3,
      title: "32mm Auto-Wrap Barrel",
      description: "x2",
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/7d1bc898-7af6-47bd-90ff-87b7cb90afb1.png",
    },
    {
      id: 4,
      title: "Hard Smoothing Brush",
      description: "x1",
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/6c7086ea-c472-49d0-8052-a1cf8df69d67.png",
    },
    {
      id: 5,
      title: "Soft Smoothing Brush",
      description: "x1",
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/6c7086ea-c472-49d0-8052-a1cf8df69d67.png",
    },
    {
      id: 6,
      title: "Round Volumizing Brush",
      description: "x1",
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/4fc06bb5-bec0-47bd-8c54-6e0825b3dd37.png",
    },
    {
      id: 7,
      title: "Air Intake Filter Cleaning Brush",
      description: "x1",
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/3e2ea156-a191-4008-9630-165c95e4c148.png",
    },
    {
      id: 8,
      title: "Soft Pebbled Leather Textured Box",
      description: "x1",
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/40f11e30-50d3-4bee-a07f-a8f285bd25fc.png",
    },
  ];

  const visibleHighlights = showAll
    ? [hoveredItem, ...highlights]
    : [hoveredItem, ...highlights].slice(0, 4);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-16">
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-5xl mb-4"
          style={{
            fontFamily: "MiSans Latin, sans-serif",
            fontWeight: 630,
            color: "#d4935a",
            lineHeight: "120%",
          }}
        >
          Why Choose DREAME
        </h2>
        <p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          style={{
            fontFamily: "MiSans Latin, sans-serif",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          Discover the advanced features that make our styling tool the perfect
          choice for your hair care routine
        </p>
      </div>

      {/* PC端：左侧大图 + 右侧列表 */}
      <div className="hidden md:flex gap-8 mb-8">
        {/* 左侧大图展示 */}
        <div className="w-1/3">
          <div
            className="rounded-2xl overflow-hidden aspect-1 shadow-lg"
            style={{ backgroundColor: "#F8F8F8" }}
          >
            <img
              src={hoveredItem.image}
              alt={hoveredItem.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* 大图标题和描述 */}
          <div className="mt-6">
            <h3
              className="text-2xl mb-3"
              style={{
                fontFamily: "MiSans Latin, sans-serif",
                fontWeight: 630,
                color: "#333",
                lineHeight: "130%",
              }}
            >
              {hoveredItem.title}
            </h3>
            <p
              className="text-base"
              style={{
                fontFamily: "MiSans Latin, sans-serif",
                fontWeight: 400,
                color: "#666",
                lineHeight: "150%",
              }}
            >
              {hoveredItem.description}
            </p>
          </div>
        </div>

        {/* 右侧特性列表 */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-0">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className={`bg-white rounded-xl p-2 cursor-pointer transition-all duration-300 ${
                  hoveredItem === index
                    ? "border-2 border-orange-200"
                    : "border-2 border-transparent"
                }`}
              >
                {/* 缩略图 */}
                <div className="w-full rounded-lg overflow-hidden mb-3 bg-[#F8F8F8]">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 标题 */}
                <h4
                  className="text-sm mb-2"
                  style={{
                    fontFamily: "MiSans Latin, sans-serif",
                    fontWeight: 600,
                    color: "#333",
                    lineHeight: "130%",
                  }}
                >
                  {highlight.title}
                </h4>

                {/* 简短描述 */}
                <p
                  className="text-xs text-gray-500 line-clamp-2"
                  style={{
                    fontFamily: "MiSans Latin, sans-serif",
                    fontWeight: 400,
                    lineHeight: "140%",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 移动端：两列网格布局 */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-4">
          {visibleHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              {/* 图片 */}
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-3">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover bg-[#F8F8F8]"
                />
              </div>

              {/* 标题 */}
              <h3
                className="text-sm mb-2 line-clamp-2"
                style={{
                  fontFamily: "MiSans Latin, sans-serif",
                  fontWeight: 600,
                  color: "#333",
                  lineHeight: "130%",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {highlight.title}
              </h3>

              {/* 简短描述 */}
              <p
                className="text-xs line-clamp-3"
                style={{
                  fontFamily: "MiSans Latin, sans-serif",
                  fontWeight: 400,
                  color: "#666",
                  lineHeight: "140%",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* View More 按钮 */}
        {highlights.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
              style={{
                fontFamily: "MiSans Latin, sans-serif",
                fontWeight: 500,
                color: "#d4935a",
              }}
            >
              <span>{showAll ? "Show Less" : "View More"}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductHighlights;
