import React from "react";

const FastDryer = () => {
  return (
    <div className="py-20 px-5 flex flex-col items-center w-full overflow-hidden">
      {/* PC端布局 */}
      <div className="hidden md:flex items-center gap-12 w-full max-w-6xl">
        {/* 左侧内容 */}
        <div className="flex-1">
          <div className="mb-8">
            <h3
              className="text-lg font-medium mb-4"
              style={{
                fontFamily: "MiSans Latin, sans-serif",
                color: "#c97545",
                fontWeight: 400,
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

          {/* 头发长度时间对比 */}
          <div className="flex gap-6 mb-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-2xl p-4 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=120&h=120&fit=crop&crop=face"
                  alt="Short Hair"
                  className="w-20 h-20 object-cover rounded-xl mx-auto"
                />
              </div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                Short Hair
              </div>
              <div className="text-sm font-bold text-orange-500">
                40 seconds
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-2xl p-4 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=120&h=120&fit=crop&crop=face"
                  alt="Medium Hair"
                  className="w-20 h-20 object-cover rounded-xl mx-auto"
                />
              </div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                Medium Hair
              </div>
              <div className="text-sm font-bold text-orange-500">2 Mins</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-2xl p-4 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&h=120&fit=crop&crop=face"
                  alt="Long Hair"
                  className="w-20 h-20 object-cover rounded-xl mx-auto"
                />
              </div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                Long Hair
              </div>
              <div className="text-sm font-bold text-orange-500">4 Mins</div>
            </div>
          </div>

          {/* 特性标签 */}
          <div className="flex gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 01-3 0V9a1.5 1.5 0 013 0v7.5zM12 14.5a1.5 1.5 0 01-3 0V7a1.5 1.5 0 013 0v7.5zM16 12.5a1.5 1.5 0 01-3 0V5a1.5 1.5 0 013 0v7.5z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">60m/s</div>
                <div className="text-sm text-gray-600">Jet Airflow</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 18a6 6 0 100-12 6 6 0 000 12z" />
                </svg>
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
              src="https://images.unsplash.com/photo-1562322140-8198311d9c15?w=600&h=700&fit=crop"
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
            className="text-sm font-medium mb-3"
            style={{
              fontFamily: "MiSans Latin, sans-serif",
              color: "#c97545",
              fontWeight: 400,
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
        <div className="mb-8">
          <div className="relative bg-orange-50 rounded-3xl overflow-hidden mx-4">
            <img
              src="https://images.unsplash.com/photo-1562322140-8198311d9c15?w=400&h=500&fit=crop"
              alt="Fast Dryer Demo"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* 头发长度时间对比 */}
        <div className="flex justify-center gap-4 mb-8 px-4">
          <div className="text-center">
            <div className="bg-orange-100 rounded-2xl p-3 mb-2">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=80&h=80&fit=crop&crop=face"
                alt="Short Hair"
                className="w-16 h-16 object-cover rounded-xl mx-auto"
              />
            </div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              Short Hair
            </div>
            <div className="text-xs font-bold text-orange-500">40 seconds</div>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 rounded-2xl p-3 mb-2">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=80&h=80&fit=crop&crop=face"
                alt="Medium Hair"
                className="w-16 h-16 object-cover rounded-xl mx-auto"
              />
            </div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              Medium Hair
            </div>
            <div className="text-xs font-bold text-orange-500">2 Mins</div>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 rounded-2xl p-3 mb-2">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face"
                alt="Long Hair"
                className="w-16 h-16 object-cover rounded-xl mx-auto"
              />
            </div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              Long Hair
            </div>
            <div className="text-xs font-bold text-orange-500">4 Mins</div>
          </div>
        </div>

        {/* 特性标签 */}
        <div className="flex justify-center gap-6 px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 16.5a1.5 1.5 0 01-3 0V9a1.5 1.5 0 013 0v7.5zM12 14.5a1.5 1.5 0 01-3 0V7a1.5 1.5 0 013 0v7.5zM16 12.5a1.5 1.5 0 01-3 0V5a1.5 1.5 0 013 0v7.5z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">60m/s</div>
              <div className="text-xs text-gray-600">Jet Airflow</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 18a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">110,000 RPM</div>
              <div className="text-xs text-gray-600">High-Speed Motor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastDryer;
