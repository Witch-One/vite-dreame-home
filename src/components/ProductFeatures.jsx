import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductFeatures = () => {
  const featuresData = [
    {
      id: 1,
      title: "Perfect Curls in 1 Second",
      subtitle: "5 Heat and 3 Wind Settings",
      image: "bd78ba1d-48ad-4804-ac7c-b1c2792dd87c.png",
      isLarge: true,
    },
    {
      id: 2,
      title: "Quick-Swap Attachments, Zero Delay",
      image: "c590c7b2-e48a-4b2b-a017-0f845def3d73.png",
      isLarge: false,
    },
    {
      id: 3,
      title: "Salon-Speed Drying Right at Home",
      image: "99001dbc-5a54-479b-87d1-dbac20bca1f6.png",
      isLarge: false,
    },
    {
      id: 4,
      title: "No Tangle, No Hassle",
      image: "ddd5cd8e-3818-4062-9b28-c39379e8c36f.png",
      isLarge: true,
    },
    {
      id: 5,
      title: "All-in-One Styling Solution",
      image: "135dc0e7-22ea-4818-9373-6eddb01106f6.png",
      isLarge: false,
    },
    {
      id: 6,
      title: "Long-Lasting Results, All-Day Confidence",
      image: "4e5c4882-a1c0-4c02-855d-83fab74c1430.png",
      isLarge: false,
    },
    {
      id: 7,
      title: "Smart Heat Control, Dedicated Hair Protection",
      image: "7b54224e-c2ee-433a-ac7a-608684989640.png",
      isLarge: false,
    },
    {
      id: 8,
      title: "Smart Heat Control, Dedicated Hair Protection",
      image: "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/",
      isLarge: false,
    },
  ];

  const FeatureCard = ({ feature }) => (
    <div className="bg-orange-50 rounded-2xl overflow-hidden relative h-full flex flex-col transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl hover:-translate-y-2 group">
      <div className="flex-2 overflow-hidden relative">
        <img
          src={
            "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/" +
            feature.image
          }
          alt={feature.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
    </div>
  );

  const MobileFeatureCard = ({ feature }) => (
    <div className="bg-orange-100 rounded-3xl overflow-hidden shadow-lg h-[500px] flex flex-col mx-auto w-full">
      {/* 标题区域 */}
      <div className="text-center pt-6 pb-3 px-4">
        <h3
          className="text-sm font-bold text-gray-800 leading-tight mb-1"
          style={{
            fontFamily: "MiSans Latin, sans-serif",
            fontWeight: 630,
            fontSize: "10px",
            lineHeight: "120%",
            letterSpacing: "0px",
          }}
        >
          {feature.title}
        </h3>
        {feature.subtitle && (
          <p
            className="text-xs text-gray-600 font-medium"
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              fontSize: "6px",
            }}
          >
            {feature.subtitle}
          </p>
        )}
      </div>

      {/* 图片区域 */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src={
            "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/" +
            feature.image
          }
          alt={feature.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <div className="py-20 px-5 flex flex-col items-center w-full overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* 标题区域 */}
        <h2
          className="text-lg md:text-4xl font-semibold bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent mb-8 leading-tight text-center"
          style={{
            fontFamily: "MiSans Latin, sans-serif",
            fontWeight: 630,
            fontSize: "clamp(19px, 4vw, 40px)",
            lineHeight: "120%",
            letterSpacing: "0px",
          }}
        >
          7-in-1 Hair Drying & Styling Tool Kit
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
          Harnesses high-speed jet airflow to expertly style your hair from wet
          to dry. Customize your desired look with professional precision at
          home.
        </p>

        {/* PC端 - 网格布局 */}
        <div className="hidden md:grid grid-cols-3 gap-4 ">
          {/* 左列 */}
          <div className="flex flex-col gap-4 ">
            <FeatureCard feature={featuresData[0]} />
            <div className="flex gap-4">
              <FeatureCard feature={featuresData[1]} />
              <FeatureCard feature={featuresData[2]} />
            </div>
          </div>
          {/* 中列 */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <FeatureCard feature={featuresData[3]} />
              <FeatureCard feature={featuresData[4]} />
            </div>
            <FeatureCard feature={featuresData[5]} />
          </div>
          {/* 右列 */}
          <div className="flex flex-col gap-4">
            <FeatureCard feature={featuresData[6]} />
            <FeatureCard feature={featuresData[7]} />
          </div>
        </div>

        {/* 移动端 - Swiper轮播 */}
        <div className="block md:hidden flex justify-center">
          <div className="mx-auto w-full " style={{ width: "660px" }}>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              pagination={{
                clickable: true,
                bulletClass: "custom-swiper-bullet",
                bulletActiveClass: "custom-swiper-bullet-active",
                renderBullet: (index, className) => {
                  return `<span class="${className}" style="
                    width: 12px;
                    height: 4px;
                    border-radius: 6px;
                    opacity: 0.5;
                    margin: 0 4px;
                    display: inline-block;
                    transition: all 0.3s;
                  "></span>`;
                },
              }}
              navigation={false}
              className="mobile-swiper"
            >
              {featuresData.map((feature) => (
                <SwiperSlide key={feature.id}>
                  <MobileFeatureCard feature={feature} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
