import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-300 blur-[150px] opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-300 blur-[150px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">

            <Sparkles size={18} />

            AI Powered Platform

          </div>

          <h1 className="text-6xl font-extrabold leading-tight text-slate-900">

            AI-Powered

            <br />

            Government

            <span className="text-blue-600">
              {" "}Document Assistant
            </span>

          </h1>

          <p className="text-lg text-gray-600 mt-8 leading-8">

            Upload any government document and let AI simplify complex
            language, generate summaries, create checklists and answer
            your questions instantly.

          </p>

<div className="flex gap-5 mt-10">

  <Link to="/upload">
    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl shadow-xl">
      <Upload size={20} />
      Upload Document
    </button>
  </Link>

  <button className="px-8 py-4 rounded-xl border border-gray-300 hover:bg-white transition">
    Watch Demo
  </button>

</div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="bg-white rounded-3xl shadow-2xl p-8 w-[420px] border">

            <div className="flex items-center gap-3 mb-8">

              <FileText
                size={34}
                className="text-blue-600"
              />

              <div>

                <h2 className="font-bold">
                  Aadhaar.pdf
                </h2>

                <p className="text-sm text-gray-500">
                  Uploaded Successfully
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" />
                OCR Completed
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" />
                AI Summary Ready
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" />
                Checklist Generated
              </div>

            </div>

            <div className="mt-10">

              <h3 className="font-semibold">
                AI Confidence
              </h3>

              <div className="w-full h-3 rounded-full bg-gray-200 mt-3">

                <div className="w-[98%] h-3 rounded-full bg-blue-600"></div>

              </div>

              <p className="mt-2 font-bold text-blue-600">
                98%
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;