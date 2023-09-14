import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-3/5">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}handleReadingTime={handleReadingTime}
                    handleAddBookmarks={handleAddBookmarks}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;