import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BrushTabs from "./BrushTabs";
const SmoothingBrushTabs = () => {
  // 轮播图数据
  const carouselImages = [
    {
      src: "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/14dc921a-c07f-4f99-9f0a-e9d9fded4def.png",
      alt: "before",
    },
    {
      src: "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/dea62685-ef6c-4872-b4fb-23fd21576f1d.png",
      alt: "after",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="w-full mx-auto px-4 pb-4 md:pb-8 overflow-hidden flex flex-col items-center gap-4">
      {/* Header */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-4">
        <div className="text-center mb-12">
          <p
            className="text-xl mb-4"
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              fontWeight: 450,
              display: "inline-block",
              color: "#c97545",
              letterSpacing: "0.02em",
              background: "linear-gradient(90deg, #E9AF8B 0%, #C97545 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Soft / Hard Smoothing Brush
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              fontWeight: 630,
              color: "#333",
              lineHeight: "120%",
            }}
          >
            Tailored Care for Every Hair Type
          </h2>
        </div>

        {/* Swiper轮播图 */}
        <div className="w-full mx-auto mb-8 flex justify-center align-center">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            initialSlide={activeTab}
            loop={false}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
            className="md:h-80 h-60 rounded-xl overflow-hidden"
          >
            {carouselImages.map((image, index) => (
              <SwiperSlide key={index} className="flex">
                <img
                  style={{
                    backgroundColor: "#EDE0D7",
                  }}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-[1rem] flex justify-center  w-full gap-[39%] md:text-xl text-sm">
                  <button className="md:w-[94px] md:h-[40px] w-[60px] h-[26px] md:rounded-[12px] rounded-[8px] bg-[#FFFFFF] font-bold">
                    Before
                  </button>
                  <button
                    className="md:w-[94px] md:h-[40px] w-[60px] h-[26px] md:rounded-[12px] rounded-[8px] text-[#FFFFFF] font-bold"
                    style={{
                      background:
                        "linear-gradient(90deg, #E9AF8B 0%, #C97545 100%)",
                    }}
                  >
                    After
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Tabs */}
      <BrushTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        swiperInstance={swiperInstance}
      />
    </div>
  );
};

export default SmoothingBrushTabs;
