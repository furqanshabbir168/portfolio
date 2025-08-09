import img from "../assets/portfolio-2.jpg";

function PortfolioTwo() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 sm:px-12 py-12 max-w-8xl mx-auto">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 px-4">
        <img
          src={img}
          alt="Custom Website Development"
          className="w-full h-[400px] max-h-[450px] rounded-xl object-cover mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-start">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Build a Portfolio That{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            Speaks for You
          </span>
        </h3>
        <p className="text-gray-600 mb-4">
          Your portfolio is often the first impression — and in many cases, the
          only one. That’s why it needs to communicate more than just your past
          work. It should reflect your personality, values, and vision in a way
          that resonates with your ideal clients or employers.
        </p>
        <p className="text-gray-600 mb-4">
          With a custom portfolio, you get a platform that grows with you.
          Whether you’re applying for jobs, landing freelance clients, or
          building a personal brand, your site is structured to highlight your
          achievements, skills, and impact — not just images or text.
        </p>
        <p className="text-gray-600 mb-4">
          Unlike generic templates, your site is designed to guide the viewer’s
          attention — with clear calls to action, storytelling sections, and
          responsive design that looks sharp on every device.
        </p>
        <p className="text-gray-600 mb-4">
          No distractions. No fluff. Just a clean, modern, and strategic
          presentation that helps you attract better opportunities and take
          control of your online presence.
        </p>
      </div>
    </div>
  );
}

export default PortfolioTwo;
