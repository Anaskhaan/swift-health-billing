import { useState, useEffect } from "react";
import { Home, Briefcase, Info, Mail, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.svg";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
    submenu: null
  },
  {
    name: "Services",
    path: "/services",
    icon: Briefcase,
    submenu: [
      { name: "Medical Billing", path: "/services/billing" },
      { name: "Coding Services", path: "/services/coding" },
      { name: "Revenue Cycle", path: "/services/revenue" }
    ]
  },
  {
    name: "About",
    path: "/about",
    icon: Info,
    submenu: [
      { name: "Our Story", path: "/about/story" },
      { name: "Leadership", path: "/about/leadership" }
    ]
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Mail,
    submenu: null
  },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "primary-lighter-bg shadow-2xl py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo with animated border */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group"
          >
            <Link to="/" className="block">
  <motion.div 
    className={`p-2 rounded-lg flex items-center space-x-2 ${
      scrolled ? "primary-light-bg" : "primary-lighter-bg"
    }`}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 15 }}
      transition={{ type: "spring" }}
    >
      <img 
        src={logo} 
        alt="Swift Health Billing" 
        className="h-10 transition-all"
      />
    </motion.div>
    
    <div className="flex flex-col">
      <motion.span 
        className="text-xl  tracking-tight text-primary-darker"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        Swift
      </motion.span>
      <motion.div className="flex items-center">
        <motion.span 
          className="text-lg  tracking-wide text-primary-darker"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Health
        </motion.span>
        <motion.span 
          className="ml-1 text-lg  tracking-wider secondary-color"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Billing
        </motion.span>
      </motion.div>
    </div>
    
    <motion.div 
      className="absolute inset-0 rounded-lg border-2 border-transparent hover:primary-border"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
</Link>
            <motion.div 
              className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:primary-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => item.submenu && setActiveSubmenu(null)}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`px-4 py-3 rounded-t-lg flex items-center text-primary-darker`}
                >
                  <Link
                    to={item.path}
                    className="flex items-center font-medium tracking-wide"
                  >
                    <item.icon className="mr-2" size={18} />
                    {item.name}
                    {item.submenu && (
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform ${
                          activeSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </motion.div>

                <motion.div
                  className={`absolute bottom-0 left-0 h-1 ${
                    activeSubmenu === item.name ? "secondary-bg" : "primary-bg"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSubmenu === item.name ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.3 }}
                />

                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`absolute left-0 w-56 pt-2 primary-lighter-bg rounded-b-lg shadow-xl`}
                      >
                        <div className="border-t-4 secondary-border">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-primary-darker hover:secondary-lighter-bg transition-colors"
                            >
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center"
                              >
                                <span className="w-2 h-2 rounded-full secondary-bg mr-3"></span>
                                {subItem.name}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                to="/get-started"
                className={`px-6 py-3 rounded-full font-semibold flex items-center secondary-bg text-primary-darker shadow-lg hover:shadow-xl transition-all`}
              >
                Get Started
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  &rarr;
                </motion.span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-full secondary-bg"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="primary-darker-color" size={24} />
            ) : (
              <div className="flex flex-col space-y-1.5">
                {[0, 1, 2].map((i) => (
                  <span 
                    key={i}
                    className="block w-6 h-0.5 rounded-full primary-darker-bg"
                  />
                ))}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25 }}
            className="md:hidden fixed inset-0 z-40 pt-20 primary-lighter-bg"
          >
            <div className="container mx-auto px-6 h-full overflow-y-auto pb-20">
              <nav className="grid gap-2 py-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="mb-2">
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === item.name ? null : item.name)}
                          className={`w-full px-6 py-4 rounded-xl flex justify-between items-center ${
                            mobileSubmenu === item.name 
                              ? "secondary-light-bg" 
                              : "hover:primary-light-bg"
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <item.icon className="secondary-color" size={20} />
                            <span className="text-lg font-semibold text-primary-darker">
                              {item.name}
                            </span>
                          </div>
                          <ChevronDown
                            size={20}
                            className={`transition-transform ${
                              mobileSubmenu === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileSubmenu === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-14 pr-6 overflow-hidden"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-3 px-4 rounded-lg hover:secondary-lighter-bg transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <span className="w-2 h-2 rounded-full secondary-bg"></span>
                                    <span className="text-primary-darker">
                                      {subItem.name}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-6 py-4 rounded-xl hover:primary-light-bg transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <item.icon className="secondary-color" size={20} />
                          <span className="text-lg font-semibold text-primary-darker">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 px-6"
                >
                  <Link
                    to="/get-started"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-6 py-4 rounded-xl secondary-bg text-center font-semibold text-primary-darker shadow-md"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </nav>
            </div>

            <div className="absolute bottom-0 left-0 right-0 py-4 border-t primary-light-border">
              <div className="text-center text-sm text-primary-darker">
                Swift Health Billing © {new Date().getFullYear()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
