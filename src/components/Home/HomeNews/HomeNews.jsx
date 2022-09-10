
import news1 from "../../../assets/news1.png";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import newsImg from "../../../assets/Screen Shot 2022-08-28 at 9.55.48 PM.png"
import "./homenews.scss"
export default function HomeNews(){

    const data = [
        {
            id: 1,
            date: "Monday, 2022",
            author: "By Author",
            title: "This Article’s Title goes Here, but not too long.",
            img: require("../../../assets/news2.png"),
            visible: 68,
            like: 86
        },
        {
            id: 2,
            date: "Monday, 2022",
            author: "By Author",
            title: "This Article’s Title goes Here, but not too long.",
            img: require("../../../assets/news3.png"),
            visible: 68,
            like: 86
        },
        {
            id: 1,
            date: "Monday, 2022",
            author: "By Author",
            title: "This Article’s Title goes Here, but not too long.",
            img: require("../../../assets/news4.png"),
            visible: 68,
            like: 86
        },
        {
            id: 1,
            date: "Monday, 2022",
            author: "By Author",
            title: "This Article’s Title goes Here, but not too long.",
            img: require("../../../assets/news5.png"),
            visible: 68,
            like: 86
        }
    ];

    return(
        <section id="home-news">
            <div className="home-news-wrapper">
                <div className="home-news-title">
                    <img src={newsImg} />
                </div>
                <div className="special-news">
                    <div className="left-news">
                        <div className="special-news-wrapper">
                            <div className="news-img">
                                <img src={news1} />
                            </div>
                            <div className="news-assets">
                                <div className="news-date">
                                    <p><CalendarTodayIcon className="calendar icon"/>Monday 05, </p>
                                    <p><PersonOutlineIcon className="user icon"/> By Author</p>
                                    <p><VisibilityIcon className="eye icon"/> 69</p>
                                    <p><FavoriteBorderIcon className="like icon"/> 86</p>
                                </div>
                            </div>
                            <div className="news-title">
                                <h2>A passion for putting patients first</h2>
                            </div>
                            <div className="news-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....</p>
                            </div>
                            <div className="read-more-btn">
                                <button>Read More <ArrowRightAltIcon /></button>
                            </div>
                        </div>
                    </div>
                    <div className="right-news">
                        {data.map(item =>
                            <div className="right-news-item">
                                <div className="right-news-item-img">
                                    <img src={item.img} />
                                </div>
                                <div className="right-news-item-desc">
                                    <div className="date">
                                        <p><CalendarTodayIcon style={{fontSize: "1rem"}}/>  {item.date}</p>
                                    </div>
                                    <div className="title">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className="assets">
                                        <p><VisibilityIcon style={{fontSize: "1rem", color: "#526AE9"}}/>{item.visible}</p>
                                        <p><FavoriteBorderIcon style={{fontSize: "1rem", color: "#E2315C"}}/>{item.like}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
