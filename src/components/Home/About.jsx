import React from "react";
import {
  Target,
  Zap,
  BarChart2,
  Shield,
  Handshake,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Zap className="text-[#21abbd]" size={24} />,
      text: "AI-powered claim processing with 99.1% accuracy",
      gradient: "from-[#21abbd]/10 to-[#e78617]/10",
    },
    {
      icon: <BarChart2 className="text-[#e78617]" size={24} />,
      text: "Real-time revenue analytics dashboard",
      gradient: "from-[#e78617]/10 to-[#21abbd]/10",
    },
    {
      icon: <Shield className="text-[#21abbd]" size={24} />,
      text: "HIPAA-compliant cloud infrastructure",
      gradient: "from-[#21abbd]/10 to-[#e78617]/10",
    },
    {
      icon: <Handshake className="text-[#e78617]" size={24} />,
      text: "Dedicated account managers for every client",
      gradient: "from-[#e78617]/10 to-[#21abbd]/10",
    },
  ];

  const stats = [
    {
      value: "99.1%",
      label: "Clean Claim Rate",
      icon: <CheckCircle size={20} />,
      color: "#21abbd",
    },
    {
      value: "5.2",
      label: "Days Avg. Payment",
      icon: <Clock size={20} />,
      color: "#e78617",
    },
    {
      value: "42%",
      label: "Denial Reduction",
      icon: <TrendingUp size={20} />,
      color: "#21abbd",
    },
    {
      value: "24/7",
      label: "Support Coverage",
      icon: <Award size={20} />,
      color: "#e78617",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 px-6 py-20 md:py-28 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-[#21abbd]/20 to-[#e78617]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-80 h-80 bg-gradient-to-l from-[#e78617]/15 to-[#21abbd]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-20 w-32 h-32 border-2 border-[#21abbd]/20 rotate-45 animate-spin slow-spin"></div>
        <div className="absolute bottom-1/4 left-16 w-24 h-24 bg-gradient-to-br from-[#e78617]/30 to-transparent rounded-full animate-bounce slow-bounce"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(33,171,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(33,171,189,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Hero Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-[#21abbd]/20 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Sparkles className="text-[#e78617] mr-2" size={18} />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#21abbd] to-[#e78617] bg-clip-text text-transparent">
              Healthcare Revenue Specialists
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Precision Billing for
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#21abbd] via-[#e78617] to-[#21abbd] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
              Modern Practices
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Swift Health Billing delivers intelligent revenue cycle solutions
            that combine cutting-edge technology with deep healthcare expertise
            to maximize your practice's financial performance.
          </p>
        </div>

        {/* Mission Card with Glass Effect */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#21abbd] via-[#e78617] to-[#21abbd] p-0.5 rounded-3xl">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl h-full w-full"></div>
            </div>

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Mission Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#21abbd] to-[#e78617] p-0.5">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <Target className="text-[#21abbd]" size={36} />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#e78617] rounded-full flex items-center justify-center">
                      <Sparkles className="text-white" size={14} />
                    </div>
                  </div>
                </div>

                {/* Mission Content */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    To revolutionize healthcare financial operations through
                    AI-driven automation and white-glove service, eliminating
                    revenue leakage while reducing administrative burdens for
                    providers.
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`group relative bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                          </div>
                          <p className="text-gray-800 font-medium leading-relaxed flex-1">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Animated background */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}10, transparent)`,
                }}
              ></div>

              <div className="relative text-center">
                <div className="flex justify-center mb-3">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: `${stat.color}15`,
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-700 font-semibold text-sm">
                  {stat.label}
                </div>
              </div>

              {/* Hover effect border */}
              <div
                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: `${stat.color}30` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .slow-spin {
          animation: spin 20s linear infinite;
        }
        .slow-bounce {
          animation: bounce 4s infinite;
        }
      `}</style>
    </section>
  );
};
