import React from "react";

const FastDryer = () => {
  return (
    <div className="mb:py-20 py-4 px-5 flex flex-col items-center w-full overflow-hidden">
      {/* PC端布局 */}
      <div className="hidden md:flex items-center gap-12 w-full max-w-7xl">
        {/* 左侧内容 */}
        <div className="flex-1 flex flex-col gap-16 h-full">
          <div className="mb-8">
            <h3
              className="text-lg font-medium mb-4"
              style={{
                display: "inline-block",
                fontFamily: "MiSans Latin, sans-serif",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #E9AF8B 0%, #C97545 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fast Dryer
            </h3>
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                fontFamily: "MiSans Latin, sans-serif",
                fontWeight: 630,
                color: "#333",
                lineHeight: "120%",
              }}
            >
              Efficient Drying in Just Minutes
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{
                fontFamily: "MiSans Latin, sans-serif",
                fontWeight: 380,
                color: "#9A9A9A",
                lineHeight: "150%",
              }}
            >
              Powerful 60m/s jet airflow means you spend less time drying, and
              more time styling.
            </p>
          </div>

          <img
            src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/fe47256f-aaef-4a36-ae8f-b5cf4e02f3b1.png"
            alt=""
          />

          {/* 特性标签 */}
          <div className="flex gap-12">
            <div className="flex items-center gap-8">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                <img
                  src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/27d905ed-3fd6-4572-841c-89040428c509.png"
                  alt=""
                />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">60m/s</div>
                <div className="text-sm text-gray-600">Jet Airflow</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                <img
                  src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/2b643176-f908-41e2-96a8-95c9dd4519c8.png"
                  alt=""
                />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">
                  110,000 RPM
                </div>
                <div className="text-sm text-gray-600">High-Speed Motor</div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧主图 */}
        <div className="flex-1">
          <div className="relative bg-orange-50 rounded-3xl overflow-hidden">
            <img
              src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/263deff9-c5e0-4245-90cd-3d89e9883df7.png"
              alt="Fast Dryer Demo"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* 移动端布局 */}
      <div className="block md:hidden">
        {/* 标题区域 */}
        <div className="text-center mb-8">
          <h3
            className="inline-block text-sm font-medium mb-3"
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              color: "#c97545",
              fontWeight: 700,
            }}
          >
            Fast Dryer
          </h3>
          <h2
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              fontWeight: 630,
              color: "#333",
              lineHeight: "120%",
            }}
          >
            Efficient Drying in Just Minutes
          </h2>
          <p
            className="text-base leading-relaxed px-4"
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              fontWeight: 380,
              color: "#9A9A9A",
              lineHeight: "150%",
            }}
          >
            Powerful 60m/s jet airflow means you spend less time drying, and
            more time styling.
          </p>
        </div>
        {/* 主图 */}
        <div className="mb-2">
          <div className="relative bg-orange-50 rounded-sm overflow-hidden mx-4">
            <img
              src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/263deff9-c5e0-4245-90cd-3d89e9883df7.png"
              alt="Fast Dryer Demo"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* 头发长度时间对比 */}
        <div className="flex justify-center gap-4 mb-2 px-4">
          <img
            src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/fe47256f-aaef-4a36-ae8f-b5cf4e02f3b1.png"
            alt=""
          />
        </div>

        {/* 特性标签 */}
        <div className="flex gap-0 justify-around">
          <div className="flex items-center gap-8">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/27d905ed-3fd6-4572-841c-89040428c509.png"
                alt=""
              />
            </div>
            <div>
              <div className="md:text-lg text-sm md:font-bold text-gray-800">
                60m/s
              </div>
              <div className="text-sm text-gray-600">Jet Airflow</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/2b643176-f908-41e2-96a8-95c9dd4519c8.png"
                alt=""
              />
            </div>
            <div>
              <div className="md:text-lg text-sm md:font-bold text-gray-800">
                110,000 RPM
              </div>
              <div className="text-sm text-gray-600">High-Speed Motor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastDryer;
