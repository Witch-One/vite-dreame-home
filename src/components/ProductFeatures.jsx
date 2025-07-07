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
      mobileImage: "c7c0fc47-5dab-4c31-88d1-89b199ee088c.png",
      isLarge: true,
    },
    {
      id: 2,
      title: "Quick-Swap Attachments, Zero Delay",
      image: "c590c7b2-e48a-4b2b-a017-0f845def3d73.png",
      mobileImage: "13051d41-2d42-4f9c-8553-be3d3acf944b.png",
      isLarge: false,
    },
    {
      id: 3,
      title: "Salon-Speed Drying Right at Home",
      image: "99001dbc-5a54-479b-87d1-dbac20bca1f6.png",
      mobileImage: "f0ce1f4c-2084-485a-abd4-bae1f1954e07.png",
      isLarge: false,
    },
    {
      id: 4,
      title: "No Tangle, No Hassle",
      image: "ddd5cd8e-3818-4062-9b28-c39379e8c36f.png",
      mobileImage: "18e058f7-8fa4-4250-876f-7e7ed833e146.png",
      isLarge: true,
    },
    {
      id: 5,
      title: "All-in-One Styling Solution",
      image: "135dc0e7-22ea-4818-9373-6eddb01106f6.png",
      mobileImage: "d31ecf69-bd05-4bf8-bb83-ad2344da4d85.png",
      isLarge: false,
    },
    {
      id: 6,
      title: "Long-Lasting Results, All-Day Confidence",
      image: "4e5c4882-a1c0-4c02-855d-83fab74c1430.png",
      mobileImage: "55178fac-7b42-4314-8e61-365109622985.png",
      isLarge: false,
    },
    {
      id: 7,
      title: "Smart Heat Control, Dedicated Hair Protection",
      image: "7b54224e-c2ee-433a-ac7a-608684989640.png",
      mobileImage: "10e1997d-99b3-4c21-a657-74e22db7e158.png",
      isLarge: false,
    },
    {
      id: 8,
      title: "Smart Heat Control, Dedicated Hair Protection",
      image: "5cb5eef5-1cc2-4804-be29-c173f6437ce7.png",
      mobileImage: "",
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
    <div className="bg-orange-100 rounded-3xl overflow-hidden shadow-lg flex flex-col mx-auto w-full">
      <div className="flex-1 relative overflow-hidden">
        <img
          src={
            "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/" +
            feature.mobileImage
          }
          alt={feature.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <div className="mb:py-20 py-4 px-5 flex flex-col items-center w-full overflow-hidden">
      <div className="max-w-7xl mx-auto text-center w-full">
        {/* 标题区域 */}
        <h2
          className="text-2xl md:text-5xl font-semibold bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent md:mb-8 leading-tight text-center"
          style={{
            fontFamily: "MiSans Latin, sans-serif",
            fontWeight: 630,
            display: "inline-block",
            fontSize: "clamp(19px, 4vw, 40px)",
            lineHeight: "140%",
            letterSpacing: "0px",
          }}
        >
          7-in-1 Hair Drying & Styling Tool Kit
        </h2>
        <p className="md:text-xl text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
          Harnesses high-speed jet airflow to expertly style your hair from wet
          to dry. Customize your desired look with professional precision at
          home.
        </p>

        {/* PC端 - 网格布局 */}
        <div className="hidden md:flex  gap-3">
          {/* 左列 */}
          <div className="flex flex-col gap-3" style={{ flex: "404" }}>
            <FeatureCard feature={featuresData[0]} />
            <div className="flex gap-4">
              <FeatureCard feature={featuresData[1]} />
              <FeatureCard feature={featuresData[2]} />
            </div>
          </div>
          {/* 中列 */}
          <div className="flex flex-col gap-3" style={{ flex: "546" }}>
            <div className="flex gap-4">
              <FeatureCard feature={featuresData[3]} />
              <FeatureCard feature={featuresData[4]} />
            </div>
            <FeatureCard feature={featuresData[5]} />
          </div>
          {/* 右列 */}
          <div className="flex flex-col gap-3" style={{ flex: "248" }}>
            <FeatureCard feature={featuresData[6]} />
            <FeatureCard feature={featuresData[7]} />
          </div>
        </div>

        {/* 移动端 - Swiper轮播 */}
        <div className="md:hidden flex w-full overflow-hidden justify-center">
          <div className="mx-auto w-full ">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
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
              {featuresData
                .filter((feature) => feature.mobileImage)
                .map((feature) => (
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
