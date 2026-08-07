import { motion } from "framer-motion";
import {
  Upload,
  ScanText,
  Brain,
  FileText,
  MessageCircle,
  Download,
} from "lucide-react";

const steps = [
  {
    icon: <Upload size={35} />,
    title: "Upload Document",
    desc: "Upload any government PDF or image.",
  },
  {
    icon: <ScanText size={35} />,
    title: "OCR Processing",
    desc: "Extracts text with AI-powered OCR.",
  },
  {
    icon: <Brain size={35} />,
    title: "AI Understanding",
    desc: "AI understands every section of your document.",
  },
  {
    icon: <FileText size={35} />,
    title: "Summary Generated",
    desc: "Creates an easy-to-read explanation.",
  },
  {
    icon: <MessageCircle size={35} />,
    title: "Ask Questions",
    desc: "Chat with AI in Hindi or English.",
  },
  {
    icon: <Download size={35} />,
    title: "Download Report",
    desc: "Save summaries and checklists instantly.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-slate-900">
            How It Works
          </h2>

          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Upload your government document and let AI handle the
            difficult work in seconds.
          </p>
        </motion.div>

        <div className="relative mt-20">

          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-blue-100"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="relative text-center"
              >

                <div className="mx-auto w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl relative z-10">

                  {step.icon}

                </div>

                <h3 className="mt-6 font-bold text-xl">

                  {step.title}

                </h3>

                <p className="text-gray-600 mt-3 leading-7">

                  {step.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;