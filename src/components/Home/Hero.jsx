import { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Users,
} from "lucide-react";

const floatingStats = [
  {
    icon: TrendingUp,
    label: "Revenue Growth",
    value: "+45%",
    color: "#21abbd",
  },
  { icon: Shield, label: "Compliance Rate", value: "99.8%", color: "#e78617" },
  { icon: Clock, label: "Processing Time", value: "-60%", color: "#21abbd" },
  {
    icon: CheckCircle,
    label: "Claims Accuracy",
    value: "99.5%",
    color: "#e78617",
  },
];

const testimonialAvatars = [
  { name: "Dr. Sarah Johnson", role: "Cardiologist" },
  { name: "Michael Chen", role: "Practice Manager" },
  { name: "Dr. Emily Davis", role: "Orthopedic Surgeon" },
  { name: "James Wilson", role: "Healthcare Administrator" },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % floatingStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, #21abbd 0%, transparent 70%)`,
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, #e78617 0%, transparent 70%)`,
            right: `${15 + mousePosition.x * 0.015}%`,
            bottom: `${20 + mousePosition.y * 0.015}%`,
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(33, 171, 189, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(33, 171, 189, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-20 w-4 h-4 rotate-45 opacity-30"
          style={{ backgroundColor: "#21abbd" }}
        />
        <div
          className="absolute top-40 right-32 w-6 h-6 rounded-full opacity-25"
          style={{ backgroundColor: "#e78617" }}
        />
        <div
          className="absolute bottom-32 left-16 w-3 h-3 rotate-45 opacity-20"
          style={{ backgroundColor: "#21abbd" }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-500 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(33, 171, 189, 0.1) 0%, rgba(231, 134, 23, 0.1) 100%)",
                borderColor: "rgba(33, 171, 189, 0.2)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full mr-3 animate-pulse"
                style={{ backgroundColor: "#21abbd" }}
              />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#21abbd" }}
              >
                #1 Healthcare Revenue Cycle Platform
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-slate-800">Transform Your</span>
                <span className="block bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                  Healthcare Revenue
                </span>
                <span className="block text-slate-800">with</span>
                <span className="block font-bold" style={{ color: "#e78617" }}>
                  AI-Powered Precision
                </span>
              </h1>

              <div className="flex items-center space-x-2 mt-4">
                <Star className="text-yellow-400 fill-current" size={20} />
                <Star className="text-yellow-400 fill-current" size={20} />
                <Star className="text-yellow-400 fill-current" size={20} />
                <Star className="text-yellow-400 fill-current" size={20} />
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="text-slate-600 font-medium ml-2">
                  4.9/5 from 2,000+ practices
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Eliminate revenue leakage, reduce claim denials by up to 80%, and
              accelerate cash flow with our intelligent billing automation
              platform trusted by healthcare leaders nationwide.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "99.8% Claims Acceptance Rate",
                "Average 45% Revenue Increase",
                "24/7 AI-Powered Monitoring",
                "HIPAA Compliant & Secure",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle
                    size={20}
                    className="flex-shrink-0"
                    style={{ color: "#21abbd" }}
                  />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="group px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
                style={{
                  background:
                    "linear-gradient(135deg, #21abbd 0%, #1a8a9a 100%)",
                  boxShadow: "0 10px 30px rgba(33, 171, 189, 0.4)",
                }}
              >
                <span>Start Free Trial</span>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                className="group px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(231, 134, 23, 0.1) 0%, rgba(231, 134, 23, 0.05) 100%)",
                  color: "#e78617",
                  border: "2px solid rgba(231, 134, 23, 0.2)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#e78617" }}
                >
                  <Play
                    className="text-white ml-0.5"
                    size={16}
                    fill="currentColor"
                  />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 pt-8">
              <div className="flex justify-center sm:justify-start -space-x-3">
                {testimonialAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-3 border-white flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      backgroundColor: index % 2 === 0 ? "#21abbd" : "#e78617",
                      zIndex: testimonialAvatars.length - index,
                    }}
                  >
                    {avatar.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                ))}
              </div>
              <div className="text-slate-600 text-center sm:text-left">
                <div className="font-bold text-slate-800">
                  2,000+ Healthcare Practices
                </div>
                <div className="text-sm">Trust Swift Health Billing</div>
              </div>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative flex flex-col justify-start">
            {/* Top Performance Banner */}
            <div
              className="mb-6 p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(33, 171, 189, 0.1) 0%, rgba(231, 134, 23, 0.1) 100%)",
                borderColor: "rgba(33, 171, 189, 0.2)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#21abbd" }}
                  >
                    <TrendingUp className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">
                      Live Performance
                    </div>
                    <div className="text-sm text-slate-500">
                      Updated 2 mins ago
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#21abbd" }}
                  >
                    +47%
                  </div>
                  <div className="text-sm text-slate-500">This month</div>
                </div>
              </div>
            </div>

            {/* Main Dashboard Container */}
            <div
              className="relative rounded-3xl p-6 backdrop-blur-sm border transition-all duration-500 hover:scale-105 mb-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                borderColor: "rgba(33, 171, 189, 0.1)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #21abbd 0%, #1a8a9a 100%)",
                    }}
                  >
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">
                      Revenue Analytics
                    </div>
                    <div className="text-sm text-slate-500">
                      Healthcare Dashboard
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                </div>
              </div>

              {/* Revenue Chart Visualization */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-600">
                    Monthly Revenue Growth
                  </span>
                  <div className="text-right">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#21abbd" }}
                    >
                      $847,392
                    </span>
                    <div className="text-xs text-green-600 font-medium">
                      ↗ +32% vs last month
                    </div>
                  </div>
                </div>

                {/* Simplified chart bars */}
                <div className="flex items-end space-x-2 h-28">
                  {[65, 78, 85, 92, 88, 95, 100].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg transition-all duration-1000 relative group"
                      style={{
                        height: `${height}%`,
                        background:
                          index === 6
                            ? "linear-gradient(180deg, #e78617 0%, #d67510 100%)"
                            : "linear-gradient(180deg, #21abbd 0%, #1a8a9a 100%)",
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded">
                          ${Math.floor(height * 12)}K
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Claims Processed",
                    value: "1,247",
                    change: "+18%",
                    icon: CheckCircle,
                  },
                  {
                    label: "Collection Rate",
                    value: "94.2%",
                    change: "+5.1%",
                    icon: TrendingUp,
                  },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl transition-all duration-200 hover:scale-105"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(135deg, rgba(33, 171, 189, 0.1) 0%, rgba(33, 171, 189, 0.05) 100%)"
                          : "linear-gradient(135deg, rgba(231, 134, 23, 0.1) 0%, rgba(231, 134, 23, 0.05) 100%)",
                    }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <metric.icon
                        size={16}
                        style={{ color: index === 0 ? "#21abbd" : "#e78617" }}
                      />
                      <span className="text-xs font-medium text-slate-600">
                        {metric.label}
                      </span>
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <div
                        className="text-xl font-bold"
                        style={{ color: index === 0 ? "#21abbd" : "#e78617" }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        {metric.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)",
                  borderColor: "rgba(33, 171, 189, 0.2)",
                }}
              >
                <div className="text-center">
                  <Clock
                    size={24}
                    className="mx-auto mb-2"
                    style={{ color: "#21abbd" }}
                  />
                  <div className="font-bold text-slate-800 text-sm">
                    Real-time
                  </div>
                  <div className="text-xs text-slate-500">Processing</div>
                </div>
              </div>

              <div
                className="p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)",
                  borderColor: "rgba(231, 134, 23, 0.2)",
                }}
              >
                <div className="text-center">
                  <Shield
                    size={24}
                    className="mx-auto mb-2"
                    style={{ color: "#e78617" }}
                  />
                  <div className="font-bold text-slate-800 text-sm">HIPAA</div>
                  <div className="text-xs text-slate-500">Compliant</div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            {floatingStats.map((stat, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ${
                  currentStat === index ? "scale-110 z-20" : "scale-100 z-10"
                }`}
                style={{
                  top:
                    index === 0
                      ? "5%"
                      : index === 1
                      ? "25%"
                      : index === 2
                      ? "55%"
                      : "75%",
                  left:
                    index === 0
                      ? "-18%"
                      : index === 1
                      ? "102%"
                      : index === 2
                      ? "-15%"
                      : "105%",
                  animation: `float ${4 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div
                  className="p-3 rounded-2xl backdrop-blur-sm border shadow-xl"
                  style={{
                    background:
                      currentStat === index
                        ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)"
                        : "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)",
                    borderColor: `${stat.color}30`,
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <stat.icon size={16} style={{ color: stat.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-600">
                        {stat.label}
                      </div>
                      <div
                        className="text-lg font-bold"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }
      `}</style>
    </section>
  );
}
