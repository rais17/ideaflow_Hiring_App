import React from 'react'
import EmployeCard from './EmployeCard';

const OurTeam = () => {
    const advisor = [
      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efe7f5ddc9b2d334f508b36_Avatar%20NR.png",
        name: "Naval Ravikant",
        position: "Founder of AngelList",
        description: "",
      },

      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac0a92579814c4f6060d0_Avatar%20JL.png",
        name: "Joe Lonsdale",
        position: "Founder of Palantir",
        description: "",
      },

      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac0a9bd965c6f659d9afb_Avatar%20MW.png",
        name: "Marty Weiner",
        position: "Former CTO of Reddit",
        description: "",
      },

      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac266b0171beef967fcc0_Avatar-%20TD.png",
        name: "Tim Draper",
        position: "Founder of Draper Associates",
        description: "",
      },

      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f59dd959a82d3784dd9ac3a_Avatar%20KB%20bw.png",
        name: "Kelvin Beachum Jr",
        position: "Investor, Humanitarian, NFL Playe",
        description: "",
      },

      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac0a9393c9705aefe9982_Avatar%20RD2.png",
        name: "Ryan Delk",
        position: "Founder of Primer",
        description: "",
      },
    ];

    const leadership = [
      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/600e1c5da2ae0d04a3bcc354_Jacob%20v2.png",
        name: "Jacob Cole",
        position: "CEO",
        description:
          "Past: MIT Media Lab; researcher with Tim Berners-Lee. Venture Partner at Outliers Fund.",
      },

      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac09c6835e22147e6286f_Avatar-%20DG.png",
        name: "David Greenspan",
        position: "Head of Product",
        description:
          "Past: Co-Founder of AppJet, created Etherpad (acquired by Google); YC W07. 1st Engineer at Meteor.",
      },

      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f07f06964242a43c2e9de66_Avatar-%20BM.png",
        name: "Bat Manson",
        position: "Head of Engineering",
        description:
          "Past: Serial Entrepreneur. Engineering Manager at Apple. Director of Engineering at Shone; YC W18",
      },

              {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac266b0171beef967fcc0_Avatar-%20TD.png",
        name: "Tim Draper",
        position: "Founder of Draper Associates",
        description: "Past: Co-Founder of AppJet, created Etherpad (acquired by Google); YC W07. 1st Engineer at Meteor",
      },

      {
        imageurl:
          "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/61d8de932703b42b586624d9_Albert.png",
        name: "Albert Sławiński",
        position: "Full Stack Engineer",
        description: "Past: Software Engineer at Palantir. Oxford Alum.",
      },
    ];
  return (
    <div className="w-full min-h-screen bg-bottom bg-hero-bg">
      <div className="mx-auto max-w-[1080px] pb-10 space-y-10">
        <div className="flex min-h-[88vh] w-full flex-col justify-center space-y-8">
          <h1 className="text-5xl font-bold text-center text-white font-Red-Hat-Display">
            Advisor
          </h1>
          <div className="flex flex-wrap justify-center w-full">
            {advisor.map((item, index) => {
              return <EmployeCard key={index} {...item} />;
            })}
          </div>
        </div>

        <div className="flex min-h-[88vh] w-full flex-col justify-center space-y-8">
          <h1 className="text-5xl font-bold text-center text-white font-Red-Hat-Display">
            Leadership
          </h1>
          <div className="flex flex-wrap justify-center w-full">
            {leadership.map((item, index) => {
              return <EmployeCard key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam
