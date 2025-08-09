import PortfolioOne from "../Components/PortfolioOne"
import PortfolioTwo from "../Components/PortfolioTwo"
import Tech from "../Components/Tech"
import TopBanner from "../Components/TopBanner"


function Portfolio(){
    return(
        <div>
            <TopBanner/>
            <PortfolioOne/>
            <PortfolioTwo/>
            <Tech/>
        </div>
    )
}
export default Portfolio