import { motion } from "framer-motion";
import { Target, Zap, BarChart2, Shield, Handshake, CheckCircle } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Zap className="secondary-color" size={20} />,
      text: "AI-powered claim processing with 99.1% accuracy"
    },
    {
      icon: <BarChart2 className="secondary-color" size={20} />,
      text: "Real-time revenue analytics dashboard"
    },
    {
      icon: <Shield className="secondary-color" size={20} />,
      text: "HIPAA-compliant cloud infrastructure"
    },
    {
      icon: <Handshake className="secondary-color" size={20} />,
      text: "Dedicated account managers for every client"
    }
  ];

  return (
    <section className="relative overflow-hidden primary-lighter-bg px-6 py-20 md:py-28">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full secondary-bg blur-[100px]"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, delay: 3 }}
          className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full primary-bg blur-[100px]"
        ></motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Animated header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center secondary-lighter-bg px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full secondary-bg mr-2"></span>
            <span className="text-sm font-medium secondary-darker-color">
              Healthcare Revenue Specialists
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-darker mb-4 leading-tight">
            Precision Billing for <br/>
            <span className="secondary-color">Modern Practices</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-primary-darker opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Swift Health Billing delivers intelligent revenue cycle solutions that combine cutting-edge 
            technology with deep healthcare expertise to maximize your practice's financial performance.
          </motion.p>
        </motion.div>

        {/* Interactive mission card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl secondary-lighter-bg inline-flex">
                  <Target className="secondary-color" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-darker mb-4">
                  Our Mission
                </h3>
                <p className="text-primary-darker opacity-90 leading-relaxed mb-6">
                  To revolutionize healthcare financial operations through AI-driven automation 
                  and white-glove service, eliminating revenue leakage while reducing administrative 
                  burdens for providers.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="bg-primary-lighter rounded-lg p-4 flex items-start border border-gray-100"
                    >
                      <div className="mr-3 mt-0.5">{feature.icon}</div>
                      <p className="text-primary-darker font-medium">{feature.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated progress bar */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary"
          ></motion.div>
        </motion.div>

        {/* Performance stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "99.1%", label: "Clean Claim Rate" },
            { value: "5.2 Days", label: "Avg. Payment Speed" },
            { value: "42%", label: "Denial Reduction" },
            { value: "24/7", label: "Support Coverage" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <div className="text-4xl font-bold secondary-color mb-2">
                {stat.value}
              </div>
              <div className="text-primary-darker opacity-80 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

          
      </div>
    </section>
  );
};