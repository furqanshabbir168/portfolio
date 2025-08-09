import one from '../assets/services-1.jpg'
import two from '../assets/services-2.jpg'
import three from '../assets/services-3.jpg'
import four from '../assets/services-4.avif'

const services = [
  {
    id:1,
    name: "Custom Website Development",
    description:
      "Tailored websites built from scratch using the latest full stack technologies. From frontend to backend, everything is crafted to match your brand and business goals with clean UI, performance, and scalability.",
      img : one,
      path : '/webdev'
  },
  {
    id:2,
    name: "Landing Page Design",
    description:
      "High-converting landing pages designed to drive results — perfect for product launches, promotions, or service showcases. Fast, responsive, and optimized for conversions and SEO.",
      img : two,
      path : '/landingpages'
  },
  {
    id:3,
    name: "Portfolio Websites",
    description:
      "Modern and professional portfolio sites for freelancers, creators, and professionals. Highlight your work, build your brand, and stand out with a clean, responsive design.",
      img : three,
      path : '/portfolio'
  },
  {
    id:4,
    name: "Ecommerce Development",
    description:
      "Fully functional ecommerce stores with payment integration, product management, and smooth user experience. Designed to scale and sell with performance-first development practices.",
      img : four,
      path : '/ecommerce'
  },
];

export default services;
