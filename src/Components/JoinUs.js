import React from 'react'
import EmployeCard from './EmployeCard'

const JoinUs = () => {
  const EmployeInfo = [
    {
      imageurl: 'https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac0a9bd965c6f659d9afb_Avatar%20MW.png',
      name: "Marty Weiner",
      position: "Former CTO, Reddit, Ideaflow Advisor",
      description:
        "A key step to realizing the potential of the Web as a medium for collective intelligence",
    },
    {
      imageurl: 'https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efbe6fc6697d411b88e0cc6_JD.png',
      name: "John Devadoss",
      position: 
        "Founding Director, Microsoft Digital Consulting,Ideaflow Advisor",
      description:
        "Ideaflow is the force multiplier for business productivity in this new normal",
    },
    {
      imageurl: 'https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac266b0171beef967fcc0_Avatar-%20TD.png',
      name: "Tim Draper",
      position: "Founder, DFJ, Ideaflow Investor",
      description:
        "The amount of value that can be unlocked by connecting the right people and ideas together is incredible. I’m very excited for what Ideaflow is building",
    },
  ];
  return (
    <div className="w-full py-28 bg-gradientManual">
      <div className="mx-auto flex max-w-[1080px] justify-center gap-4 w-11/12 flex-wrap">
        {EmployeInfo.map((card, index) => (
          <EmployeCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default JoinUs