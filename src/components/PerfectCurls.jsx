import React from "react";

const PerfectCurls = () => {
  return (
    <div className="py-20 px-5 flex flex-col items-center w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* PC端布局 */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex-1">
            <div className="relative bg-orange-100 rounded-3xl overflow-hidden">
              <img
                src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/ecae1dee-745b-4e46-ad48-6f3271c62f52.png"
                alt="Perfect Curls Demo"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
                32mm Auto-Wrap Barrels
              </h2>
              <h2
                className="text-3xl font-bold mb-6"
                style={{
                  fontFamily: "MiSans Latin, sans-serif",
                  fontWeight: 630,
                  color: "#333",
                  lineHeight: "120%",
                }}
              >
                Perfect Curls in 1 Second
              </h2>
              <p
                className="text-lg leading-relaxed max-w-[400px] "
                style={{
                  fontFamily: "MiSans Latin, sans-serif",
                  fontWeight: 380,
                  color: "#9A9A9A",
                  lineHeight: "150%",
                }}
              >
                With our 1.25in curler and 360° spiral airflow, AirStyle Pro
                captures and curls each strand for long-lasting styling
                performance.
              </p>
            </div>

            {/* Before/After 对比图 */}
            <div className="flex gap-4 mt-8">
              <div className="relative flex-1">
                <img
                  src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/1426c4cf-4b62-419d-a8ef-d53d945e5d42.png"
                  alt="Before"
                  className="w-full object-cover rounded-xl"
                />
              </div>
              <div className="relative flex-1">
                <img
                  src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/916a0384-e153-44fb-8edd-73ca60eec03c.png"
                  alt="After"
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 移动端布局 */}
        <div className="block md:hidden">
          {/* 标题区域 */}
          <div className="text-center mb-8">
            <h3
              className="text-sm font-medium mb-3"
              style={{
                fontFamily: "MiSans Latin, sans-serif",
                fontWeight: 700,
                display: "inline-block",
                background: "linear-gradient(90deg, #E9AF8B 0%, #C97545 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              32mm Auto-Wrap Barrels
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
              Perfect Curls in 1 Second
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
              With our 1.25in curler and 360° spiral airflow, AirStyle Pro
              captures and curls each strand for long-lasting styling
              performance.
            </p>
          </div>

          {/* 主图 */}
          <div className="mb-2">
            <div className="relative bg-orange-100 rounded-lg overflow-hidden mx-4">
              <img
                src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/ecae1dee-745b-4e46-ad48-6f3271c62f52.png"
                alt="Perfect Curls Demo"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Before/After 对比图 */}
          <div className="flex justify-center gap-2 px-4">
            <div className="relative flex-1">
              <img
                src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/1426c4cf-4b62-419d-a8ef-d53d945e5d42.png"
                alt="Before"
                className="object-cover rounded-sm"
              />
            </div>
            <div className="relative flex-1">
              <img
                src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/916a0384-e153-44fb-8edd-73ca60eec03c.png"
                alt="After"
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectCurls;
