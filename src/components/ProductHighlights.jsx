import React, { useState } from "react";

const ProductHighlights = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(0);

  const highlights = [
    {
      id: 1,
      title: "Professional Salon Results",
      description:
        "Achieve salon-quality styling at home with advanced heat technology and precision attachments.",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=80&h=80&fit=crop",
    },
    {
      id: 2,
      title: "Multi-Function Styling Tool",
      description:
        "One device, endless possibilities. Style, dry, curl, and smooth with interchangeable attachments.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=80&h=80&fit=crop",
    },
    {
      id: 3,
      title: "Fast & Efficient Drying",
      description:
        "Powerful motor and optimized airflow deliver 2x faster drying without compromising hair health.",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop",
    },
    {
      id: 4,
      title: "Heat Protection Technology",
      description:
        "Intelligent temperature control prevents overheating and protects hair from heat damage.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop",
    },
    {
      id: 5,
      title: "Lightweight Design",
      description:
        "Ergonomic design weighs only 0.81 lbs, reducing hand fatigue during extended styling sessions.",
      image:
        "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=80&h=80&fit=crop",
    },
    {
      id: 6,
      title: "Tangle-Free Cord",
      description:
        "360° swivel cord prevents tangling and provides unrestricted movement while styling.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=80&h=80&fit=crop",
    },
    {
      id: 7,
      title: "Easy Maintenance",
      description:
        "Removable filter and smooth surfaces make cleaning and maintenance effortless.",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=80&h=80&fit=crop",
    },
    {
      id: 8,
      title: "Quiet Operation",
      description:
        "Advanced motor design ensures powerful performance with minimal noise levels.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop",
    },
    {
      id: 9,
      title: "Advanced Ion Technology",
      description:
        "Negative ion technology reduces frizz and static for smoother, shinier results.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=80&h=80&fit=crop",
    },
    {
      id: 10,
      title: "Premium Build Quality",
      description:
        "Made with high-quality materials and components for long-lasting durability and performance.",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&h=400&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=80&h=80&fit=crop",
    },
  ];

  const visibleHighlights = showAll ? highlights : highlights.slice(0, 4);

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
        <div className="flex-1">
          <div
            className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg"
            style={{ backgroundColor: "#F5F1ED" }}
          >
            <img
              src={highlights[hoveredItem].image}
              alt={highlights[hoveredItem].title}
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
              {highlights[hoveredItem].title}
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
              {highlights[hoveredItem].description}
            </p>
          </div>
        </div>

        {/* 右侧特性列表 */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className={`bg-white rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                  hoveredItem === index
                    ? "shadow-lg border-2 border-orange-200"
                    : "shadow-sm border-2 border-transparent hover:shadow-md"
                }`}
                onMouseEnter={() => setHoveredItem(index)}
              >
                {/* 缩略图 */}
                <div className="w-16 h-16 rounded-lg overflow-hidden mb-3">
                  <img
                    src={highlight.thumbnail}
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
                  src={highlight.thumbnail}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
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
