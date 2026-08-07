function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-violet-400">
              Sarkari-DocuMitra
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              AI-powered platform that simplifies government documents,
              explains them in plain language, generates smart checklists,
              and helps citizens access government services effortlessly.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-white cursor-pointer transition">
                Features
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Upload Document
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Dashboard
              </li>

              <li className="hover:text-white cursor-pointer transition">
                AI Assistant
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-white cursor-pointer transition">
                Documentation
              </li>

              <li className="hover:text-white cursor-pointer transition">
                FAQ
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Terms & Conditions
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>
                📧 support@sarkaridocumitra.ai
              </p>

              <p>
                💻 GitHub
              </p>

              <p>
                💼 LinkedIn
              </p>

              <p>
                🇮🇳 Built for Smart India Hackathon
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-center md:text-left">
            © 2026 Sarkari-DocuMitra. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-5 md:mt-0 text-slate-400">

            <span className="hover:text-white cursor-pointer transition">
              Privacy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Contact
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;