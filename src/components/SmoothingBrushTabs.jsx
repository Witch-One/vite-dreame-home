import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
      src: "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/9a88f2b8-0160-4d9e-8e46-711666062a68.png",
      alt: "after",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="w-full mx-auto px-4 pb-16 overflow-hidden flex flex-col items-center gap-4">
      {/* Header */}
      <div className="w-full max-w-6xl flex flex-col items-center gap-4">
        <div className="text-center mb-12">
          <p
            className="text-xl mb-4"
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              fontWeight: 450,
              color: "#c97545",
              letterSpacing: "0.02em",
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
            className="h-80 rounded-xl overflow-hidden"
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
                <div className="absolute bottom-[1rem] flex justify-center  w-full gap-[39%]">
                  <button className="w-[94px] h-[40px] rounded-[12px] bg-[#FFFFFF]">
                    before
                  </button>
                  <button
                    className="w-[94px] h-[40px] rounded-[12px] text-[#FFFFFF]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E9AF8B 0%, #C97545 100%)",
                    }}
                  >
                    after
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
