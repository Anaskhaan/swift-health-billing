import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Phone,
  Mail,
  Clock,
  DollarSign,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

export default function Service2() {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Create floating elements
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 3,
    }));
    setFloatingElements(elements);

    // Animate sections on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-cyan-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el) => (
          <div
            key={el.id}
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: `${el.size}px`,
              height: `${el.size}px`,
              backgroundColor: el.id % 2 === 0 ? "#21abbd" : "#e78617",
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle, #21abbd, transparent 70%)`,
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-5">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle, #e78617, transparent 70%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Header with Creative Styling */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg">
                <Sparkles className="w-5 h-5" style={{ color: "#e78617" }} />
                <span
                  className="text-sm font-bold"
                  style={{ color: "#21abbd" }}
                >
                  Revolutionary Billing Solution
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                <span style={{ color: "#21abbd" }}>Medical Claims</span>
                <br />
                <span
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #21abbd 0%, #e78617 100%)`,
                  }}
                >
                  Billing Service
                </span>
              </h1>

              <p className="text-xl lg:text-2xl font-medium text-gray-700 leading-relaxed">
                We boost healthcare income with
                <span
                  className="font-black px-3 py-1 rounded-xl mx-2 text-white shadow-lg"
                  style={{ backgroundColor: "#e78617" }}
                >
                  lightning-fast
                </span>
                upfront reimbursements!
              </p>
            </div>

            {/* Benefits List with Creative Cards */}
            <div className="space-y-4">
              {[
                {
                  text: "Speed and encryption protect sensitive patient data.",
                  icon: Shield,
                },
                {
                  text: "Get full payments, without actual cash by the insurance networks.",
                  icon: DollarSign,
                },
                {
                  text: "Access to more than 5000 files claims instantly.",
                  icon: Zap,
                },
                {
                  text: "Contact claims are organized and representative successfully.",
                  icon: CheckCircle,
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`group flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 border border-white/50 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#21abbd" : "#e78617",
                      }}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-ping"
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#e78617" : "#21abbd",
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all"
                      style={{
                        backgroundImage: `linear-gradient(135deg, #21abbd, #e78617)`,
                      }}
                    >
                      {benefit.text}
                    </h3>

                    {/* Progress Bar Animation */}
                    <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#21abbd" : "#e78617",
                          width: isVisible ? `${85 + index * 3}%` : "0%",
                          transitionDelay: `${500 + index * 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Creative CTA Button */}
            <div className="pt-6">
              <button
                className="group relative px-10 py-5 text-white font-black text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                style={{ backgroundColor: "#e78617" }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Start Free Consultation</span>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-300">
                    <span className="text-sm">→</span>
                  </div>
                </span>

                {/* Button Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Shine Effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 -translate-x-full" />
              </button>
            </div>
          </div>

          {/* Right Content - Creative Doctor Section */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Card with Glassmorphism */}
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 relative overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/30 animate-pulse" />

                {/* Doctor Images with 3D Effect */}
                <div className="relative z-10 flex justify-center items-end space-x-8 mb-8">
                  {/* Male Doctor */}
                  <div className="group text-center cursor-pointer transform hover:scale-110 hover:-rotate-3 transition-all duration-300">
                    <div className="relative">
                      <div
                        className="w-32 h-40 rounded-3xl flex items-center justify-center text-6xl shadow-2xl transform group-hover:shadow-3xl group-hover:-translate-y-2 transition-all duration-300"
                        style={{ backgroundColor: "#21abbd" }}
                      >
                        👨‍⚕️
                      </div>

                      {/* Floating Badge */}
                      <div
                        className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce shadow-lg"
                        style={{ backgroundColor: "#e78617" }}
                      >
                        ⭐
                      </div>

                      {/* Pulse Ring */}
                      <div
                        className="absolute inset-0 rounded-3xl animate-ping opacity-20"
                        style={{ backgroundColor: "#21abbd" }}
                      />
                    </div>

                    <div className="mt-4 p-3 bg-white/80 rounded-xl backdrop-blur-sm shadow-lg">
                      <p className="font-bold text-gray-800">Dr. Johnson</p>
                      <p className="text-sm text-gray-600">
                        Chief Medical Officer
                      </p>
                    </div>
                  </div>

                  {/* Female Doctor */}
                  <div className="group text-center cursor-pointer transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                    <div className="relative">
                      <div
                        className="w-32 h-40 rounded-3xl flex items-center justify-center text-6xl shadow-2xl transform group-hover:shadow-3xl group-hover:-translate-y-2 transition-all duration-300"
                        style={{ backgroundColor: "#e78617" }}
                      >
                        👩‍⚕️
                      </div>

                      {/* Floating Badge */}
                      <div
                        className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce shadow-lg"
                        style={{ backgroundColor: "#21abbd" }}
                      >
                        💎
                      </div>

                      {/* Pulse Ring */}
                      <div
                        className="absolute inset-0 rounded-3xl animate-ping opacity-20"
                        style={{ backgroundColor: "#e78617" }}
                      />
                    </div>

                    <div className="mt-4 p-3 bg-white/80 rounded-xl backdrop-blur-sm shadow-lg">
                      <p className="font-bold text-gray-800">Dr. Smith</p>
                      <p className="text-sm text-gray-600">
                        Billing Specialist
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Success Metrics */}
                <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 animate-bounce border border-white/50">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: "#21abbd" }}
                    />
                    <span className="text-sm font-bold text-gray-800">
                      99.2% Success Rate
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-2xl shadow-2xl p-4 animate-pulse border border-white/30">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span className="text-sm font-bold">Live Processing</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-4 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl p-3 animate-spin-slow border border-white/50">
                  <Shield className="w-6 h-6" style={{ color: "#21abbd" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Creative Layout */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16">
          {/* Left Bottom Text */}
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-shadow duration-300">
              <h2
                className="text-2xl lg:text-3xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, #21abbd 0%, #e78617 100%)`,
                }}
              >
                The billing firm that does medical claims processing
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our team of medical claims processing specialists combines
                  billing expertise with technology solutions to deliver
                  comprehensive revenue cycle management.
                </p>
                <p>
                  We ensure maximum reimbursement while maintaining compliance
                  with industry regulations. Our medical billing services allow
                  physicians, hospitals, and medical billing companies to focus
                  more on patient care.
                </p>
                <p>
                  Our advanced technology systems and skilled RCM experts work
                  together to optimize cash flow while maintaining the highest
                  standards of accuracy and compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Bottom Text */}
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-shadow duration-300">
              <h2
                className="text-2xl lg:text-3xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, #e78617 0%, #21abbd 100%)`,
                }}
              >
                When "speed meets" best strategy, you create significant
                advantage
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Since 2010, providers' claims are NOT billing cases outright -
                  there should be other ways to maximize the insurance that your
                  money is timely and appropriately paid out according to each
                  contract.
                </p>
                <p>
                  We work hard to ensure that you receive all the possible
                  billing reimbursements from ALL Dept. HRA what are your
                  current patient. This means looking at the office flow where
                  every dollar can show results.
                </p>
                <p>
                  We are committed to making sure all of your claims are
                  processed and appropriately submitted promptly to various
                  medical insurance companies, maximizing revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
