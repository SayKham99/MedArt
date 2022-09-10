import "./news.scss";
import NewsItem from "./NewsItem";
export default function News(){
    return(
        <section id="news">
            <div className="news-wrapper">
                <h1>News</h1>
                <h5>Detail About Our News</h5>
            </div>
            <div className="news-wrapper-body">
                <NewsItem />
            </div>
        </section>
    )
}
