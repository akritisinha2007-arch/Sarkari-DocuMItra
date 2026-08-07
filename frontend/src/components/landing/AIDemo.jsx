import { motion } from "framer-motion";
import {
  FileText,
  Brain,
  CheckCircle2,
  MessageCircle,
  Languages,
  Sparkles,
} from "lucide-react";

function AIDemo() {
  return (
    <section className="py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center">
            Experience AI in Action
          </h2>

          <p className="text-center text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
            Upload a government document and watch AI simplify,
            summarize and answer your questions instantly.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* LEFT */}

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
          >

            <div className="flex items-center gap-3 mb-8">

              <FileText className="text-cyan-300" />

              <h3 className="text-2xl font-bold">

                Scholarship_Form.pdf

              </h3>

            </div>

            <div className="space-y-6">

              <div className="flex gap-3">

                <CheckCircle2 className="text-green-400" />

                OCR Completed

              </div>

              <div className="flex gap-3">

                <Brain className="text-blue-300" />

                AI Summary Generated

              </div>

              <div className="flex gap-3">

                <Languages className="text-yellow-300" />

                Hindi Translation Ready

              </div>

              <div className="flex gap-3">

                <Sparkles className="text-pink-300" />

                Eligibility Checked

              </div>

            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-5">

              <p className="font-semibold">

                AI Summary

              </p>

              <p className="mt-4 text-gray-300 leading-7">

                This scholarship is available for students with annual
                family income below ₹2,50,000.

                Required documents include Aadhaar Card,
                Income Certificate and Bank Passbook.

                Last date:
                30 September.

              </p>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900"
          >

            <div className="flex items-center gap-3 mb-8">

              <MessageCircle className="text-blue-600" />

              <h3 className="font-bold text-2xl">

                Ask AI

              </h3>

            </div>

            <div className="space-y-5">

              <div className="bg-blue-100 rounded-2xl p-4 w-fit ml-auto">

                What documents are missing?

              </div>

              <div className="bg-slate-100 rounded-2xl p-4">

                You still need:

                <ul className="mt-4 space-y-2">

                  <li>✅ Aadhaar Card</li>

                  <li>✅ Income Certificate</li>

                  <li>✅ Passport Size Photo</li>

                </ul>

              </div>

              <div className="bg-blue-100 rounded-2xl p-4 w-fit ml-auto">

                Can I apply in Hindi?

              </div>

              <div className="bg-slate-100 rounded-2xl p-4">

                Yes.

                The complete document has been translated
                into Hindi and can be read aloud.

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default AIDemo;