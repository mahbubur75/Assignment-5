

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16 py-16 md:py-20">

          {/* Left Side */}
          <div className="max-w-xl">

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900">
              Build Your Ideal
              <br />

              <span className="brand-gradient bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-500 text-base md:text-lg leading-7 max-w-lg">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              {/* Primary Button */}
              <button className="px-6 py-3 rounded-full text-white font-semibold brand-gradient hover:opacity-90 transition">
                Explore Technologies →
              </button>

              {/* Outline Button */}
              <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-pink-400 hover:text-pink-500 transition">
                Learn More
              </button>

            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/banner-stack.png"
              alt="Modern technology stack"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;