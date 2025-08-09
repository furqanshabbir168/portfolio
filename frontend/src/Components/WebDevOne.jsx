import img from "../assets/web-dev-1.webp";

function WebDevOne() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 sm:px-12 py-12 max-w-8xl mx-auto">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-start">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Custom{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            Website Development
          </span>
        </h3>
        <p className="text-gray-600 mb-4">
          Bring your business online with a custom-built website that reflects
          your brand and delivers real results.
        </p>
        <p className="text-gray-600 mb-4">
          My custom website development service is designed for startups,
          brands, and individual business owners who need more than just a basic
          site. Whether you're building your first online presence or revamping
          your existing one — I build every website from scratch to ensure it’s
          unique, fast, and aligned with your brand identity.
        </p>
        <p className="text-gray-600 mb-4">
          Forget templates. I deliver fully coded, scalable websites using
          modern technologies like React, Tailwind CSS, Node.js, and MongoDB —
          the same stack trusted by top global companies. This means your
          website will be lightning-fast, SEO-friendly, and easy to scale as
          your business grows.
        </p>
        <p className="text-gray-600 mb-4">
          Whether you’re launching your first site or upgrading an outdated one,
          I ensure that your website is functional, visually appealing, and
          aligned with your brand goals. I don’t just create websites — I build
          digital experiences that convert.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 px-4"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        <img
          src={img}
          alt="Custom Website Development"
          className="w-full h-[400px] max-h-[450px] rounded-xl object-cover mx-auto"
        />
      </div>
    </div>
  );
}

export default WebDevOne;
