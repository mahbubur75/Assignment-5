
const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">

          {/* Left - Logo */}
          <div className="flex items-center">
            <img
              src="/logo-text.png"
              alt="Dev Stack"
              className="w-32 h-auto object-contain"
            />
          </div>

          {/* Center - Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-gray-700 hover:text-pink-500">
              Home
            </a>

            <a href="#" className="text-gray-700 hover:text-pink-500">
              Technologies
            </a>

            <a href="#" className="text-gray-700 hover:text-pink-500">
              Projects
            </a>

            <a href="#" className="text-gray-700 hover:text-pink-500">
              About
            </a>

            <a href="#" className="text-gray-700 hover:text-pink-500">
              Contact
            </a>
          </div>

          {/* Right - Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <button className="text-gray-700 font-medium hover:text-pink-500">
              Sign In
            </button>

            <button className="px-5 py-2 rounded-full text-white font-medium brand-gradient">
              Sign Up
            </button>
          </div>

          {/* Mobile */}
          <button className="md:hidden text-2xl text-gray-700">
            ☰
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Nav;