import React from "react";

const Specifications = () => {
  const specs = [
    { name: "Rated Power", value: "1,300W" },
    {
      name: "3 Temperature Setting",
      value: "Room Temperature (Cool), 50°C (Warm), 80°C (Hot)",
    },
    { name: "3 Wind Speed Setting", value: "50m/s, 55m/s, 60m/s" },
    { name: "Highest Wind Volume", value: "55m³/h" },
    { name: "Power Cord Length", value: "2.8m" },
    { name: "Handle Weight", value: "290.6g (Without the Power Cord)" },
    { name: "Handle Size", value: "44.6mm x 44.6mm x 260mm" },
    { name: "Noise Level", value: "76dBA" },
    { name: "NTC", value: "300 times/s" },
    { name: "Motor", value: "110,000RPM" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-8 md:bg-[#F8F8F8] md:rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <h2
          className="text-3xl md:text-4xl text-center mb-12"
          style={{
            fontFamily: "MiSans Latin, sans-serif",
            fontWeight: 630,
            color: "#d4935a",
          }}
        >
          Specifications
        </h2>

        {/* PC端：两列布局 */}
        <div className="hidden md:block pb-8">
          <div className="grid grid-cols-2 gap-x-16 gap-y-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-start py-3 border-b border-gray-200"
              >
                <span className="text-[rgba(0,0,0,0.8)] text-xl">
                  {spec.name}
                </span>
                <span className="font-bold text-xl">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 移动端：单列布局 */}
        <div className="md:hidden">
          <div
            className="bg-white  p-6"
            style={{
              borderTop: "1.923px solid rgba(119, 119, 119, 0.30)",
            }}
          >
            {specs.map((spec, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div
                  className=" text-gray-700 mb-1 font-bold"
                  style={{
                    fontFamily: "MiSans Latin, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {spec.name}
                </div>
                <div className="text-gray-600">{spec.value}</div>
                {index < specs.length - 1 && (
                  <div className="h-px bg-gray-100 my-3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
