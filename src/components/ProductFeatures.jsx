import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ProductFeatures = () => {
  const featuresData = [
    {
      id: 1,
      title: "Perfect Curls in 1 Second",
      subtitle: "5 Heat and 3 Wind Settings",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop",
      isLarge: true
    },
    {
      id: 2,
      title: "Quick-Swap Attachments, Zero Delay",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=300&fit=crop",
      isLarge: false
    },
    {
      id: 3,
      title: "Salon-Speed Drying Right at Home",
      image: "https://images.unsplash.com/photo-1559599238-1c4d3ca14d29?w=400&h=300&fit=crop",
      isLarge: false
    },
    {
      id: 4,
      title: "No Tangle, No Hassle",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
      isLarge: false
    },
    {
      id: 5,
      title: "All-in-One Styling Solution",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      isLarge: false
    },
    {
      id: 6,
      title: "Long-Lasting Results, All-Day Confidence",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6d4e18b?w=400&h=500&fit=crop",
      isLarge: true
    },
    {
      id: 7,
      title: "Smart Heat Control, Dedicated Hair Protection",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      isLarge: false
    },
    {
      id: 8,
      title: "Smart Heat Control, Dedicated Hair Protection",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      isLarge: false
    }
  ]

  const FeatureCard = ({ feature }) => (
    <div className="bg-orange-50 rounded-2xl overflow-hidden relative h-full flex flex-col transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl hover:-translate-y-2 group">
      <div className="flex-2 overflow-hidden relative min-h-[200px]">
        <img 
          src={feature.image} 
          alt={feature.title} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex-1 p-6 bg-orange-50 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{feature.title}</h3>
        {feature.subtitle && (
          <p className="text-sm text-gray-600 m-0">{feature.subtitle}</p>
        )}
      </div>
    </div>
  )

  const MobileFeatureCard = ({ feature }) => (
    <div className="bg-orange-100 rounded-3xl overflow-hidden shadow-lg h-[500px] flex flex-col mx-auto w-full">
      {/* 标题区域 */}
      <div className="text-center pt-6 pb-3 px-4">
        <h3 className="text-sm font-bold text-gray-800 leading-tight mb-1" style={{
          fontFamily: 'MiSans Latin, sans-serif',
          fontWeight: 630,
          fontSize: '10px',
          lineHeight: '120%',
          letterSpacing: '0px'
        }}>
          {feature.title}
        </h3>
        {feature.subtitle && (
          <p className="text-xs text-gray-600 font-medium" style={{
            fontFamily: 'MiSans Latin, sans-serif',
            fontSize: '6px'
          }}>{feature.subtitle}</p>
        )}
      </div>
      
      {/* 图片区域 */}
      <div className="flex-1 relative overflow-hidden">
        <img 
          src={feature.image} 
          alt={feature.title} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )

  return (
    <div className="py-20 px-5 flex flex-col items-center w-full overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* 标题区域 */}
        <h2 className="text-lg md:text-4xl font-semibold bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent mb-8 leading-tight text-center" style={{
          fontFamily: 'MiSans Latin, sans-serif',
          fontWeight: 630,
          fontSize: 'clamp(19px, 4vw, 40px)',
          lineHeight: '120%',
          letterSpacing: '0px'
        }}>
          7-in-1 Hair Drying & Styling Tool Kit
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
          Harnesses high-speed jet airflow to expertly style your hair from wet to dry.
          Customize your desired look with professional precision at home.
        </p>
        
        {/* PC端 - 网格布局 */}
        <div className="hidden md:grid grid-cols-3 gap-4 ">
          {/* 左列 */}
          <div className="flex flex-col gap-4">
            <FeatureCard feature={featuresData[0]} />
            <div className="flex gap-4">
              <FeatureCard feature={featuresData[1]} />
              <FeatureCard feature={featuresData[2]} />
            </div>
          </div>
          {/* 中列 */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <FeatureCard feature={featuresData[4]} />
              <FeatureCard feature={featuresData[5]} />
            </div>
            <FeatureCard feature={featuresData[3]} />
          </div>
          {/* 右列 */}
          <div className="flex flex-col gap-4">
            <FeatureCard feature={featuresData[6]} />
            <FeatureCard feature={featuresData[7]} />
          </div>
        </div>

        {/* 移动端 - Swiper轮播 */}
        <div className="block md:hidden flex justify-center">
          <div className="mx-auto w-full " style={{ width: '660px' }}>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              pagination={{ 
                clickable: true,
                bulletClass: 'custom-swiper-bullet',
                bulletActiveClass: 'custom-swiper-bullet-active',
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
                }
              }}
              navigation={false}
              className="mobile-swiper"
            >
              {featuresData.map(feature => (
                <SwiperSlide key={feature.id}>
                  <MobileFeatureCard feature={feature} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures
