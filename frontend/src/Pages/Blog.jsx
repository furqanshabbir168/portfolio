import ArticleFive from "../Components/ArticleFive"
import ArticleFour from "../Components/ArticleFour"
import ArticleOne from "../Components/ArticleOne"
import ArticleThree from "../Components/ArticleThree"
import ArticleTwo from "../Components/ArticleTwo"
import TopBanner from "../Components/TopBanner"


function Blog(){
    return(
        <div>
            <TopBanner/>
            <ArticleOne/>
            <ArticleTwo/>
            <ArticleThree/>
            <ArticleFour/>
            <ArticleFive/>
        </div>
    )
}
export default Blog