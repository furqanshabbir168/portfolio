import EcommerceOne from "../Components/EcommerceOne"
import EcommerceTwo from "../Components/EcommerceTwo"
import Tech from "../Components/Tech"
import TopBanner from "../Components/TopBanner"


function Ecommerce(){
    return(
        <div>
            <TopBanner/>
            <EcommerceOne/>
            <EcommerceTwo/>
            <Tech/>
        </div>
    )
}
export default Ecommerce