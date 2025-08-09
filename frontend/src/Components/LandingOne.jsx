import img from "../assets/landing-1.jpg";

function LandingOne() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 sm:px-12 py-12 max-w-8xl mx-auto">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-start">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Landing Pages{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            Design
          </span>
        </h3>
        <p className="text-gray-600 mb-4">
          Launch faster, convert better — with a custom landing page built to
          drive action.
        </p>
        <p className="text-gray-600 mb-4">
          My landing page development service is crafted specifically for
          brands, marketing campaigns, and product launches that need a powerful
          one-page website focused on a single goal — getting results. Whether
          you want to generate leads, promote a new offer, or increase signups,
          a landing page is the fastest and most effective way to do it.
        </p>
        <p className="text-gray-600 mb-4">
          Unlike full websites that spread attention across multiple pages,
          landing pages are laser-focused — designed to highlight one product,
          service, or goal. This makes them ideal for ad campaigns, events,
          limited-time offers, or startups validating ideas quickly.
        </p>
        <p className="text-gray-600 mb-4">
          I use the latest frontend technologies like React and Tailwind CSS to
          build blazing-fast, responsive landing pages that not only look
          amazing but also convert visitors into customers. Each section is
          purposefully placed to guide users toward your CTA — whether it’s a
          form, purchase, or booking.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 px-4">
        <img
          src={img}
          alt="Custom Website Development"
          className="w-full h-[400px] max-h-[450px] rounded-xl object-cover mx-auto"
        />
      </div>
    </div>
  );
}

export default LandingOne;
