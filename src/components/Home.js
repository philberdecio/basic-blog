import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]  = useState([
        {title: 'Test 1', body: 'One thing...', author: 'phil', id: 1},
        {title: 'Test 2', body: 'I beg to differ...', author: 'shmoe', id: 2},
        {title: 'Test 2', body: 'But have you considered...', author: 'phil', id: 3}
    ])
     return ( 
        <div className="Home">
            <BlogList blogs={blogs} title = "All Blogs" />
        </div>
     );
}
 
export default Home;