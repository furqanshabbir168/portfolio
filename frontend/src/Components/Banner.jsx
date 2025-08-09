import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-6 py-10 md:px-16 md:py-14 bg-gradient-to-r from-black via-gray-900 to-blue-900">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-lg sm:text-xl font-medium text-white">
          Special Offer
        </h3>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Get your{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            Free Proposal Today!
          </span>
        </h2>
        <p className="text-white mb-4 text-start">
          Looking to launch or revamp your online presence? I’ll help you turn
          your vision into a fast, modern, and scalable website. Get in touch
          now to receive a personalized development proposal tailored to your
          business goals.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md transition duration-300 w-fit cursor-pointer"
        >
          Send a Proposal
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 space-y-5 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center md:text-left">
          25% OFF Limited-Time Deal
        </h2>
        <p className="text-white mb-4 text-start">
          Enjoy 25% off on all web development services — from landing pages to
          full-stack platforms. Let’s bring your idea to life — at a price that
          works for you.
        </p>
      </div>
    </div>
  );
}

export default Banner;
