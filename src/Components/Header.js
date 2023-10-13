import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full">
      <div className="fixed z-10 w-full bg-center bg-no-repeat bg-cover bg-hero-bg">
        <div className="mx-auto flex w-11/12 max-w-[1080px] items-center justify-between py-4">
          <Link
            to="/"
            className="text-4xl italic font-semibold text-white font-Red-Hat-Display"
          >
            Ideaflow
          </Link>

          <div className="flex space-x-6">
            <Link
              className="text-base font-medium text-white font-Red-Hat-Display"
              to="/"
            >
              Home
            </Link>

            <Link
              className="text-base font-medium text-white font-Red-Hat-Display"
              to="/findjob"
            >
              We're Hiring
            </Link>

            <Link
              className="text-base font-medium text-white font-Red-Hat-Display"
              to="/ourteam"
            >
              Our Team
            </Link>

            <Link
              className="text-base font-medium text-white font-Red-Hat-Display"
              to="/about"
            >
              About
            </Link>

            <Link
              className="text-base font-medium text-white font-Red-Hat-Display"
              to="/contactus"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[72px] w-full"></div>
    </div>
  );
}

export default Header