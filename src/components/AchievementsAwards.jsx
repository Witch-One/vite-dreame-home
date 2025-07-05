import React from "react";

const AchievementsAwards = () => {
  return (
    <div className="w-full text-white py-16 px-4 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <h2
          className="text-3xl md:text-4xl text-center mb-12 md:mb-16"
          style={{
            fontFamily: "MiSans Latin, sans-serif",
            fontWeight: 630,
            color: "#d4935a",
          }}
        >
          Achievements & Awards
        </h2>
      </div>
      <div className="hidden md:flex gap-4">
        <img
          src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/aa74aa6e-2eb2-48f7-ac07-40ad6a1e35e0.png"
          alt=""
          className="w-[38%]"
        />
        <div>
          <img
            src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/330d4a71-26de-43cc-be0b-b7bee45699ac.png"
            alt=""
          />
          <img
            src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/e6049dd8-751c-440c-b58f-dbe7fd90ab56.png"
            alt=""
          />
        </div>
      </div>
      <div className="block md:hidden">
        <img
          src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/aa74aa6e-2eb2-48f7-ac07-40ad6a1e35e0.png"
          alt=""
        />
        <div>
          <img
            src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/330d4a71-26de-43cc-be0b-b7bee45699ac.png"
            alt=""
          />
          <img
            src="https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/e6049dd8-751c-440c-b58f-dbe7fd90ab56.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AchievementsAwards;
