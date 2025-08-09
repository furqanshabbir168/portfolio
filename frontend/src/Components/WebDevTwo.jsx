import img from "../assets/web-dev-2.jpg";

function WebDevTwo() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 sm:px-12 py-12 max-w-8xl mx-auto">
      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 px-4"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true}}
      >
        <img
          src={img}
          alt="Custom Website Development"
          className="w-full h-[400px] max-h-[450px] rounded-xl object-cover mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-start">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          From Your Idea to a{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            Scalable Online Experience
          </span>
        </h3>
        <p className="text-gray-600 mb-4">
          Every project starts with understanding your goals, audience, and
          brand personality. As a dedicated freelancer, I don’t offer
          cookie-cutter solutions — I take time to learn about your business
          before writing a single line of code.
        </p>
        <p className="text-gray-600 mb-4">
          Whether you're a startup needing a bold online launch, a brand wanting
          a refresh, or an individual ready to showcase your work, I design
          websites that fit your identity and drive engagement.
        </p>
        <p className="text-gray-600 mb-4">
          From the first conversation to final delivery, I follow a clear,
          step-by-step approach that keeps you in control. You’ll get regular
          updates, honest feedback, and a product that not only looks great —
          but also performs across all devices.
        </p>
        <p className="text-gray-600 mb-4">
          I build with purpose — to turn your ideas into functional,
          high-performing websites that leave an impression and support your
          long-term goals.
        </p>
      </div>
    </div>
  );
}

export default WebDevTwo;
