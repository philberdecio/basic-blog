import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]  = useState(null)

    useEffect(() => {
        fetch('http://localhost:7000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
    }, [])
    
    return ( 
        <div className="Home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {blogs &&<BlogList blogs={blogs.filter(blog => blog.author === 'phil')} title="Phil's Blogs" />}
        </div>
     );
    }
    
    export default Home;