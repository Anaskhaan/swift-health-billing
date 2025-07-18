import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import dashboard from "../../assets/1.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-lighter to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full secondary-bg blur-[100px]"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full primary-bg blur-[100px]"></div>
      </div>

      {/* Pulse animation circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-primary rounded-full"
            style={{
              width: `${i * 200}px`,
              height: `${i * 200}px`,
            }}
            animate={{
              scale: [1, 1.2],
              opacity: [0.8 - i * 0.2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full secondary-lighter-bg mb-6"
            >
              <span className="w-2 h-2 rounded-full secondary-bg mr-2"></span>
              <span className="text-sm font-medium secondary-darker-color">
                Revolutionizing Healthcare Billing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-darker mb-6"
            >
              <span className="inline-block mb-3">Precision</span>
              <br />
              <span className="secondary-color">Revenue Cycle</span>
              <br />
              <span>Management</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-primary-darker opacity-90 mb-8 max-w-lg"
            >
              Streamline your healthcare practice with our AI-powered billing solutions that increase revenue, reduce denials, and simplify compliance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl secondary-bg text-primary-darker font-semibold shadow-lg hover:shadow-xl transition-all flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-white text-primary-darker font-semibold shadow-lg hover:shadow-xl transition-all flex items-center"
              >
                <div className="w-10 h-10 rounded-full secondary-bg flex items-center justify-center mr-3">
                  <Play className="text-white" size={16} fill="currentColor" />
                </div>
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`/avatar-${i}.jpg`}
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-primary-darker">
                <span className="font-semibold">500+</span> healthcare providers trust our solutions
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main dashboard image */}
              <img
                src={dashboard}
                alt="Billing Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl border-8 border-white"
              />

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-8 -top-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-sm font-semibold secondary-color mb-1">Revenue Up</div>
                <div className="text-2xl font-bold text-primary-darker">+32%</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -right-8 -bottom-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-sm font-semibold secondary-color mb-1">Denials Down</div>
                <div className="text-2xl font-bold text-primary-darker">-47%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};