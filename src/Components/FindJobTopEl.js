import React from 'react'
import webPNG from "../Assets/WebPNG.png";

const FindJobTopEl = () => {
  return (
    <div className="flex min-h-[90vh] w-full items-center justify-center bg-hero-bg bg-right-bottom">
      <div className="relative mx-auto flex w-11/12 max-w-[1080px] flex-col items-center justify-center gap-8 at930:flex-row">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold tracking-wide text-center text-white font-Red-Hat-Display at930:text-start">
            Help Us To Build the Future of the{" "}
            <span className="xxs:max-at930:text-white text-[#009BF6]">WEB</span>
          </h1>

          <div>
            <p className="whitespace-normal font-Red-Hat-Display text-3xl font-normal text-white md:text-[#7d8590] xxs:max-at930:text-center">
              <span className="text-4xl italic font-medium text-shadow font-Red-Hat-Display text-sky-600">
                Ideaflow
              </span>{" "}
              is a key step to realizing the potential of the Web as a medium
              for collective intelligence
            </p>

            <h1 className="mt-2 font-Red-Hat-Display text-sm font-normal italic text-[#009BF6] xxs:max-at930:text-center">
              Marty Weiner, Former CTO, Reddit
            </h1>
          </div>
        </div>

        <div className="max-w-[400px] xxs:max-at930:absolute xxs:max-at930:max-w-xl">
          <img
            className="object-cover w-full aspect-square"
            src={webPNG}
            alt="web"
          />
        </div>
      </div>
    </div>
  );
}

export default FindJobTopEl