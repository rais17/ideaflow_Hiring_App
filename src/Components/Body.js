import React from "react";
import HeroSection from "./HeroSection";
import DetailSection from "./DetailSection";
import LearnMore from "./LearnMore";
import JoinUs from "./JoinUs";
import Hiring from "./Hiring";


const Body = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <DetailSection />
      <LearnMore />
      <JoinUs />
      <Hiring />
    </div>
  );
};

export default Body;
