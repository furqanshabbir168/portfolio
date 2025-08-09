import { useLocation } from 'react-router-dom';
import bg from '../assets/bg.png';

function TopBanner() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const pageNames = {
    whatweoffer: "What We Offer",
    webdev : "Website Development",
    landingpages : "Landing Pages Design",
    portfolio : "Portfolio Websites",
    ecommerce : "Ecommerce Development",
    mywork : "My Work",
    blog : "Blog",
    contact : "Contact Us"
  };

  const currentPage = pageNames[path] || "Page";

  return (
    <div
      className="w-full h-[300px] sm:h-[400px] flex flex-col justify-center items-center bg-cover bg-center text-white text-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-4xl sm:text-6xl font-extrabold">{currentPage}</h1>
      <p className="text-lg sm:text-2xl mt-2">
        Home / <span className="text-blue-600 font-bold">{currentPage}</span>
      </p>
    </div>
  );
}

export default TopBanner;