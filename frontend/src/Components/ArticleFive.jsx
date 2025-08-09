import { Link } from "react-router-dom";

function ArticleFive() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8">
        Post-Delivery Support <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
        That Actually Supports You
        </span>
      </h3>

      <div className="text-gray-700 space-y-6 text-base sm:text-lg leading-relaxed">
        <p>
          Your website isn't just a one-time project — it's an evolving tool
          that should grow with your business. That’s why I offer{" "}
          <strong className="text-gray-900 font-semibold">
            ongoing support even after delivery
          </strong>
          . From minor tweaks and content updates to technical troubleshooting,
          you’re never left on your own.
        </p>

        <p>
          I provide a dedicated post-launch window to fix bugs, make small
          revisions, and ensure everything runs smoothly across all devices and
          browsers. I’m also available for future upgrades or extended feature
          development as your needs evolve.
        </p>

        <p>
          Whether it’s a simple update, or backend
          performance tuning — you can rely on my{" "}
          <strong className="text-gray-900 font-semibold">
            personalized support
          </strong>{" "}
          that treats your website like it’s mine.
        </p>

        <p className="font-semibold text-gray-900 text-lg sm:text-xl pt-2">
          So what are you waiting for?{" "}
          <Link to = '/contact'><span className="text-blue-700 underline font-bold cursor-pointer">
            Contact us today
          </span></Link>{" "}
          and let’s build a solution that truly reflects your business — not
          just a website, but a powerful digital presence.
        </p>
      </div>
    </div>
  );
}

export default ArticleFive;
