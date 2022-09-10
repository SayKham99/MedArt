import "./blog.scss";
import BlogsItem from "./BlogsItems";

export default function Blog(){

    return(
        <section id="Blogs">
            <div className="blogs-wrapper">
                <div className="blog-header">
                    <h1>Our Blogs</h1>
                    <h5>Detail about our blogs</h5>
                </div>
            </div>
            <div className="blogs-header">
                <BlogsItem />
            </div>
        </section>
    )
}
