import React from 'react'

const Footer = () => {
  return (
    <div className="w-full pt-20 bg-gradientManual">
      <div className="mx-auto flex w-11/12 max-w-[1080px] flex-col gap-8 justify-between space-x-4 md:flex-row">
        <div className="text-3xl font-medium tracking-wide text-white font-Red-Hat-Display xxs:max-md:text-center">
          Ideaflow
        </div>
        <div className="flex flex-col xxs:max-md:items-center">
          <h1 className="text-xl font-medium text-white font-Red-Hat-Display">
            $rabbithole
          </h1>

          <div className="flex flex-col mt-6 space-y-1 text-base font-normal text-white font-Red-Hat-Display xxs:max-md:items-center">
            <p>Memex</p>
            <p>Niklas Luhmann's Zettelkasten</p>
            <p>Collective IQ</p>
            <p>Intelligence amplification</p>
            <p>Tim Berners-Lee’s Giant Global Graph</p>
            <p>Polymath Project</p>
            <p>Category Theory for Scientists</p>
            <p>ideaflowplan.jacobcole.net</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="flex flex-col xxs:max-md:items-center">
          <h1 className="text-xl font-medium text-white font-Red-Hat-Display">
            Latest updates
          </h1>

          <div className="flex flex-col mt-6 space-y-1 text-base font-normal text-white font-Red-Hat-Display xxs:max-md:items-center">
            <p>Blog</p>
            <p>Funding</p>
            <p>Bullet View Video</p>
          </div>
        </div>
        <div className="flex flex-col xxs:max-md:items-center">
          <h1 className="text-xl font-medium text-white font-Red-Hat-Display">
            Contact
          </h1>

          <div className="flex flex-col mt-6 space-y-1 text-base font-normal text-white font-Red-Hat-Display xxs:max-md:items-center">
            <a href="mailto:pleasecontact@ideaflow:">Email</a>
            <a href="https://www.linkedin.com/company/ideaflow-inc/about/">
              Linkedin
            </a>
            <a href="https://www.facebook.com/ideaflowgraphs/?ref=py_c">
              Facebook
            </a>
            <a href="https://twitter.com/ideaflowgraphs">Twitter</a>
          </div>
        </div>
      </div>

      <h1 className="py-8 text-sm font-light text-center text-white text-opacity-50 font-Red-Hat-Display">
        Copyright © 2020 Ideaflow, Inc. All rights reserved.
      </h1>
    </div>
  );
}

export default Footer