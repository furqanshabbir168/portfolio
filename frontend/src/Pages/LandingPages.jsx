import LandingOne from "../Components/LandingOne"
import LandingTwo from "../Components/LandingTwo"
import Tech from "../Components/Tech"
import TopBanner from "../Components/TopBanner"


function LandingPages(){
    return(
        <div>
            <TopBanner/>
            <LandingOne/>
            <LandingTwo/>
            <Tech/>
        </div>
    )
}
export default LandingPages