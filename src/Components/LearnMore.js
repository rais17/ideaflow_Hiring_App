import React from 'react'
import aiFacePNG from "../Assets/aiFacePNG.png";
import Btn from './Btn';

const LearnMore = () => {
  
  return (
    <div className="flex items-center justify-center w-full min-h-screen py-20 bg-center bg-hero-bg">
      <div className="relative mx-auto flex w-11/12 max-w-[1080px] flex-col items-center justify-between gap-8 overflow-hidden rounded-lg px-8 shadow-2xl at930:flex-row">
        <div className="flex flex-col space-y-10 grow basis-1/2 xxs:max-at930:items-center">
          <h1 className="text-3xl font-medium text-white font-Red-Hat-Display xxs:max-at930:text-center sm:text-4xl">
            The auto suggest layer for human thinking
          </h1>

          <p className="text-lg font-normal text-white font-Red-Hat-Display text-opacity-60 xxs:max-at930:text-center">
            Connect fragments of information from siloed sources faster than
            ever before. Your organization's collective memory at your
            fingertips.
          </p>
          <div className="block xxs:max-at930:hidden">
            <Btn />
          </div>
        </div>

        <div className="mt-4 at930:basis-1/2">
          <img
            className="object-cover w-full h-full "
            src={aiFacePNG}
            alt="connection"
          />
        </div>
        <div className="block pb-4 at930:hidden">
          <Btn />
        </div>
      </div>
    </div>
  );
}

export default LearnMore