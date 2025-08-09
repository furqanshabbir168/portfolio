import successimg from "../assets/success.avif";
import {
  CheckCircle,
  CreditCard,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  MonitorSmartphone,
  ServerCog,
  ShieldCheck,
  SearchCheck,
} from "lucide-react";
import { motion } from "framer-motion";

function ChooseUs() {
  return (
    <section className="w-full px-6 sm:px-10 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side – Image and Features */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={successimg}
              alt="Success"
              className="w-[800px] h-[300px] rounded-lg shadow-md object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              {
                icon: <SearchCheck className="text-blue-700" />,
                text: "SEO Optimized Code",
              },
              {
                icon: <LayoutDashboard className="text-blue-700" />,
                text: "Clean & Modern UI/UX",
              },
              {
                icon: <ServerCog className="text-blue-700" />,
                text: "Full Stack Development",
              },
              {
                icon: <CreditCard className="text-blue-700" />,
                text: "Secure Payment Integration",
              },
              {
                icon: <MonitorSmartphone className="text-blue-700" />,
                text: "All-Device Responsive",
              },
              {
                icon: <ShieldCheck className="text-blue-700" />,
                text: "Admin Panel & Dashboard",
              },
              {
                icon: <Gauge className="text-blue-700" />,
                text: "Fast Loading & Performance",
              },
              {
                icon: <LifeBuoy className="text-blue-700" />,
                text: "Ongoing Support & Maintenance",
              },
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex items-center gap-3">
                {icon}
                <p className="text-gray-700 font-bold">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side – Content */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-medium text-blue-700 mb-2">
            Why Choose Me
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
            Your Vision ––{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
              My Code
            </span>
          </h2>
          <motion.p
            className="text-gray-600 text-start mb-7"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I’m Furqan Shabbir, a full stack web developer delivering fast,
            modern, and scalable web solutions for individuals, startups, and
            businesses. From responsive landing pages to custom admin panels and
            full-featured websites — I turn ideas into reality through clean,
            scalable code.
          </motion.p>
          <motion.p
            className="text-gray-600 text-start mb-7"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            viewport={{ once: true }}
          >
            My focus isn’t just building — it's solving. I build secure,
            SEO-ready, and performance-focused solutions tailored for your
            growth. Whether you're launching, scaling, or optimizing — I’ve got
            your back.
          </motion.p>

          <div className="space-y-3">
            {[
              "Pixel-perfect, fully responsive designs",
              "Clean code built for long-term scaling",
              "Fast delivery with attention to details",
              "Support beyond project completion",
              "Performance, speed, and SEO optimization",
              "Flexible solutions and honest advice",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-700 w-5 h-5 mt-1" />
                <p className="text-gray-600 text-start">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
