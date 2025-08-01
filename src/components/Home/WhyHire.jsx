import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Lock,
  Zap,
  Target,
  ArrowRight,
  Play,
  Sparkles,
  Eye,
  Brain,
  Rocket,
  Hexagon,
  CircuitBoard,
  Atom,
  Cpu,
  Binary,
  Database,
  Fingerprint,
  HeartPulse,
} from "lucide-react";

export const WhyHire = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Floating holographic elements
  const holographicElements = [
    {
      icon: <Hexagon className="w-8 h-8" />,
      color: "text-[#21abbd]",
      delay: 0,
    },
    {
      icon: <CircuitBoard className="w-10 h-10" />,
      color: "text-[#e78617]",
      delay: 0.2,
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      color: "text-[#21abbd]",
      delay: 0.4,
    },
    {
      icon: <Atom className="w-12 h-12" />,
      color: "text-[#e78617]",
      delay: 0.6,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Fort Knox Security",
      description:
        "Military-grade 256-bit encryption meets HIPAA compliance with biometric access controls.",
      color: "bg-[#21abbd]",
      tech: ["256-bit AES", "HIPAA", "SOC 2"],
      pattern: "bg-[url('/images/hexagon-pattern.svg')]",
    },
    {
      icon: <Brain className="w-16 h-16" />,
      title: "AI-Powered Precision",
      description:
        "Proprietary AI algorithms predict claim outcomes with 99.2% accuracy.",
      color: "bg-[#e78617]",
      tech: ["99.2% Accuracy", "Auto-coding", "Denial Prevention"],
      pattern: "bg-[url('/images/circuit-pattern.svg')]",
    },
    {
      icon: <Rocket className="w-16 h-16" />,
      title: "Revenue Rocket Boost",
      description:
        "Collections soar 25-40% higher with quantum-speed processing.",
      color: "bg-[#21abbd]",
      tech: ["40% Increase", "Zero-denial", "Fast ROI"],
      pattern: "bg-[url('/images/wave-pattern.svg')]",
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: "Lightning Processing",
      description: "Claims processed in under 12 hours with real-time updates.",
      color: "bg-[#e78617]",
      tech: ["12hr Turnaround", "Real-time", "Automated"],
      pattern: "bg-[url('/images/lightning-pattern.svg')]",
    },
  ];

  const stats = [
    {
      value: "98.7%",
      label: "Claim Success",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    { value: "12hr", label: "Processing", icon: <Zap className="w-8 h-8" /> },
    { value: "1000+", label: "Providers", icon: <Users className="w-8 h-8" /> },
    { value: "∞", label: "Breaches", icon: <Lock className="w-8 h-8" /> },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Holographic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {holographicElements.map((el, i) => (
          <div
            key={i}
            className={`${el.color} absolute opacity-20 animate-float rounded-lg`}
            style={{
              animationDelay: `${el.delay}s`,
              animationDuration: `${8 + i * 2}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          >
            {el.icon}
          </div>
        ))}

        {/* Interactive light effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x / 20}px ${
              mousePosition.y / 20
            }px, 
              rgba(33, 171, 189, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Hero section */}
        <div
          className={`text-center mb-28 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#21abbd] animate-pulse" />
            <span className="text-sm font-medium text-white">
              THE FUTURE OF MEDICAL BILLING
            </span>
            <Sparkles className="w-4 h-4 text-[#e78617] animate-pulse" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#21abbd] to-white">
              Swift
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#21abbd] via-[#e78617] to-[#21abbd]">
              Health Billing
            </span>
          </h1>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Revolutionizing healthcare revenue with AI-powered precision and
            military-grade security.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#21abbd] to-[#e78617] rounded-full font-bold text-white hover:scale-105 transition-all">
              Get Started
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full font-bold text-white hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Floating feature showcase */}
        <div className="relative h-[600px] mb-40">
          {/* Feature cards orbit */}
          {features.map((feature, i) => {
            const angle = (i / features.length) * Math.PI * 2;
            const x = Math.cos(angle) * 300;
            const y = Math.sin(angle) * 150;

            return (
              <div
                key={i}
                className={`absolute w-64 h-64 rounded-3xl p-6 backdrop-blur-lg border border-white/10 transition-all duration-1000 ${
                  feature.pattern
                } ${
                  activeFeature === i
                    ? "scale-110 opacity-100 z-10"
                    : "scale-90 opacity-70"
                }`}
                style={{
                  left: `calc(50% + ${x}px - 8rem)`,
                  top: `calc(50% + ${y}px - 8rem)`,
                  background: `linear-gradient(to bottom right, ${feature.color}/20, white/5)`,
                }}
                onClick={() => setActiveFeature(i)}
              >
                <div
                  className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {feature.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Central display */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-white/10 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Animated rings */}
              <div
                className="absolute inset-0 rounded-full border-2 border-[#21abbd]/30 animate-spin-slow"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute inset-6 rounded-full border-2 border-[#e78617]/30 animate-spin-slow-reverse"
                style={{ animationDuration: "25s" }}
              ></div>

              {/* Active feature display */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#21abbd]/10 to-[#e78617]/10 backdrop-blur-sm flex flex-col items-center justify-center p-8">
                <div
                  className={`${features[activeFeature].color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}
                >
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {features[activeFeature].title}
                </h3>
                <p className="text-white/80 text-center">
                  {features[activeFeature].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#21abbd]/50 transition-all"
            >
              <div className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                {stat.icon}
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="relative rounded-3xl overflow-hidden mb-28">
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#21abbd] to-[#e78617] opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>

          <div className="relative z-10 p-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Revenue Cycle?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of healthcare providers who trust Swift Health
              Billing for their revenue management.
            </p>
            <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
};
