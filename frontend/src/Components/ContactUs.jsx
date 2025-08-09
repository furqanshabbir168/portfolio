import img from "../assets/programming.png";

function ContactUs() {
  return (
   <div className="bg-gray-100">
     <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-100">
      {/* Left Section */}
      <div>
        <h3 className="text-lg sm:text-xl font-medium text-blue-700 mb-2">
          Let's Connect
        </h3>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
          Get{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            In Touch
          </span>
        </h2>
        <p className="text-gray-600 text-start mb-7">
          Need help or clarity? Reach out through the contact form, and I’ll respond with the answers you’re looking for.
        </p>
        <img src={img} alt="Coding illustration" className="w-full max-w-sm mx-auto md:mx-0" />
      </div>

      {/* Right Section - Form */}
      <div>
        <form className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-blue-700">
            Get a personalized estimate for your project
          </h3>
          <p className="text-gray-600 text-start mb-4">
            Connect directly to explore how a tailored web solution can elevate your business, brand, or startup.
          </p>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <select
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <option value="">Select a Service</option>
            <option value="Website Development">Website Development</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Portfolio Website">Portfolio Website</option>
            <option value="Ecommerce Website">Ecommerce Website</option>
            <option value="Others">Others</option>
          </select>

          <textarea
            placeholder="Tell me about your project..."
            rows="5"
            className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-700"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded font-medium hover:bg-blue-900 transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
   </div>
  );
}

export default ContactUs;
