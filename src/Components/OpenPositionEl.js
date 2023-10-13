import React from 'react'
import JobCard from './JobCard';
import CompanyQuotes from './CompanyQuotes';

const OpenPositionEl = ({jobDetails}) => {
  return (
    <div className="mx-auto flex max-w-[1080px] flex-col items-center py-5 w-11/12">
      <h1 className="text-3xl font-semibold text-center font-Red-Hat-Display">
        Open Position
      </h1>
      <a
        className="px-4 py-2 my-4 text-sm font-normal text-white bg-sky-600 font-Red-Hat-Display"
        href="/"
      >
        Ideaflow.io Engineering Hiring Update 2023
      </a>
      <JobCard {...jobDetails[0]} isFull={true} />
      <p className="text-center my-7 font-Red-Hat-Display">
        We need to create extensions of our ability to make sense of the world
        together." ~Jerry Michalski
      </p>

      <div className="flex flex-wrap w-full gap-4">
        {jobDetails.slice(1).map((item) => {
          return <JobCard key={item.id} {...item} isFull={false} />;
        })}
      </div>

        <CompanyQuotes />
    </div>
  );
}

export default OpenPositionEl