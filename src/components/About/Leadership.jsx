import { useState, useEffect } from "react";
import {
  Users,
  HeartPulse,
  ArrowRight,
  Shield,
  Zap,
  Rocket,
  Target,
  Sparkles,
} from "lucide-react";

export const Leadership = () => {
  const [activeMember, setActiveMember] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "M. Anas",
      position: "Managing Director",
      bio: "Fahad ensures the company's vision is executed effectively, leading teams towards success.",
      color: "bg-[#21abbd]",
    },
    {
      name: "Zain A. Khan",
      position: "CEO & Founder",
      bio: "Raoof is the dynamic and strategic leader steering BellClinix towards excellence and innovation in healthcare administration.",
      color: "bg-[#e78617]",
    },
    {
      name: "M. Awais",
      position: "Director HR & Finance",
      bio: "Tariq manages human resources and financial strategies, fostering a productive work environment.",
      color: "bg-[#21abbd]",
    },
  ];

  const stats = [
    {
      value: "98%",
      label: "Claim Accuracy",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      value: "24hr",
      label: "Processing Time",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      value: "40%↑",
      label: "Revenue Boost",
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      value: "1000+",
      label: "Providers Served",
      icon: <Users className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#21abbd]/10 animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Hero section */}
        <section className="text-center mb-28">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-8">
            <HeartPulse className="w-5 h-5 text-[#e78617]" />
            <span className="font-medium text-slate-700">
              Medical Billing & Revenue Cycle Experts
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#21abbd] to-[#e78617]">
              Transforming Healthcare
            </span>
            <br />
            <span>Revenue Management</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            We are committed to transforming the complexities of medical billing
            into seamless solutions, allowing healthcare providers to focus on
            what truly matters: patient care.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all"
                style={{
                  transform: `translateY(${Math.min(
                    scrollY * 0.1,
                    50
                  )}px) rotate(${Math.min(scrollY * 0.02, 5)}deg)`,
                }}
              >
                <div className="text-4xl font-bold text-[#21abbd] mb-2 flex items-center gap-3">
                  {stat.icon}
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team section */}
        <section className="mb-28">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            <span className="relative inline-block">
              Meet Our Team
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#21abbd] to-[#e78617]"></span>
            </span>
          </h2>

          <p className="text-xl text-slate-600 text-center max-w-2xl mx-auto mb-16">
            A group of skilled professionals dedicated to excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-3xl p-8 text-white transition-all duration-500 ${
                  member.color
                } ${
                  activeMember === i
                    ? "scale-105 shadow-xl"
                    : "scale-95 opacity-90"
                }`}
                onMouseEnter={() => setActiveMember(i)}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/10"></div>

                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-white/90 mb-4">{member.position}</p>
                <p className="text-white/80">{member.bio}</p>

                <div className="absolute bottom-4 right-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      activeMember === i ? "bg-white" : "bg-white/30"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gradient-to-r from-[#21abbd] to-[#e78617] rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Revenue Cycle?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let our expert team help you streamline your medical billing and
              coding process.
            </p>
            <button className="group flex items-center gap-2 bg-white text-[#21abbd] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all mx-auto">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
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
      `}</style>
    </div>
  );
};
