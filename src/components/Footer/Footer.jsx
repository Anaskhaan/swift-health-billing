import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Send,
  Heart,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { name: "Medical Billing", href: "#" },
  { name: "Coding Services", href: "#" },
  { name: "Revenue Cycle", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Blog", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877f2" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1da1f2" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0077b5" },
  { icon: Mail, href: "#", label: "Email", color: "#ea4335" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, #e78617 0%, transparent 70%)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-60 h-60 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, #21abbd 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #21abbd 0%, #e78617 50%, transparent 70%)",
            animation: "rotate 20s linear infinite",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(33, 171, 189, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(33, 171, 189, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Top Section - Logo and CTA */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center justify-center p-4 rounded-3xl mb-6 transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, rgba(33, 171, 189, 0.1) 0%, rgba(231, 134, 23, 0.1) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4"
              style={{
                background: "linear-gradient(135deg, #21abbd 0%, #1a8a9a 100%)",
                boxShadow: "0 10px 30px rgba(33, 171, 189, 0.3)",
              }}
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: "#21abbd" }}
                />
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-baseline space-x-2">
                <span
                  className="text-3xl font-black tracking-tight"
                  style={{ color: "#21abbd" }}
                >
                  Swift
                </span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: "#e78617" }}
                >
                  Health
                </span>
              </div>
              <span
                className="text-sm font-semibold tracking-widest uppercase opacity-80"
                style={{ color: "#21abbd" }}
              >
                Billing Solutions
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Revenue Cycle?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Join thousands of healthcare providers who trust Swift Health
            Billing for their revenue cycle management needs.
          </p>

          <button
            className="group px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3"
            style={{
              background: "linear-gradient(135deg, #e78617 0%, #d67510 100%)",
              boxShadow: "0 10px 30px rgba(231, 134, 23, 0.4)",
            }}
          >
            <span>Get Started Today</span>
            <ChevronRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Company Description */}
          <div className="md:col-span-5">
            <div
              className="p-8 rounded-3xl h-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Revolutionizing Healthcare
                <span
                  className="block text-lg font-semibold mt-1"
                  style={{ color: "#21abbd" }}
                >
                  Revenue Management
                </span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We combine cutting-edge technology with unparalleled expertise
                to deliver exceptional results for healthcare providers across
                the nation. Our innovative approach ensures maximum revenue
                recovery and streamlined operations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#21abbd" }}
                  >
                    99.5%
                  </div>
                  <div className="text-sm text-slate-400">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#e78617" }}
                  >
                    24/7
                  </div>
                  <div className="text-sm text-slate-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div
              className="p-6 rounded-3xl h-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(33, 171, 189, 0.1) 0%, rgba(33, 171, 189, 0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(33, 171, 189, 0.2)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: "#21abbd" }}
                />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center text-slate-300 hover:text-white transition-all duration-200 py-2"
                    >
                      <ChevronRight
                        size={16}
                        className="mr-2 transition-all duration-200 group-hover:translate-x-1"
                        style={{ color: "#e78617" }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <div
              className="p-6 rounded-3xl h-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(231, 134, 23, 0.1) 0%, rgba(231, 134, 23, 0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(231, 134, 23, 0.2)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: "#e78617" }}
                />
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200">
                  <Phone
                    size={20}
                    className="mt-1 flex-shrink-0"
                    style={{ color: "#21abbd" }}
                  />
                  <div>
                    <div className="text-white font-medium">
                      +1 (555) 123-4567
                    </div>
                    <div className="text-slate-400 text-sm">Available 24/7</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200">
                  <Mail
                    size={20}
                    className="mt-1 flex-shrink-0"
                    style={{ color: "#21abbd" }}
                  />
                  <div>
                    <div className="text-white font-medium">
                      info@swiftbilling.com
                    </div>
                    <div className="text-slate-400 text-sm">
                      Quick response guaranteed
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200">
                  <MapPin
                    size={20}
                    className="mt-1 flex-shrink-0"
                    style={{ color: "#21abbd" }}
                  />
                  <div>
                    <div className="text-white font-medium">
                      123 Healthcare Ave
                    </div>
                    <div className="text-slate-400 text-sm">
                      Suite 500, Boston, MA 02110
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div
          className="p-8 rounded-3xl mb-12 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(33, 171, 189, 0.15) 0%, rgba(231, 134, 23, 0.15) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-2">
              Stay Ahead of the Curve
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights, industry updates, and best practices
              delivered straight to your inbox. Join our community of healthcare
              professionals.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 border border-white/20 transition-all duration-200"
                    style={{
                      focusRingColor: "#21abbd",
                    }}
                  />
                </div>
                <button
                  className="group px-6 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #e78617 0%, #d67510 100%)",
                    boxShadow: "0 8px 25px rgba(231, 134, 23, 0.4)",
                  }}
                >
                  <Send size={18} />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="group relative p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                style={{
                  background:
                    hoveredSocial === index
                      ? `linear-gradient(135deg, ${social.color}20, ${social.color}10)`
                      : "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <social.icon
                  size={20}
                  className="text-white transition-colors duration-300"
                  style={{
                    color: hoveredSocial === index ? social.color : "white",
                  }}
                />
              </a>
            ))}
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group p-4 rounded-2xl transition-all duration-300 hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #21abbd 0%, #1a8a9a 100%)",
              boxShadow: "0 8px 25px rgba(33, 171, 189, 0.3)",
            }}
          >
            <ArrowUp
              size={20}
              className="text-white transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-8 text-center border-t"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
            <div className="flex items-center mb-4 md:mb-0">
              <span>
                © {new Date().getFullYear()} Swift Health Billing. Made with{" "}
              </span>
              <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
              <span> for healthcare providers.</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </footer>
  );
}
