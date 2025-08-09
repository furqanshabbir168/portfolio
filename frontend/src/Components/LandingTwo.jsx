import img from "../assets/landing-2.png";

function LandingTwo() {
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
          From Click to Conversion —{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            Built with Purpose
          </span>
        </h3>
        <p className="text-gray-600 mb-4">
          Every brand running ads or launching offers faces the same challenge —
          how to turn traffic into real results. That’s where a custom landing
          page makes all the difference.
        </p>
        <p className="text-gray-600 mb-4">
          Instead of overwhelming visitors with cluttered menus or unfocused
          layouts, a tailored landing page delivers a clear, conversion-driven
          experience. It’s designed with a single goal in mind — whether that’s
          collecting leads, generating signups, or closing a sale.
        </p>
        <p className="text-gray-600 mb-4">
          You get a fast, mobile-responsive page that aligns with your brand,
          speaks directly to your audience, and guides them to take action. With
          thoughtful structure, persuasive messaging, and optimized performance,
          your landing page becomes more than just a page — it becomes a
          powerful tool to grow your business.
        </p>
        <p className="text-gray-600 mb-4">
          From the very first scroll, your audience should know exactly what you
          offer and why it matters. That’s why every landing page I deliver is
          not only visually compelling, but backed by smart design decisions —
          fast loading times, clear call-to-actions, and smooth user flow. The
          result? Less bounce, more clicks, and higher ROI for your campaigns.
        </p>
      </div>
    </div>
  );
}

export default LandingTwo;
