import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "What I Offer", path: "/whatweoffer" },
    { name: "My Work", path: "/mywork" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-black via-gray-900 to-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-10 flex justify-between items-center">

        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-40 h-auto cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white font-outfit text-sm md:text-base">
          {links.map(({ name, path }) => (
            <li key={name} className="relative group transition duration-300">
              <Link to={path} className="cursor-pointer">
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (desktop) */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md transition duration-300">
              Let’s Talk
            </button>
          </Link>
        </div>

        {/* Hamburger Menu (mobile) */}
        <div className="md:hidden">
          <Menu
            onClick={() => setMenuOpen(true)}
            className="text-white w-8 h-8 cursor-pointer pr-1.5"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-black/95 text-white flex flex-col items-center justify-center gap-8 z-50"
          >
            {/* Close Icon */}
            <X
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white w-8 h-8 cursor-pointer"
            />

            {/* Mobile Links */}
            <ul className="flex flex-col gap-6 text-xl font-outfit">
              {links.map(({ name, path }) => (
                <li key={name} onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition duration-300">
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>

            {/* Mobile Contact Button */}
            <Link to="/contact">
              <button className="mt-4 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md transition duration-300">
                Let’s Talk
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
