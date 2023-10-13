import React from 'react'
import aiRoboImage from "../Assets/ai-robo.png"
import firstRound from "../Assets/firstRound.png";
import VC from "../Assets/VC.png";
import starX from "../Assets/startX.png";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-center bg-hero-bg">
      <div className="mx-auto flex w-11/12 max-w-[1080px] flex-col space-y-10">
        {/* top */}
        <h1 className="pt-20 font-extrabold text-white xxs:max-md:text-center font-Red-Hat-Display text-7xl xxs:max-sm:text-4xl sm:max-md:text-5xl md:max-at1109:text-6xl">
          The Intelligence Amplification Company
        </h1>

        {/* bottom */}
        <div className="flex flex-col w-full space-x-4 xxs:max-at930: xxs:max-at930:items-center xxs:max-at930:space-y-20 at930:flex-row">
          <div className="flex flex-col space-y-8 md:pt-10 grow basis-1/2">
            <p className="xxs:max-md:text-center font-Red-Hat-Display xxs:max-md:text-2xl text-3xl font-normal text-[#7d8590]">
              We’re creating an ecosystem for humans and machines to work
              together to solve the world’s most important problems – starting
              with a notebook that augments your intelligence.
            </p>

            <div className="flex flex-wrap gap-4 xxs:max-md:justify-center">
              <button className="rounded-md border border-[#0038CE] px-4 py-1 font-Red-Hat-Display text-base font-bold text-white">
                Try Ideaflow Notes
              </button>

              <button className="rounded-md border border-[#0038CE] px-4 py-1 font-Red-Hat-Display text-base font-bold text-white">
                iOS
              </button>

              <button className="rounded-md border border-[#0038CE] px-4 py-1 font-Red-Hat-Display text-base font-bold text-white">
                Guide
              </button>

              <button className="rounded-md border border-[#0038CE] px-4 py-1 font-Red-Hat-Display text-base font-bold text-white">
                Twitter
              </button>

              <button className="rounded-md border border-[#0038CE] px-4 py-1 font-Red-Hat-Display text-base font-bold text-white">
                Notes
              </button>
            </div>
          </div>

          <div className="max-w-[400px]">
            <img
              className="object-cover w-full -mt-8 lg:-mt-16 drop-shadow-2xl"
              src={aiRoboImage}
              alt="robo"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1080px] w-11/12 flex-col space-y-14 xxs:max-sm:space-y-7 pb-16">
        <h1 className="text-2xl font-normal text-center text-white at480:text-3xl font-Red-Hat-Display">
          Backed by world-class investors and partners
        </h1>
        <div className="flex items-center w-full gap-10 justify-evenly">
          <div className="max-w-[12rem]">
            <img
              className="object-cover w-full"
              src={firstRound}
              alt="first-round"
            />
          </div>
          <div className="max-w-[12rem]">
            <img className="object-cover w-full" src={VC} alt="vc" />
          </div>
          <div className="max-w-[12rem]">
            <img className="object-cover w-full" src={starX} alt="startX" />
          </div>
          <p className="max-w-[12rem] font-Red-Hat-Display xxs:max-at480:text-xl text-3xl font-bold text-white">
            + 33 More
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection