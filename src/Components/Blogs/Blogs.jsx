import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])
    return (
        <div>
            <h3>Total Blogs: {blogs.length}</h3>
            {
                console.log(blogs)
            }
        </div>
    );
};

export default Blogs;