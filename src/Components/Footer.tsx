const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img
              src="/logo-text.png"
              alt="Dev Stack"
              className="w-30 h-auto object-contain"
            />

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-6">
              <a
                href="#"
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-5">
              Legal
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2026 Dev Stack. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex items-center gap-5 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-700 transition"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-700 transition"
              >
                Terms
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;