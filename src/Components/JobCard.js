import React from 'react'

const JobCard = ({ position, isRemote, description, isFull }) => {
    console.log("position", position);
    return (
      <div
        className={`${
          isFull ? "basis-full" : "basis-5/12"
        } flex grow flex-col space-y-4 rounded-lg bg-white p-4 shadow-inner ${!isFull ? 'xxs:max-md:basis-full' : 'basis-5/12'}`}
      >
        <div>
          <h1 className="text-2xl font-semibold font-Red-Hat-Display">
            {position}
          </h1>
          <h2 className="mt-[1px] font-Red-Hat-Display text-lg font-medium">
            {isRemote ? "Remote" : "Onsite"}
          </h2>
        </div>

        <p className="text-xl font-normal font-Red-Hat-Display">
          {description}
        </p>

        <button className="px-2 py-1 text-base font-bold text-left text-white rounded-sm max-w-fit bg-sky-500 font-Red-Hat-Display self">
          Apply Now
        </button>
      </div>
    );
};

export default JobCard