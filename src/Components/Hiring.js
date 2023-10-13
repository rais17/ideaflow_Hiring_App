import React from 'react'

const Hiring = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1080px] py-20 flex flex-col justify-center items-center space-y-3 w-11/12">
        <p className='text-3xl font-bold tracking-wide font-Red-Hat-Display'>We're Hiring Key Roles</p>
        <p className='text-sm font-normal font-Red-Hat-Display'>Help us extend the human mind.</p>
        <button className="rounded-md border border-[#0038CE] px-4 py-1 font-Red-Hat-Display text-base font-bold">
          Join us or refer someone
        </button>
      </div>
    </div>
  );
}

export default Hiring