import React from "react";
import connectPNG from "../Assets/connectPNG2.png";

const DetailSection = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen py-20 bg-top bg-hero-bg">
      <div className="mx-auto flex w-11/12 max-w-[1080px] flex-col items-center justify-between gap-8 rounded-lg px-8 shadow-2xl at930:flex-row-reverse">
        <div className="flex flex-col space-y-10 grow basis-1/2">
          <h1 className="text-3xl font-medium text-white sm:text-4xl font-Red-Hat-Display xxs:max-at930:text-center">
            Connecting people with matching puzzle pieces
          </h1>
          <div>
            <p className="text-lg font-normal text-white font-Red-Hat-Display text-opacity-60 xxs:max-at930:text-center">
              Connecting people with matching puzzle pieces There are millions
              of scientists trying to cure the likes of AIDS and Alzheimer’s.
              Maybe the cure is currently separated in different people’s heads.
              How can we design the web so that these half-formed solutions can
              come together?
            </p>

            <p className="mt-2 font-Red-Hat-Display text-sm font-normal italic text-[#F99417] xxs:max-at930:text-center">
              Sir Tim Berners-Lee, Creator of the Web
            </p>
          </div>
        </div>

        <div className="h-[400px] at930:basis-1/2">
          <img
            className="object-cover w-full h-full -scale-x-100"
            src={connectPNG}
            alt="connection"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
