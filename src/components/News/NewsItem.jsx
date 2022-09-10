import "./news-item.scss";
export default function NewsItem(){

    const data = [
        {
            id:1,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem1.jpeg"),
            category: "single"
        },
        {
            id:2,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem2.jpeg"),
            category: "main"
        },
        {
            id:3,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem3.jpeg"),
            category: "main"
        },
        {
            id:4,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem4.jpeg"),
            category: "main"
        },
        {
            id:5,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem5.jpeg"),
            category: "main"
        },
        {
            id:6,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem6.jpeg"),
            category: "main"
        },
        {
            id:7,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem7.jpeg"),
            category: "main"
        },
        {
            id:8,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem8.jpeg"),
            category: "main"
        },
        {
            id:9,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem9.jpeg"),
            category: "main"
        },
        {
            id:10,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem10.jpeg"),
            category: "secondary"
        },
        {
            id:11,
            title: "Massa tortor nibh nulla condimentum imperdiet scelerisque...",
            desc: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
            img: require("../../assets/newsitem11.jpeg"),
            category: "secondary"
        },
    ]
    return(
        <section id="news-item">
            <div className="news-item-wrapper">
                {data.filter( item => item.category === "single").map(item =>
                    <div className="single-news">
                        <div className="single-news-img" style={{background: `url(${item.img})`}}>
                            <h1>{item.title}</h1>
                        </div>
                        <div className="single-news-info">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )}
                <div className="top-news">
                    <div className="title">
                        <h2>Top News</h2>
                    </div>
                    <div className="top-news-wrapper">
                      {data.filter(item => item.category === "main").map(item =>
                        <div className="top-news-item">
                            <div className="top-news-item-img">
                                <img src={item.img} />
                            </div>
                            <div className="title-news-desc">
                                <h2>{item.title}</h2>
                                <div className="footer-news">
                                    <p>1 Hour Ago</p>
                                    <p className="location">CNN Indonesia</p>
                                </div>
                            </div>
                        </div>
                      )}
                    </div>
                </div>
                {data.filter( item => item.category === "secondary").map(item =>
                    <div className="single-news" style={{marginTop: "80px"}}>
                        <div className="single-news-img" style={{background: `url(${item.img})`}}>
                            <h1>{item.title}</h1>
                        </div>
                        <div className="single-news-info">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )}
                <div className="top-news">
                    <div className="title">
                        <h2>Top News</h2>
                    </div>
                    <div className="top-news-wrapper">
                        {data.filter(item => item.category === "main").map(item =>
                            <div className="top-news-item">
                                <div className="top-news-item-img">
                                    <img src={item.img} />
                                </div>
                                <div className="title-news-desc">
                                    <h2>{item.title}</h2>
                                    <div className="footer-news">
                                        <p>1 Hour Ago</p>
                                        <p className="location">CNN Indonesia</p>
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
