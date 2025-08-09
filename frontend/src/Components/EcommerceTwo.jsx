import img from "../assets/ecommerce-2.jpg";

function EcommerceTwo() {
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
          From Vision to a High-{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            Converting Online Store
          </span>
        </h3>
        <p className="text-gray-600 mb-4">
          Selling online isn’t just about having a website — it’s about
          delivering an experience that builds trust and encourages action.
        </p>
        <p className="text-gray-600 mb-4">
          Many businesses struggle with complex store setups, slow checkout
          processes, or platforms that don’t scale with growth. My ecommerce
          solutions are built to eliminate those barriers — giving you a
          streamlined, user-friendly system tailored to your business needs.
        </p>
        <p className="text-gray-600 mb-4">
          From the first consultation, the goal is simple: understand your
          products, your audience, and your brand’s personality. That helps
          shape a store that not only looks clean and professional — but
          actually sells. Every feature, from product filtering to payment
          integration, is designed to boost conversions and simplify your
          day-to-day.
        </p>
        <p className="text-gray-600 mb-4">
          You stay in control throughout — with real-time updates, personalized
          adjustments, and a powerful admin panel that lets you manage
          everything easily. Whether you’re just starting out or ready to scale,
          your ecommerce site will be ready to support your growth from day one.
        </p>
      </div>
    </div>
  );
}

export default EcommerceTwo;
