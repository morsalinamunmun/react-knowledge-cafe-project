import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';
const Blog = ({blog, handleAddBookmarks, handleReadingTime}) => {
    const {title,cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img src={cover} className='w-full mb-7' alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-xl text-red-600'
                    onClick={()=>handleAddBookmarks(blog)}><FaBeer></FaBeer></button>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx)=><span key={idx}><a href="">#{hashtag}</a></span>)
                }
            </p>
            <button onClick={()=>handleReadingTime(reading_time)}>Mark AS Read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blog;