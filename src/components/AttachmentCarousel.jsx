import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AttachmentCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-16">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={false}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="h-auto md:h-[600px]"
        >
          {/* 第一个面板 - Flyaway Attachment */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 py-8">
              {/* 移动端：最顶部内容，桌面端：右侧内容 */}
              <div className="w-full md:flex-1 md:pl-8 order-1 md:order-2 h-full flex flex-col justify-between">
                <div className="space-y-6 text-center md:text-left mb-8 md:mb-0">
                  {/* 分类标题 */}
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: 400,
                      color: "#c97545",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Flyaway Attachment
                  </p>

                  {/* 主标题 */}
                  <h2
                    className="text-2xl md:text-4xl mb-6"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: 630,
                      color: "#333",
                      lineHeight: "120%",
                    }}
                  >
                    Smooth Flyaways, Flawless Finish
                  </h2>

                  {/* 描述 */}
                  <p
                    className="text-base mb-8"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: 380,
                      color: "#666",
                      lineHeight: "150%",
                    }}
                  >
                    The Flyaway Attachment targets to hide stubborn baby hairs
                    and frizz for a smooth, high-shine effect.
                  </p>
                </div>
                <div className="w-full order-3 hidden md:block">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div
                        className="rounded-2xl overflow-hidden h-32 mb-2"
                        style={{ backgroundColor: "#F5F1ED" }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=300&h=200&fit=crop"
                          alt="Before"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className="text-center px-4 py-2 rounded-lg bg-white text-sm"
                        style={{
                          fontFamily: "MiSans Latin, sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        Before
                      </div>
                    </div>
                    <div className="flex-1">
                      <div
                        className="rounded-2xl overflow-hidden h-32 mb-2"
                        style={{ backgroundColor: "#F5F1ED" }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=200&fit=crop"
                          alt="After"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className="text-center px-4 py-2 rounded-lg bg-white text-sm"
                        style={{
                          fontFamily: "MiSans Latin, sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 移动端：中间图片，桌面端：左侧图片 */}
              <div className="w-full md:flex-1 md:pr-8 order-2 md:order-1 mb-8 md:mb-0">
                <div
                  className="rounded-3xl overflow-hidden h-[300px] md:h-[500px] flex items-center justify-center"
                  style={{ backgroundColor: "#F5F1ED" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop"
                    alt="Flyaway Attachment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 移动端：底部对比图，桌面端：隐藏 */}
              <div className="w-full order-3 md:hidden">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div
                      className="rounded-2xl overflow-hidden h-32 mb-2"
                      style={{ backgroundColor: "#F5F1ED" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=300&h=200&fit=crop"
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="text-center px-4 py-2 rounded-lg bg-white text-sm"
                      style={{
                        fontFamily: "MiSans Latin, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      Before
                    </div>
                  </div>
                  <div className="flex-1">
                    <div
                      className="rounded-2xl overflow-hidden h-32 mb-2"
                      style={{ backgroundColor: "#F5F1ED" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=200&fit=crop"
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="text-center px-4 py-2 rounded-lg bg-white text-sm"
                      style={{
                        fontFamily: "MiSans Latin, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 第二个面板 - Root-Boosting Volumizing Brush */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 py-8">
              {/* 移动端：最顶部内容，桌面端：右侧内容 */}
              <div className="w-full md:flex-1 md:pl-8 order-1 md:order-2 h-full flex flex-col justify-between">
                <div className="space-y-6 text-center md:text-left mb-8 md:mb-0">
                  {/* 分类标题 */}
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: 400,
                      color: "#c97545",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Root-Boosting Volumizing Brush
                  </p>

                  {/* 主标题 */}
                  <h2
                    className="text-2xl md:text-4xl mb-6"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: 630,
                      color: "#333",
                      lineHeight: "120%",
                    }}
                  >
                    Instant Root-Lift, Lasting Volume
                  </h2>

                  {/* 描述 */}
                  <p
                    className="text-base mb-8"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: 380,
                      color: "#666",
                      lineHeight: "150%",
                    }}
                  >
                    Tired of flat roots? The Root-Boosting Volumizing Brush
                    delivers bouncy, airy lifts where it matters most—adding
                    full volume to every style.
                  </p>
                </div>
                {/* 移动端：底部产品图，桌面端：隐藏 */}
                <div className="w-full order-3 hidden md:block">
                  <div className="w-full">
                    <div
                      className="rounded-2xl overflow-hidden h-32"
                      style={{ backgroundColor: "#F5F1ED" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=200&fit=crop"
                        alt="Root-Boosting Volumizing Brush Product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="text-center mt-2 text-sm"
                      style={{
                        fontFamily: "MiSans Latin, sans-serif",
                        fontWeight: 500,
                        color: "#666",
                      }}
                    >
                      Root-Boosting Volumizing Brush
                    </div>
                  </div>
                </div>
              </div>

              {/* 移动端：中间图片，桌面端：左侧图片 */}
              <div className="w-full md:flex-1 md:pr-8 order-2 md:order-1 mb-8 md:mb-0">
                <div
                  className="rounded-3xl overflow-hidden h-[300px] md:h-[500px] flex items-center justify-center"
                  style={{ backgroundColor: "#F5F1ED" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&h=600&fit=crop"
                    alt="Root-Boosting Volumizing Brush"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 移动端：底部产品图，桌面端：隐藏 */}
              <div className="w-full order-3 md:hidden">
                <div className="w-full">
                  <div
                    className="rounded-2xl overflow-hidden h-32"
                    style={{ backgroundColor: "#F5F1ED" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=200&fit=crop"
                      alt="Root-Boosting Volumizing Brush Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="text-center mt-2 text-sm"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: 500,
                      color: "#666",
                    }}
                  >
                    Root-Boosting Volumizing Brush
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* 导航按钮 - PC端居右，移动端居中 */}
        <div className="flex justify-center md:justify-end mt-8 space-x-2">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            disabled={isBeginning}
            className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
              isBeginning
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-600 hover:shadow-xl hover:bg-gray-50"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => swiperInstance?.slideNext()}
            disabled={isEnd}
            className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
              isEnd
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-600 hover:shadow-xl hover:bg-gray-50"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttachmentCarousel;
