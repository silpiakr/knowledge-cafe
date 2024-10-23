import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMrakAsRead}) => {
    const {id, title, cover,author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4 border-b'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-xl font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)} 
                        className='ml-2 text-2xl text-slate-400'><FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className='text-2xl font-bold mb-4'>{title}</h2>
            <p>
                {
                hashtags.map((hash, index)=> <span className='me-4' key={index}><a href="">{hash}</a></span>)
                }

            </p>
            <button className='pb-2 text-purple-600 font-bold underline' onClick={() => handleMrakAsRead (id, reading_time)}>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMrakAsRead: PropTypes.func
}

export default Blog;