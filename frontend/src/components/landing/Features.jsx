import { motion } from "framer-motion";
import {
  Brain,
  ClipboardCheck,
  MessageSquareText,
  Languages,
  FilePenLine,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={40} />,
    title: "AI Summary",
    description:
      "Understand complicated government documents in simple language within seconds.",
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "Smart Checklist",
    description:
      "Automatically detect missing documents and required verification steps.",
  },
  {
    icon: <MessageSquareText size={40} />,
    title: "AI Chat Assistant",
    description:
      "Ask questions in natural language and receive instant answers.",
  },
  {
    icon: <Languages size={40} />,
    title: "Multi-Language",
    description:
      "Translate documents into Hindi, English and other Indian languages.",
  },
  {
    icon: <FilePenLine size={40} />,
    title: "Auto Form Filling",
    description:
      "Extract document details and automatically fill government forms.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Secure & Private",
    description:
      "Your uploaded documents remain encrypted and protected.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-5xl font-bold text-slate-900">
            Powerful AI Features
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to understand, verify and manage
            government documents using Artificial Intelligence.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;