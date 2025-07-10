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
    <div className="w-full max-w-7xl mx-auto pb-16">
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
          className=""
        >
          {/* 第一个面板 - Flyaway Attachment */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 py-8">
              {/* 移动端：最顶部内容，桌面端：右侧内容 */}
              <div className="w-full md:flex-1 md:pl-8 order-1 md:order-2 md:h-[580px] flex flex-col justify-between">
                <div className="space-y-6 text-center md:text-left flex flex-col gap-4">
                  {/* 分类标题 */}
                  <p
                    className="text-xl mb-0"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: "bolder",
                      letterSpacing: "0.02em",
                      background:
                        "linear-gradient(90deg, #E9AF8B 0%, #C97545 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Flyaway Attachment
                  </p>

                  {/* 主标题 */}
                  <h2
                    className="text-2xl md:text-4xl mb-0"
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
                    className="text-base mb-8 md:max-w-[500px]"
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
                        className="rounded-2xl overflow-hidden  mb-2"
                        style={{ backgroundColor: "#F5F1ED" }}
                      >
                        <img
                          src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/2b6d1727-dc8b-470b-b115-2b614d894e36.png"
                          alt="Before"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div
                        className="rounded-2xl overflow-hidden  mb-2"
                        style={{ backgroundColor: "#F5F1ED" }}
                      >
                        <img
                          src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/0490fd10-fd3a-4629-8d8c-d2a975db5778.png"
                          alt="After"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 移动端：中间图片，桌面端：左侧图片 */}
              <div className="w-full md:flex-1 md:pr-8 order-2 md:order-1 mb-2 md:mb-0">
                <div
                  className="rounded-3xl overflow-hidden md:h-[566px] flex items-center justify-center"
                  style={{ backgroundColor: "#F5F1ED" }}
                >
                  <img
                    src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/b35b167d-5f85-42e4-8742-8efe046c1876.png"
                    alt="Flyaway Attachment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 移动端：底部对比图，桌面端：隐藏 */}
              <div className="w-full order-3 md:hidden">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <div
                      className="rounded-2xl overflow-hidden mb-2"
                      style={{ backgroundColor: "#F5F1ED" }}
                    >
                      <img
                        src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/2b6d1727-dc8b-470b-b115-2b614d894e36.png"
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div
                      className="rounded-2xl overflow-hidden mb-2"
                      style={{ backgroundColor: "#F5F1ED" }}
                    >
                      <img
                        src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/0490fd10-fd3a-4629-8d8c-d2a975db5778.png"
                        alt="After"
                        className="w-full h-full object-cover"
                      />
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
              <div className="w-full md:flex-1 md:pl-8 order-1 md:order-2 md:h-[580px] flex flex-col justify-between">
                <div className="space-y-6 text-center md:text-left flex flex-col gap-4">
                  {/* 分类标题 */}
                  <p
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "MiSans Latin, sans-serif",
                      fontWeight: "bolder",
                      letterSpacing: "0.02em",
                      background:
                        "linear-gradient(90deg, #E9AF8B 0%, #C97545 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Root-Boosting Volumizing Brush
                  </p>

                  {/* 主标题 */}
                  <h2
                    className="text-2xl md:text-4xl mb-4"
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
                    className="text-base mb-8 md:max-w-[500px]"
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
                      className="rounded-2xl overflow-hidden "
                      style={{ backgroundColor: "#F5F1ED" }}
                    >
                      <img
                        src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/4b0c530a-4dfd-4072-b390-d960b7f64004.png"
                        alt="Root-Boosting Volumizing Brush Product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 移动端：中间图片，桌面端：左侧图片 */}
              <div className="w-full md:flex-1 md:pr-8 order-2 md:order-1 mb-8 md:mb-0">
                <div
                  className="rounded-3xl overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: "#F5F1ED" }}
                >
                  <img
                    src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/7835054a-f373-4930-893a-371b0ee7c316.png"
                    alt="Root-Boosting Volumizing Brush"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 移动端：底部产品图，桌面端：隐藏 */}
              <div className="w-full order-3 md:hidden">
                <div className="w-full">
                  <div className="rounded-sm overflow-hidden w-full">
                    <img
                      src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/4b0c530a-4dfd-4072-b390-d960b7f64004.png"
                      alt="Root-Boosting Volumizing Brush Product"
                      className="w-full h-full object-cover"
                    />
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
