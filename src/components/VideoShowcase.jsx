import React from "react";

const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      title:
        "See what's inside and how each attachment upgrades your styling routine.",
      author: {
        name: "D R E A M E",
        subscribers: "",
      },
      thumbnail:
        "https://pub-13355f36470e415392ca3e34d42aa7c2.r2.dev/home-images/8fb2032fb02665ed7ecba658cab8f29f045fa02c.jpg",
      duration: "3:24",
    },
    {
      id: 2,
      title: "My full hair routine—quick, easy, and all with one amazing tool!",
      author: {
        name: "Joanna Marie Kutkina",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        subscribers: "556K subscribers",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1594736797933-d0dcce0cf137?w=500&h=300&fit=crop",
      duration: "5:12",
    },
    {
      id: 3,
      title: "Super fast and easy prevents overheating for safe styling!",
      author: {
        name: "anastasia",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
        subscribers: "3.6M subscribers",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=300&fit=crop",
      duration: "2:45",
    },
    {
      id: 4,
      title: "Ready in 15 minutes, no heat damage, all glam.",
      author: {
        name: "cindyprado28",
        avatar:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&h=60&fit=crop&crop=face",
        subscribers: "826K subscribers",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      duration: "4:30",
    },
    {
      id: 5,
      title: "Salon-Worthy curls at home in 15 minutes.",
      author: {
        name: "vasillevafl",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
        subscribers: "3.3M subscribers",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&h=300&fit=crop",
      duration: "6:18",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-16">
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-5xl mb-4"
          style={{
            fontFamily: "MiSans Latin, sans-serif",
            fontWeight: 630,
            color: "#d4935a",
            lineHeight: "120%",
          }}
        >
          Watch How They Style in Minutes
        </h2>
      </div>

      {/* 视频卡片容器 - 横向滚动 */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 w-max">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* 视频缩略图 */}
              <div className="relative group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* 播放按钮 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 bg-[#9F9F9F8C] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
                    style={{
                      boxShadow: "0px 2.17px 2.17px 0px #00000040",
                      filter: "blur(2.17px)",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 视频信息 */}
              <div className="p-4">
                {/* 标题 */}
                <h3
                  className="text-sm mb-3 line-clamp-2"
                  style={{
                    fontFamily: "MiSans Latin, sans-serif",
                    fontWeight: 500,
                    color: "#333",
                    lineHeight: "140%",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {video.title}
                </h3>

                {/* 作者信息 */}
                <div className="flex items-center gap-3">
                  {/* 作者头像 */}
                  {video.author.avatar && (
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={video.author.avatar}
                        alt={video.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {/* 作者名称和订阅数 */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm truncate"
                      style={{
                        fontFamily: "MiSans Latin, sans-serif",
                        fontWeight: 600,
                        color: "#333",
                      }}
                    >
                      {video.author.name}
                    </p>
                    {video.author.subscribers && (
                      <p
                        className="text-xs text-gray-500"
                        style={{
                          fontFamily: "MiSans Latin, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {video.author.subscribers}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 渐变边缘提示 */}
      <div className="relative">
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default VideoShowcase;
