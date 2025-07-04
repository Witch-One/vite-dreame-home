import React from "react";

const EverydayBeautyFeatures = () => {
  const features = [
    {
      id: 1,
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/8c59a096-de9a-4541-84e8-4818febf2fc2.png",
      title: "Seamless Switch",
      description: "Quick-Swap Attachments",
    },
    {
      id: 2,
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/62cf5dc7-31aa-4d46-972d-9bd02a3651a8.png",
      title: "Uninterrupted Movement",
      description: "360° Anti-Tangle Cord",
    },
    {
      id: 3,
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/508ca659-29c4-45c8-b525-6f150ab392f7.png",
      title: "Reduced Residues",
      description: "Easy-to-Clean Filter",
    },
    {
      id: 4,
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/d233a17a-3e8b-42ec-aa8d-d7e3b47d9910.png",
      title: "Lightweight Body",
      description: "Lightweight as 7 Lemons • 0.81 lbs",
    },
    {
      id: 5,
      image:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/d9c9d6f7-28e1-4dc5-94a1-269385202cac.png",
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
      <div className="flex  gap-6 overflow-x-auto hidden md:flex">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col">
            {/* 图片容器 */}
            <div
              className="rounded-2xl overflow-auto mb-4 aspect-square h-[480px] w-[360px]"
              style={{ backgroundColor: "#F5F1ED" }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
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
                className="flex flex-col w-48 flex-shrink-0"
              >
                {/* 图片容器 */}
                <div
                  className="rounded-2xl overflow-hidden mb-4"
                  style={{ backgroundColor: "#F5F1ED" }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
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
