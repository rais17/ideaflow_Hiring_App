import React from 'react'

const About = () => {
  return (
    <div className="w-full min-h-screen py-20 bg-bottom bg-hero-bg">
      <div className="mx-auto flex-col lg:flex-row flex max-w-[1080px] gap-8">
        <div className="w-full py-4 space-y-10 shadow-2xl">
          <h1 className="text-5xl font-bold text-center text-white font-Red-Hat-Display">
            Who we are
          </h1>

          <div className="px-4 space-y-7">
            <p className="text-lg font-normal text-justify text-white font-Red-Hat-Display">
              We are Engineers with an artistic impulse, veteran entrepreneurs,
              community builders, curators of quotes, hosts of intellectual
              salons, side project fanatics, lovers of nature and human nature –
              all united by a desire to scale our ability to help people, and to
              help the Internet continue to truly serve on the side of the user.
            </p>

            <p className="text-lg font-normal text-justify text-white font-Red-Hat-Display">
              We believe in the power of small, highly-skilled teams with a deep
              sense of mutual respect. In each role, we are looking for a
              special sort of person with strong bias towards action to become
              deeply passionate about the product and take tremendous ownership
            </p>

            <p className="text-lg font-normal text-justify text-white font-Red-Hat-Display">
              At Ideaflow, it’s important for you to be yourself, nurture your
              creativity, and grow in well being. Join us in building a future
              where humans and machines work together to solve the world’s most
              important problems
            </p>
          </div>
        </div>

        <div className="w-full py-4 space-y-10 shadow-2xl">
          <h1 className="text-5xl font-bold text-center text-white font-Red-Hat-Display">
            Our mission
          </h1>

          <div className="px-4 space-y-7 ">
            <p className="text-lg font-normal text-justify text-white font-Red-Hat-Display">
              How can we solve problems too big to fit in any individual's head?
            </p>

            <p className="text-lg font-normal text-justify text-white font-Red-Hat-Display">
              Ray Kurzweil projects that, by 2045, humanity will be hooked up to
              a "shared neocortex in the cloud" by brain-computer interfaces. We
              will leave the brain-computer interfaces to Elon Musk, but we
              believe it’s possible to build that "shared brain" now, and that
              it might look different than many imagine.
            </p>

            <p className="text-lg font-normal text-justify text-white font-Red-Hat-Display">
              We're starting by creating a notebook that augments the user's
              intelligence
            </p>

            <p className="text-lg font-normal text-justify text-white font-Red-Hat-Display">
              We want to create a future where nobody feels alone with their
              ideas, where intellectual soulmates find each other, where
              superconnectors are empowered. We see our software as critical to
              creating the frame for humans and machines to work together to
              solve the world's most important problems.
            </p>

            <p className="text-lg font-normal text-justify text-white font-Red-Hat-Display">
              With a raise of $10 million and the backing of prominent
              thought-leaders in the field, we are ready to take on these
              challenges. We are looking for fearlessly creative individuals who
              can fall in love with personal information management systems with
              us – which we see as integral to the destiny of the Web.
            </p>
          </div>
        </div>

        {/* <div>
          <h1 className="text-white font-Red-Hat-Display">
            People Centric Policies
          </h1>
          <div>
            <p className="text-white font-Red-Hat-Display">
              $500 per month to promote well being
            </p>
          </div>

          <div>
            <p className="text-white font-Red-Hat-Display">
              Comprehensive healthcare coverage (including acupuncture!)
            </p>
          </div>

          <div>
            <p className="text-white font-Red-Hat-Display">
              Donation matching to your favorite charities
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About