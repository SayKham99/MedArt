import "./blogsitem.scss"
export default function BlogsItem(){

    const data = [
        {
            id:1,
            img: require("../../assets/blog1.jpeg"),
            type: "Design",
            title: "Digital marketing channels",
            category: "header"
        },
        {
            id:2,
            img: require("../../assets/blog2.jpeg"),
            type: "Design",
            title: "Digital marketing channels",
            category: "header"
        },
        {
            id:3,
            img: require("../../assets/blog3.jpeg"),
            type: "Design",
            title: "Digital marketing channels",
            category: "body"
        },
        {
            id:4,
            img: require("../../assets/blog4.jpeg"),
            type: "Design",
            title: "Digital marketing channels",
            category: "body"
        },
        {
            id:5,
            img: require("../../assets/blog5.jpeg"),
            type: "Design",
            title: "Digital marketing channels",
            category: "body"
        },
        {
            id:6,
            img: require("../../assets/blog6.jpeg"),
            type: "Design",
            title: "Digital marketing channels",
            category: "body"
        },
        {
            id:7,
            img: require("../../assets/blog7.jpeg"),
            type: "Design",
            title: "Digital marketing channels",
            category: "body"
        }
    ]
    return(
        <section id="blogs-item">
                <div className="blogs-item-header">
                    {data.filter(item => item.category === "header").map(item =>
                        <div className="item">
                            <div className="item-img">
                                <img src={item.img} />
                            </div>
                            <div className="item-type">
                                <p>{item.type}</p>
                            </div>
                            <div className="item-title">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="item-date">
                                <p>23 Nov, 2021</p>
                            </div>
                        </div>
                    )}
            </div>
            <div className="blogs-item-body">
                {data.filter(item => item.category === "body").map(item =>
                    <div className="item">
                        <div className="item-img">
                            <img src={item.img} />
                        </div>
                        <div className="item-type">
                            <p>{item.type}</p>
                        </div>
                        <div className="item-title">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="item-date">
                            <p>23 Nov, 2021</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
