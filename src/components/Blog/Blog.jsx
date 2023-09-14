import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx)=><span key={idx}><a href="">#{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default Blog;