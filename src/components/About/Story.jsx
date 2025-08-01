import { useState, useRef, useEffect } from "react";
import {
  HeartPulse,
  Rocket,
  Shield,
  Zap,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Circle,
  Sparkles,
} from "lucide-react";

export default function Story() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const storyTimeline = [
    {
      year: "2010",
      title: "Humble Beginnings",
      description:
        "Founded in a small office with a vision to revolutionize medical billing",
      icon: <HeartPulse className="w-10 h-10" />,
      color: "bg-[#21abbd]",
    },
    {
      year: "2013",
      title: "First Major Client",
      description:
        "Secured partnership with City General Hospital, proving our concept",
      icon: <Shield className="w-10 h-10" />,
      color: "bg-[#e78617]",
    },
    {
      year: "2016",
      title: "Technology Leap",
      description: "Developed proprietary AI-powered billing platform",
      icon: <Zap className="w-10 h-10" />,
      color: "bg-[#21abbd]",
    },
    {
      year: "2019",
      title: "National Recognition",
      description:
        "Named Top Medical Billing Solution by Healthcare Tech Review",
      icon: <Rocket className="w-10 h-10" />,
      color: "bg-[#e78617]",
    },
    {
      year: "2023",
      title: "Industry Leader",
      description: "Now serving over 1,000 healthcare providers nationwide",
      icon: <Users className="w-10 h-10" />,
      color: "bg-[#21abbd]",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
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

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === storyTimeline.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? storyTimeline.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background elements */}
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
        {/* Header */}
        <div
          className={`text-center mb-20 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-8">
            <Sparkles className="w-5 h-5 text-[#e78617]" />
            <span className="font-medium text-slate-700">
              Our Journey Through Time
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#21abbd] to-[#e78617]">
              The Swift Health Story
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a leader in medical billing
            innovation
          </p>
        </div>

        {/* Timeline Carousel */}
        <div className="relative h-[500px] mb-28">
          {/* Main timeline display */}
          <div className="relative h-full w-full">
            {/* Year indicator ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-slate-200 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-[#21abbd] to-[#e78617] rounded-full transition-all duration-500"
                style={{
                  width: `${
                    (currentSlide + 1) * (100 / storyTimeline.length)
                  }%`,
                }}
              />
            </div>

            {/* Active story card */}
            <div
              className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md ${
                storyTimeline[currentSlide].color
              } text-white rounded-3xl p-8 shadow-2xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                {storyTimeline[currentSlide].icon}
              </div>

              <div className="text-5xl font-bold mb-2">
                {storyTimeline[currentSlide].year}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {storyTimeline[currentSlide].title}
              </h3>
              <p className="text-white/90">
                {storyTimeline[currentSlide].description}
              </p>
            </div>

            {/* Timeline dots */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4">
              {storyTimeline.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="focus:outline-none"
                >
                  {index === currentSlide ? (
                    <Circle className="w-6 h-6 text-[#21abbd] fill-current" />
                  ) : (
                    <Circle className="w-3 h-3 text-slate-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-slate-100 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-[#21abbd]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-slate-100 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-[#e78617]" />
          </button>
        </div>

        {/* Mission section */}
        <div
          className={`bg-white rounded-3xl p-12 shadow-xl mb-28 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Our <span className="text-[#21abbd]">Mission</span> &{" "}
                <span className="text-[#e78617]">Vision</span>
              </h2>
              <p className="text-slate-600 mb-6">
                To revolutionize healthcare revenue cycle management through
                innovative technology and unparalleled service, empowering
                providers to focus on patient care.
              </p>
              <p className="text-slate-600">
                We envision a future where medical billing is seamless,
                transparent, and fully automated, eliminating financial barriers
                to quality healthcare.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-[#21abbd]/10 p-6 rounded-2xl border border-[#21abbd]/20">
                <h3 className="font-bold text-[#21abbd] mb-2">Core Values</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>• Integrity</li>
                  <li>• Innovation</li>
                  <li>• Excellence</li>
                </ul>
              </div>
              <div className="bg-[#e78617]/10 p-6 rounded-2xl border border-[#e78617]/20">
                <h3 className="font-bold text-[#e78617] mb-2">Commitment</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>• Client Success</li>
                  <li>• Continuous Improvement</li>
                  <li>• Community Impact</li>
                </ul>
              </div>
              <div className="col-span-2 bg-gradient-to-r from-[#21abbd]/10 to-[#e78617]/10 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-2">Why Choose Us</h3>
                <p className="text-slate-700">
                  Combining cutting-edge technology with deep industry expertise
                  to deliver results that matter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`bg-gradient-to-r from-[#21abbd] to-[#e78617] rounded-3xl p-12 text-center text-white overflow-hidden relative transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our Story?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Become part of the next chapter in healthcare revenue management
              excellence.
            </p>
            <button className="group flex items-center gap-2 bg-white text-[#21abbd] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all mx-auto">
              Get Started Today
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
      `}</style>
    </div>
  );
}
