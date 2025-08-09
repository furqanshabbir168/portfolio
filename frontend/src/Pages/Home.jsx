import Banner from "../Components/Banner"
import ChooseUs from "../Components/ChooseUs"
import Hero from "../Components/Hero"
import Services from "../Components/Services"
import Tech from "../Components/Tech"


function Home(){
    return(
        <div>
            <Hero/>
            <Services/>
            <Banner/>
            <ChooseUs/>
            <Tech/>
        </div>
    )
}
export default Home