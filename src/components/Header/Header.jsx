import { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  Info,
  Mail,
  ChevronDown,
  X,
  ArrowRight,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
    submenu: null,
  },
  {
    name: "Services",
    path: "/services",
    icon: Briefcase,
    submenu: [
      { name: "Medical Billing", path: "/services/billing" },
      { name: "Coding Services", path: "/services/coding" },
      { name: "Revenue Cycle", path: "/services/revenue" },
    ],
  },
  {
    name: "About",
    path: "/about",
    icon: Info,
    submenu: [
      { name: "Our Story", path: "/about/story" },
      { name: "Leadership", path: "/about/leadership" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Mail,
    submenu: null,
  },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-200/50 py-2"
            : "bg-gradient-to-r from-slate-50/80 via-white/90 to-slate-50/80 backdrop-blur-md py-4"
        }`}
        style={{
          borderBottom: scrolled ? "1px solid rgba(33, 171, 189, 0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="relative group cursor-pointer">
              <div
                className={`p-3 rounded-2xl flex items-center space-x-3 transition-all duration-300 ${
                  scrolled
                    ? "bg-gradient-to-r from-slate-50 to-gray-50 shadow-lg"
                    : "bg-white/80 shadow-xl"
                } hover:shadow-2xl hover:scale-105 border border-slate-200/50`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #21abbd 0%, #1a8a9a 100%)",
                    boxShadow: "0 8px 25px rgba(33, 171, 189, 0.3)",
                  }}
                >
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                    <div
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: "#21abbd" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline space-x-1">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#21abbd" }}
                    >
                      Swift
                    </span>
                    <span
                      className="text-lg font-semibold"
                      style={{ color: "#e78617" }}
                    >
                      Health
                    </span>
                  </div>
                  <span
                    className="text-sm font-medium tracking-wider uppercase opacity-80"
                    style={{ color: "#21abbd" }}
                  >
                    Billing
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.submenu && setActiveSubmenu(item.name)
                  }
                  onMouseLeave={() => item.submenu && setActiveSubmenu(null)}
                >
                  <div
                    className={`px-5 py-3 rounded-xl flex items-center transition-all duration-300 cursor-pointer group ${
                      activeSubmenu === item.name
                        ? "bg-white shadow-lg"
                        : "hover:bg-white/60 hover:shadow-md"
                    }`}
                    style={{
                      color:
                        activeSubmenu === item.name ? "#21abbd" : "#1e293b",
                    }}
                  >
                    <item.icon
                      className="mr-2 group-hover:scale-110 transition-transform"
                      size={18}
                      style={{
                        color:
                          activeSubmenu === item.name ? "#21abbd" : "#e78617",
                      }}
                    />
                    <span className="font-semibold tracking-wide">
                      {item.name}
                    </span>
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`ml-2 transition-transform ${
                          activeSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200/50">
                      <div
                        className="h-1"
                        style={{
                          background:
                            "linear-gradient(90deg, #21abbd 0%, #e78617 100%)",
                        }}
                      />
                      <div className="p-2">
                        {item.submenu.map((subItem) => (
                          <div
                            key={subItem.name}
                            className="px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer"
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: "#e78617" }}
                              />
                              <span className="font-medium text-slate-800">
                                {subItem.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="ml-6">
                <button
                  className="group px-6 py-3 rounded-full font-bold text-white hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #e78617 0%, #d67510 100%)",
                    boxShadow: "0 8px 25px rgba(231, 134, 23, 0.4)",
                  }}
                >
                  <span>Get Started</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-105 z-50"
              style={{
                background: isMobileMenuOpen
                  ? "linear-gradient(135deg, #e78617 0%, #d67510 100%)"
                  : "linear-gradient(135deg, #21abbd 0%, #1a8a9a 100%)",
                boxShadow: "0 8px 20px rgba(33, 171, 189, 0.3)",
              }}
            >
              {isMobileMenuOpen ? (
                <X className="text-white" size={24} />
              ) : (
                <div className="flex flex-col space-y-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="block w-6 h-0.5 bg-white rounded-full"
                    />
                  ))}
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-white pt-24 overflow-y-auto transition-all duration-300">
          <div className="container mx-auto px-6 pb-24">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="mb-3">
                      <button
                        onClick={() =>
                          setMobileSubmenu(
                            mobileSubmenu === item.name ? null : item.name
                          )
                        }
                        className={`w-full px-6 py-4 rounded-2xl flex justify-between items-center transition ${
                          mobileSubmenu === item.name
                            ? "bg-slate-100"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <item.icon size={20} style={{ color: "#e78617" }} />
                          <span className="text-lg font-bold text-slate-800">
                            {item.name}
                          </span>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            mobileSubmenu === item.name ? "rotate-180" : ""
                          }`}
                          style={{ color: "#21abbd" }}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          mobileSubmenu === item.name
                            ? "max-h-96 mt-2"
                            : "max-h-0"
                        }`}
                      >
                        <div className="ml-10 pr-6 space-y-2">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={handleMobileLinkClick}
                              className="w-full text-left py-2 px-4 rounded-xl hover:bg-slate-100 transition"
                            >
                              <div className="flex items-center space-x-3">
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: "#e78617" }}
                                />
                                <span className="text-base text-slate-800 font-medium">
                                  {subItem.name}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={handleMobileLinkClick}
                      className="w-full px-6 py-4 rounded-2xl hover:bg-slate-50 text-left transition"
                    >
                      <div className="flex items-center space-x-4">
                        <item.icon size={20} style={{ color: "#e78617" }} />
                        <span className="text-lg font-bold text-slate-800">
                          {item.name}
                        </span>
                      </div>
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-6 px-6">
                <button
                  onClick={handleMobileLinkClick}
                  className="w-full px-6 py-4 rounded-2xl font-bold text-white hover:scale-105 hover:shadow-2xl transition"
                  style={{
                    background:
                      "linear-gradient(135deg, #e78617 0%, #d67510 100%)",
                    boxShadow: "0 8px 25px rgba(231, 134, 23, 0.4)",
                  }}
                >
                  Get Started
                </button>
              </div>
              <div className="pt-12 text-center text-sm text-slate-500">
                Swift Health Billing © {new Date().getFullYear()}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
