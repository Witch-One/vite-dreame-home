import React from "react";

const BrushTabs = ({ activeTab, setActiveTab, swiperInstance }) => {
  const tabsData = [
    {
      title: "Hard Smoothing Brush",
      description: "Gently smooths fine or fragile hair without pulling",
    },
    {
      title: "Soft Smoothing Brush",
      description: "Detangles and tames coarse or stubborn hair with ease",
    },
  ];

  const currentData = tabsData[activeTab];

  return (
    <div className="w-full mx-auto px-4 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Tab切换按钮 */}
        <div className="flex w-full mb-[1rem] border-b border-gray-200">
          <button
            onClick={() => {
              setActiveTab(0);
              if (swiperInstance) {
                swiperInstance.slideTo(0);
              }
            }}
            className={`flex-1 text-xs md:text-xl  pb-4 text-center relative transition-all duration-300`}
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              fontWeight: 520,
              lineHeight: "120%",
              letterSpacing: "0px",
              textAlign: "center",
              color: activeTab === 0 ? "#c97545" : "#999",
            }}
          >
            Hard Smoothing Brush
            {activeTab === 0 && (
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #E9AF8B 0%, #C97545 100%)",
                }}
              />
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab(1);
              if (swiperInstance) {
                swiperInstance.slideTo(1);
              }
            }}
            className={`flex-1 text-xs md:text-xl pb-4 text-center relative transition-all duration-300`}
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              fontWeight: 520,
              lineHeight: "120%",
              letterSpacing: "0px",
              textAlign: "center",
              color: activeTab === 1 ? "#c97545" : "#999",
            }}
          >
            Soft Smoothing Brush
            {activeTab === 1 && (
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #E9AF8B 0%, #C97545 100%)",
                }}
              />
            )}
          </button>
        </div>

        {/* Tab内容 */}
        <div className="text-center pb-8 ">
          <p
            className=" md:text-lg text-xs"
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              fontWeight: 380,
              lineHeight: "140%",
              letterSpacing: "0px",
              textAlign: "center",
              color: "#666",
            }}
          >
            {currentData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrushTabs;
