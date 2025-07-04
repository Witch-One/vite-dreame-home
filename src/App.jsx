import React from "react";
import TestimonialsSection from "./components/TestimonialsSection";
import ProductIntro from "./components/ProductIntro";
import ProductFeatures from "./components/ProductFeatures";
import PerfectCurls from "./components/PerfectCurls";
import FastDryer from "./components/FastDryer";
import SmoothingBrushTabs from "./components/SmoothingBrushTabs";
import AttachmentCarousel from "./components/AttachmentCarousel";
import EverydayBeautyFeatures from "./components/EverydayBeautyFeatures";
import VideoShowcase from "./components/VideoShowcase";
import ProductHighlights from "./components/ProductHighlights";
import Specifications from "./components/Specifications";
import AchievementsAwards from "./components/AchievementsAwards";

// import './App.css' // 暂时注释掉以使用Tailwind CSS

function App() {
  return (
    <div className="App min-h-screen bg-white w-full flex flex-col overflow-x-hidden gap-[1.5rem]">
      <TestimonialsSection />
      <ProductFeatures />
      <PerfectCurls />
      <FastDryer />
      <SmoothingBrushTabs />
      <AttachmentCarousel />
      <EverydayBeautyFeatures />
      <VideoShowcase />
      <ProductHighlights />
      <Specifications />
      <AchievementsAwards />
    </div>
  );
}

export default App;
