import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FileText,
  Code,
  RefreshCw,
  ClipboardCheck,
  UserCheck,
  Cpu,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <FileText size={32} />,
    title: "Medical Billing",
    subtitle: "Revenue Cycle Optimization",
    description:
      "Transform your financial operations with our comprehensive billing solutions that maximize revenue and minimize delays.",
    features: [
      "99.2% first-pass claim acceptance rate",
      "Real-time payment posting & reconciliation",
      "Advanced insurance verification systems",
    ],
    stats: { value: "40%", label: "Faster Collections" },
    gradient: "from-[#21abbd] to-[#1a8a9a]",
  },
  {
    icon: <Code size={32} />,
    title: "Medical Coding",
    subtitle: "Precision & Compliance",
    description:
      "Ensure maximum reimbursement with our certified coding specialists who maintain 99.8% accuracy rates.",
    features: [
      "AAPC & AHIMA certified coders",
      "Complete HIPAA compliance framework",
      "AI-assisted code validation & auditing",
    ],
    stats: { value: "99.8%", label: "Coding Accuracy" },
    gradient: "from-[#e78617] to-[#c66d0f]",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "AR & Denial Management",
    subtitle: "Cash Flow Excellence",
    description:
      "Reduce denial rates by up to 65% with our proactive denial prevention and rapid resolution strategies.",
    features: [
      "Predictive denial analytics",
      "Automated appeals processing",
      "Real-time aging reports & insights",
    ],
    stats: { value: "65%", label: "Denial Reduction" },
    gradient: "from-[#21abbd] to-[#e78617]",
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: "Audit Services",
    subtitle: "Risk Mitigation",
    description:
      "Protect your practice with comprehensive audits that ensure compliance and identify revenue opportunities.",
    features: [
      "Pre & post-payment audit services",
      "OIG compliance monitoring",
      "Revenue integrity assessments",
    ],
    stats: { value: "35%", label: "Risk Reduction" },
    gradient: "from-[#e78617] to-[#21abbd]",
  },
  {
    icon: <UserCheck size={32} />,
    title: "Credentialing",
    subtitle: "Network Expansion",
    description:
      "Accelerate your market entry with our streamlined credentialing services that reduce wait times by 50%.",
    features: [
      "Expedited provider enrollment",
      "Multi-state licensing support",
      "Continuous monitoring & renewals",
    ],
    stats: { value: "50%", label: "Faster Processing" },
    gradient: "from-[#21abbd] to-[#1a8a9a]",
  },
  {
    icon: <Cpu size={32} />,
    title: "Healthcare IT",
    subtitle: "Digital Transformation",
    description:
      "Modernize your operations with cutting-edge technology solutions designed for healthcare excellence.",
    features: [
      "Cloud-based EHR integration",
      "Advanced cybersecurity protocols",
      "Predictive analytics & reporting",
    ],
    stats: { value: "80%", label: "Efficiency Gain" },
    gradient: "from-[#e78617] to-[#c66d0f]",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef(null);

  const handleServiceClick = (index) => {
    setActiveService(index);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 px-4 md:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-96 h-96 bg-[#21abbd] opacity-10 rounded-full blur-3xl top-20 right-20"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-80 h-80 bg-[#e78617] opacity-15 rounded-full blur-3xl bottom-32 left-16"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#21abbd]/10 text-[#21abbd] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Trusted by 500+ Healthcare Providers
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Healthcare Solutions
            <br />
            <span className="bg-gradient-to-r from-[#21abbd] to-[#e78617] bg-clip-text text-transparent">
              That Deliver Results
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with industry leaders who understand the complexity of
            modern healthcare. Our comprehensive solutions drive measurable
            outcomes for your practice.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Service Display */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:order-2"
          >
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${services[activeService].gradient} rounded-3xl blur-lg opacity-20`}
              />
              <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-3xl p-8 h-full">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[activeService].gradient} text-white flex items-center justify-center shadow-lg`}
                  >
                    {services[activeService].icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">
                      {services[activeService].stats.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {services[activeService].stats.label}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-[#e78617] font-semibold text-lg">
                    {services[activeService].subtitle}
                  </p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {services[activeService].description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {services[activeService].features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center group"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#21abbd] to-[#e78617] flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${services[activeService].gradient} text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Service Navigation */}
          <div className="lg:order-1 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleServiceClick(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? "transform scale-[1.02]"
                    : "hover:scale-[1.01]"
                }`}
              >
                <div
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeService === index
                      ? "bg-gradient-to-r from-[#21abbd]/10 to-[#e78617]/10 border-[#21abbd]/30 shadow-lg"
                      : "bg-white/70 border-gray-200/50 hover:border-[#21abbd]/20 hover:bg-white/90"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                        activeService === index
                          ? `bg-gradient-to-br ${service.gradient} text-white shadow-md`
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {React.cloneElement(service.icon, { size: 24 })}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-bold text-lg transition-colors ${
                          activeService === index
                            ? "text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {service.subtitle}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        activeService === index
                          ? "text-[#21abbd] translate-x-1"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#21abbd] to-[#e78617] rounded-3xl blur-lg opacity-20" />
            <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ready to Transform Your Healthcare Operations?
                  </h3>
                  <p className="text-gray-600">
                    Join 500+ healthcare providers who trust us with their
                    success.
                  </p>
                </div>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#21abbd] to-[#1a8a9a] text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Consultation
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
