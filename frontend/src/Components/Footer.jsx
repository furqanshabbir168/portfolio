import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "../assets/logo.png";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white px-6 sm:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <img src={logo} alt="Logo" className="w-40 h-auto mb-4" />
          <p className="text-white mb-9 text-start">
            Get a fast, responsive, and custom-built website that truly represents
            you online. Designed to impress, built to perform — your vision,
            brought to life with clean code.
          </p>
          <div className="flex space-x-4 mt-4">
            <Facebook className="w-5 h-5 hover:text-blue-500 transition" />
            <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
            <Youtube className="w-5 h-5 hover:text-red-600 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-200 text-start">
            <Link to = '/'><li className="hover:text-white cursor-pointer">Home</li></Link>
            <Link to = '/whatweoffer'><li className="hover:text-white cursor-pointer">What I Offer</li></Link>
            <Link to = '/mywork'><li className="hover:text-white cursor-pointer">My Work</li></Link>
            <Link to = '/blog'><li className="hover:text-white cursor-pointer">Blog</li></Link>
            <Link to = '/contact'><li className="hover:text-white cursor-pointer">Contact</li></Link>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-gray-200 text-start">
            <Link to = '/webdev'><li className="hover:text-white cursor-pointer">Custom Website Development</li></Link>
            <Link to = '/landingpages'><li className="hover:text-white cursor-pointer">Landing Page Design</li></Link>
            <Link to = '/portfolio'><li className="hover:text-white cursor-pointer">Portfolio Websites</li></Link>
            <Link to = '/ecommerce'><li className="hover:text-white cursor-pointer">Ecommerce Development</li></Link>
          </ul>
        </div>

        {/* Copyright */}
        <div className="md:col-span-3 lg:col-span-1 flex flex-col justify-end items-start md:items-end">
          <div className="flex items-center space-x-2 text-white text-start mt-6 md:mt-0">
            <FaRegCopyright className="text-white w-4 h-4" />
            <p>
              {new Date().getFullYear()} by <span className="text-white font-semibold">FURQAN DEV</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
