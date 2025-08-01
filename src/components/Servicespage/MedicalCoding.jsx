import { useState, useRef, useEffect } from "react";
import {
  Code,
  ClipboardCheck,
  Shield,
  Zap,
  CheckCircle,
  FileText,
  BarChart2,
  ArrowRight,
  Sparkles,
  Circle,
} from "lucide-react";

export const MedicalCoding = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const features = [
    {
      title: "Maximized Reimbursements",
      description:
        "We ensure coding for maximized reimbursements, fewer claim denials, and time efficient processing",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-[#21abbd] to-cyan-500",
      items: [
        "Error-free coding",
        "Up-to-date with ICD-10, CPT, HCPCS",
        "Real-time validation & audits",
      ],
    },
    {
      title: "Time Efficiency",
      description: "AI driven coding protocol and documentation processes",
      icon: <Zap className="w-8 h-8" />,
      color: "from-[#e78617] to-amber-500",
      items: [
        "Automated coding checks",
        "Minimized coding errors",
        "Faster claim submission",
      ],
    },
    {
      title: "Regulatory Compliance",
      description:
        "Perfectly aligned with regulatory compliance and industry standards",
      icon: <Shield className="w-8 h-8" />,
      color: "from-[#21abbd] to-teal-500",
      items: [
        "HIPAA & HITECH compliance",
        "Error-free documentation standards",
        "Legal and financial accuracy",
      ],
    },
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Error-free medical coding for faster claims approvals",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Aligned with ICD-10, CPT, and HCPCS guidelines",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Real-time code validation to reduce claim denials",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Prevent revenue loss with proactive audits and quality check",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Enhance accuracy with advanced analytics and reporting",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 2 === 0 ? "bg-[#21abbd]/10" : "bg-[#e78617]/10"
            } animate-float`}
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Hero section */}
        <div
          className={`text-center mb-20 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-8">
            <Sparkles className="w-5 h-5 text-[#e78617]" />
            <span className="font-medium text-slate-700">
              Precision Coding Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#21abbd] to-[#e78617]">
              Medical Coding
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our expert medical coders play a vital role in ensuring accuracy,
            compliance, and efficiency, minimizing claim denials and optimizing
            reimbursements.
          </p>
        </div>

        {/* Services grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-28 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-2"
            >
              <div
                className={`w-12 h-12 rounded-xl ${
                  i % 2 === 0
                    ? "bg-[#21abbd]/10 text-[#21abbd]"
                    : "bg-[#e78617]/10 text-[#e78617]"
                } flex items-center justify-center mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="font-bold text-slate-800">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Features carousel */}
        <div className="relative mb-28">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-start transition-opacity duration-500 ${
                  activeFeature === i ? "opacity-100" : "opacity-70"
                }`}
                onClick={() => setActiveFeature(i)}
              >
                <div
                  className={`bg-gradient-to-br ${feature.color} text-white rounded-3xl p-8 h-full shadow-xl`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="mb-6 text-white/90">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-start">
                        <Circle className="w-3 h-3 mt-1.5 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`w-3 h-3 rounded-full ${
                  activeFeature === i ? "bg-[#21abbd]" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`bg-gradient-to-r from-[#21abbd] to-[#e78617] rounded-3xl p-12 text-center text-white overflow-hidden relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Coding Process?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Discover how our medical coding expertise can maximize your
              reimbursements and minimize denials.
            </p>
            <button className="group flex items-center gap-2 bg-white text-[#21abbd] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all mx-auto">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
