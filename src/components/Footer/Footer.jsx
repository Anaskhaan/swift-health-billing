import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import logo from "../../assets/logo-white.svg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden primary-darker-bg text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full secondary-bg blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full primary-bg blur-3xl"></div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center mb-6">
              <img 
                src={logo}
                alt="Swift Health Billing" 
                className="h-12 mr-4"
              />
              <h2 className="text-2xl font-bold tracking-tight">
                Swift <span className="secondary-color">Health Billing</span>
              </h2>
            </div>
            <p className="text-primary-lighter mb-6">
              Revolutionizing healthcare revenue cycle management with cutting-edge 
              technology and unparalleled expertise.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="text-current" />, label: "Facebook" },
                { icon: <Twitter className="text-current" />, label: "Twitter" },
                { icon: <Linkedin className="text-current" />, label: "LinkedIn" },
                { icon: <Mail className="text-current" />, label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-2 rounded-full primary-bg hover:secondary-bg transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full secondary-bg mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Services', 'About Us', 'Testimonials', 'Case Studies', 'Blog'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="flex items-center text-primary-lighter hover:text-white transition-colors">
                    <ChevronDown size={14} className="mr-2 secondary-color" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full secondary-bg mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                { icon: <Phone size={18} />, text: '+1 (555) 123-4567' },
                { icon: <Mail size={18} />, text: 'info@swiftbilling.com' },
                { icon: <MapPin size={18} />, text: '123 Healthcare Ave, Suite 500, Boston, MA 02110' }
              ].map((contact, index) => (
                <li key={index} className="flex items-start">
                  <span className="secondary-color mr-3 mt-0.5">{contact.icon}</span>
                  <span className="text-primary-lighter">{contact.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl primary-bg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full secondary-bg opacity-20 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-primary-lighter mb-6 max-w-lg">
              Subscribe to our newsletter for the latest in healthcare billing innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm text-white placeholder-primary-lighter focus:outline-none focus:ring-2 focus:secondary-border"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-lg secondary-bg text-primary-darker font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-primary-light text-center text-primary-lighter"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Swift Health Billing. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
