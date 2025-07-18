import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileText, Code, RefreshCw, ClipboardCheck, UserCheck, Cpu, CheckCircle, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <FileText size={28} />,
    title: "Medical Billing",
    description: "Streamline your revenue cycle with our efficient and accurate billing services.",
    features: [
      "Claims submission and follow-up",
      "Payment posting and reconciliation",
      "Insurance verification and eligibility"
    ],
    color: "blue"
  },
  {
    icon: <Code size={28} />,
    title: "Medical Coding",
    description: "Ensure compliance and accuracy in claims with our precise coding solutions.",
    features: [
      "ICD-10 and CPT coding expertise",
      "Compliance with HIPAA regulations",
      "Code auditing and documentation review"
    ],
    color: "purple"
  },
  {
    icon: <RefreshCw size={28} />,
    title: "AR & Denial Management",
    description: "Optimize cash flow with our proactive approach to reducing denials.",
    features: [
      "Denial analysis and resolution",
      "Appeals and reconsiderations",
      "Aging accounts management"
    ],
    color: "green"
  },
  {
    icon: <ClipboardCheck size={28} />,
    title: "Audit Services",
    description: "Maintain accuracy and compliance with our comprehensive audit solutions.",
    features: [
      "Internal coding audits",
      "Regulatory compliance reviews",
      "Risk management and fraud prevention"
    ],
    color: "indigo"
  },
  {
    icon: <UserCheck size={28} />,
    title: "Credentialing",
    description: "Streamline your provider and payer credentialing processes seamlessly.",
    features: [
      "Provider enrollment and contracting",
      "Credentialing with insurance networks",
      "Ongoing re-credentialing services"
    ],
    color: "amber"
  },
  {
    icon: <Cpu size={28} />,
    title: "Healthcare IT",
    description: "Leverage cutting-edge IT solutions tailored for the healthcare industry.",
    features: [
      "EHR/EMR implementation",
      "Cybersecurity solutions",
      "Data analytics and reporting"
    ],
    color: "cyan"
  }
];

export function Services() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section className="relative bg-gradient-to-br from-[#e6f0ff] via-white to-[#f0f9ff] py-24 px-6 md:px-12 overflow-hidden">
      {/* Blurred Background Circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full blur-[150px] top-10 right-10" />
        <div className="absolute w-[250px] h-[250px] bg-purple-300 opacity-20 rounded-full blur-[120px] bottom-20 left-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Explore Our <span className="text-blue-600">Core Services</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Tailored solutions for healthcare excellence — with performance, precision, and partnership.
          </p>
        </motion.div>

        {/* Scrollable Services */}
        <div ref={containerRef} className="flex gap-8 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[90vw] sm:w-[70vw] md:w-[40vw] xl:w-[30vw]"
            >
              <div className="bg-white/60 backdrop-blur-md border border-gray-100 shadow-xl rounded-3xl p-6 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-${service.color}-100 text-${service.color}-600 flex items-center justify-center mb-5`}>
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`text-${service.color}-500 w-4 h-4 mr-2 mt-1`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`mt-auto text-${service.color}-600 font-medium flex items-center`}
                >
                  Learn More <ArrowRight className="ml-2" size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hidden md:flex justify-center mt-6 text-gray-500"
        >
          <div className="flex items-center gap-2 text-sm">
            <span>Scroll to explore</span>
            <ArrowRight size={16} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
