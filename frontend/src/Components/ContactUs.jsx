import { useState } from "react";
import img from "../assets/programming.png";
import { toast } from "react-hot-toast";

function ContactUs() {
  const url = 'https://portfolio-seven-peach-psmisphbn0.vercel.app/api/contact';
  const [data, setData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  function onChangeHandle(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmitHandle(event) {
    event.preventDefault();

    if (!data.name || !data.email || !data.service || !data.message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setData({ name: "", email: "", service: "", message: "" });
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Failed to send message");
    }
  }

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
          <form className="bg-white shadow-md rounded-xl p-6 space-y-4" onSubmit={onSubmitHandle}>
            <h3 className="text-lg sm:text-xl font-bold text-blue-700">
              Get a personalized estimate for your project
            </h3>
            <p className="text-gray-600 text-start mb-4">
              Connect directly to explore how a tailored web solution can elevate your business, brand, or startup.
            </p>

            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              value={data.name}
              onChange={onChangeHandle}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={data.email}
              required
              onChange={onChangeHandle}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <select
              name="service"
              required
              value={data.service}
              onChange={onChangeHandle}
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
              name="message"
              required
              value={data.message}
              onChange={onChangeHandle}
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
