import React from "react";

const PerfectCurls = () => {
  return (
    <div className="py-20 px-5 flex flex-col items-center w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* PC端布局 */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex-1">
            <div className="relative bg-orange-100 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop"
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
                className="text-lg leading-relaxed"
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
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=200&h=200&fit=crop&crop=face"
                  alt="Before"
                  className="w-32 h-40 object-cover rounded-xl"
                />
                <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-md text-sm font-medium">
                  Before
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop&crop=face"
                  alt="After"
                  className="w-32 h-40 object-cover rounded-xl"
                />
                <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-md text-sm font-medium">
                  After
                </div>
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
                color: "#c97545",
                fontWeight: 400,
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
          <div className="mb-6">
            <div className="relative bg-orange-100 rounded-3xl overflow-hidden mx-4">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=500&fit=crop"
                alt="Perfect Curls Demo"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Before/After 对比图 */}
          <div className="flex justify-center gap-4 px-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=150&h=180&fit=crop&crop=face"
                alt="Before"
                className="w-24 h-32 object-cover rounded-xl"
              />
              <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-md text-xs font-medium">
                Before
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&h=180&fit=crop&crop=face"
                alt="After"
                className="w-24 h-32 object-cover rounded-xl"
              />
              <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-md text-xs font-medium">
                After
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectCurls;
