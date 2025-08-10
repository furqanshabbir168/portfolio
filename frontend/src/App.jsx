import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import WeOffers from "./Pages/WeOffers"
import WebDev from "./Pages/WebDev"
import LandingPages from "./Pages/LandingPages"
import Portfolio from "./Pages/Portfolio"
import Ecommerce from "./Pages/Ecommerce"
import Projects from "./Pages/Projects"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import ScrollToTop from "./Components/ScrollToTop"
import { ToastContainer } from "react-toastify";

function App(){
  return(
    <div>
      <ToastContainer position="top-right" autoClose={4000} />
      <ScrollToTop/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/whatweoffer" element={<WeOffers/>}/>
        <Route path="/webdev" element={<WebDev/>}/>
        <Route path="/landingpages" element={<LandingPages/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/ecommerce" element={<Ecommerce/>}/>
        <Route path="/mywork" element={<Projects/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App