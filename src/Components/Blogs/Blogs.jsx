import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    handleBookmark={handleBookmark}>
                </Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleBookmark: PropTypes.func.isRequired,
}
export default Blogs;