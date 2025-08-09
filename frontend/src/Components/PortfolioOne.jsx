import img from "../assets/portfolio-1.webp";

function PortfolioOne() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 sm:px-12 py-12 max-w-8xl mx-auto">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-start">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Portfolio{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            Website Development
          </span>
        </h3>
        <p className="text-gray-600 mb-4">
          In today’s competitive world, your portfolio isn’t just a collection
          of work — it’s your personal brand. A well-crafted portfolio website
          builds trust, showcases your skills, and positions you as a credible
          professional clients can rely on.
        </p>
        <p className="text-gray-600 mb-4">
          Whether you're a designer, developer, writer, or digital creator, a
          custom portfolio helps you stand out. Unlike platforms like Behance or
          LinkedIn, a personal website gives you full control — your domain,
          your design, your story.
        </p>
        <p className="text-gray-600 mb-4">
          You get a tailored design that matches your personality and
          profession, with smooth navigation, fast performance, and SEO
          optimization built in. Visitors instantly see who you are, what you
          do, and why they should hire or collaborate with you.
        </p>
        <p className="text-gray-600 mb-4">
          Your work deserves a stage that makes it shine. A professional
          portfolio website turns casual browsers into leads, and one-time
          visitors into long-term opportunities.
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

export default PortfolioOne;
