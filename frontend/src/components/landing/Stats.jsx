import { motion } from "framer-motion";
import {
  FileCheck,
  Brain,
  Languages,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    number: "10K+",
    title: "Documents Processed",
    icon: <FileCheck size={40} />,
  },
  {
    number: "98%",
    title: "AI Accuracy",
    icon: <Brain size={40} />,
  },
  {
    number: "22+",
    title: "Supported Document Types",
    icon: <Languages size={40} />,
  },
  {
    number: "100%",
    title: "Secure & Private",
    icon: <ShieldCheck size={40} />,
  },
];

function Stats() {
  return (
    <section className="py-24 bg-blue-600 text-white">

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >
          <h2 className="text-5xl font-bold text-center">
            Trusted AI Platform
          </h2>

          <p className="text-center mt-5 text-blue-100 text-lg">
            Built to simplify government services for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*0.1}}
              viewport={{once:true}}
              whileHover={{
                scale:1.05,
                y:-10,
              }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20"
            >

              <div className="flex justify-center text-cyan-300">

                {item.icon}

              </div>

              <h1 className="text-5xl font-bold mt-6">

                {item.number}

              </h1>

              <p className="mt-4 text-blue-100">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;