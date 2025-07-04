import React from "react";

const EverydayBeautyFeatures = () => {
  const features = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=300&fit=crop",
      title: "Seamless Switch",
      description: "Quick-Swap Attachments",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Uninterrupted Movement",
      description: "360° Anti-Tangle Cord",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=400&h=300&fit=crop",
      title: "Reduced Residues",
      description: "Easy-to-Clean Filter",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=300&fit=crop",
      title: "Lightweight Body",
      description: "Lightweight as 7 Lemons • 0.81 lbs",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=300&fit=crop",
      title: "Faux Curling",
      description: "Styling Made Easy",
    },
  ];

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
          Designed for Everyday Beauty
        </h2>
      </div>

      {/* PC端：网格布局 */}
      <div className="hidden md:grid md:grid-cols-5 gap-6">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col">
            {/* 图片容器 */}
            <div
              className="rounded-2xl overflow-hidden mb-4 aspect-square"
              style={{ backgroundColor: "#F5F1ED" }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 文字内容 */}
            <div className="text-center">
              <h3
                className="text-lg mb-2"
                style={{
                  fontFamily: "MiSans Latin, sans-serif",
                  fontWeight: 600,
                  color: "#333",
                  lineHeight: "130%",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  fontFamily: "MiSans Latin, sans-serif",
                  fontWeight: 400,
                  color: "#666",
                  lineHeight: "140%",
                }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 移动端：横向滚动 */}
      <div className="md:hidden">
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col w-64 flex-shrink-0"
              >
                {/* 图片容器 */}
                <div
                  className="rounded-2xl overflow-hidden mb-4 h-48"
                  style={{ backgroundColor: "#F5F1ED" }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 文字内容 */}
                <div className="text-center px-2">
                  <h3
                    className="text-lg mb-2"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: 600,
                      color: "#333",
                      lineHeight: "130%",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: 400,
                      color: "#666",
                      lineHeight: "140%",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EverydayBeautyFeatures;
