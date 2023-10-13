import React from 'react'
import FindJobTopEl from './FindJobTopEl';
import OpenPositionEl from './OpenPositionEl';

const FindJob = () => {

  const jobDetails = [
    {
      id: 12,
      position: "Full Stack Engineer",
      isRemote: true,
      description:
        "Who has significant frontend experience and is up to the challenge of writing something as complex and high performance as an IDE in JavaScript",
    },

    {
      id: 98,
      position: "iOS Engineer",
      isRemote: true,
      description:
        "Who wants to build the best-ever, low-friction personal notes app",
    },

    {
      id: 76,
      position: "Product Designer",
      isRemote: true,
      description:
        "Who has an excellent product sense, as well as exceptional user experience & user interface skills",
    },

    {
      id: 97,
      position: "Marketing Associate",
      isRemote: true,
      description: "Who is an outstanding writer and strategic mind",
    },

    {
      id: 34,
      position: "ML (NLP) Engineer",
      isRemote: true,
      description:
        "Who has the gumption to write something on par with a new search engine. Ideally you are familiar with dependency parse trees and have written an interpreter in the past.",
    },
  ];
  
  return (
    <div className="min-h-screen w-full bg-[#F2F2F2]">
      <FindJobTopEl />
      <OpenPositionEl jobDetails={jobDetails} />
    </div>
  );
}

export default FindJob