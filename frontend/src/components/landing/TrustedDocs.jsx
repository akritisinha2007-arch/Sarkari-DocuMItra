import { motion } from "framer-motion";
import {
  CreditCard,
  FileText,
  Landmark,
  GraduationCap,
  BadgeCheck,
  House,
} from "lucide-react";

const docs = [
  {
    icon: <CreditCard size={32} />,
    title: "Aadhaar Card",
  },
  {
    icon: <FileText size={32} />,
    title: "PAN Card",
  },
  {
    icon: <Landmark size={32} />,
    title: "Income Certificate",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Scholarship Forms",
  },
  {
    icon: <BadgeCheck size={32} />,
    title: "Birth Certificate",
  },
  {
    icon: <House size={32} />,
    title: "Ration Card",
  },
];

function TrustedDocs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900"
        >
          Trusted Government Documents
        </motion.h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Our AI can understand and simplify multiple government documents.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">

          {docs.map((doc, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >

              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-5">
                {doc.icon}
              </div>

              <h3 className="font-semibold text-slate-800">
                {doc.title}
              </h3>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default TrustedDocs;