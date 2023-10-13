import React from 'react'

const CompanyQuotes = () => {
  return (
    <div className="flex flex-col items-center py-10 space-y-10">
      <h1 className="font-Red-Hat-Display text-3xl font-normal text-[#333333]">
        "Art is that which holds your attention beyond practicality."
      </h1>
      <div className="flex flex-col items-center space-y-5">
        <p className="text-center font-Red-Hat-Display text-2xl font-normal text-[#333333]">
          We believe diverse teams are the most effective – female and minority
          candidates strongly encouraged to apply!
        </p>

        <div>
          <span className="font-Red-Hat-Display text-xl font-normal text-[#333333]">
            Further Reading:{" "}
          </span>
          <a
            className="font-Red-Hat-Display text-xl font-normal text-[#333333]"
            href="mailto:http://hiringblurb.jacobcole.net/"
          >
            Click Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompanyQuotes