import img from "../assets/ecommerce-1.jpg";

function EcommerceOne() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 sm:px-12 py-12 max-w-8xl mx-auto">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-start">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Ecommerce{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
            Website Development
          </span>
        </h3>
        <p className="text-gray-600 mb-4">
          Launch your online store with powerful features that drive sales and
          simplify management.
        </p>
        <p className="text-gray-600 mb-4">
          Whether you're a startup brand, restaurant, or growing business —
          having a custom ecommerce store lets you reach customers 24/7 and sell
          your products without limitations. Unlike pre-built platforms, I craft
          tailored ecommerce solutions that are fast, scalable, and aligned with
          your unique goals.
        </p>
        <p className="text-gray-600 mb-4">
          Your store comes equipped with modern features like product listings
          with filters, cart functionality, secure payment integration (Stripe,
          PayPal, etc.), and mobile-optimized pages for seamless shopping
          experiences on any device.
        </p>
        <p className="text-gray-600 mb-4">
          You also get a fully functional admin dashboard — where you can manage
          products, track orders, monitor inventory, and view customer data all
          in one place. No tech skills needed. Just a clean, user-friendly
          system designed to help you grow and stay in control.
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

export default EcommerceOne;
