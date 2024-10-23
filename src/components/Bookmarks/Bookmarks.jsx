import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 mt-4 ml-4">
            <div className=' bg-gray-200 m-4 p-3 rounded-lg'>
                <h3 className='text-2xl font-medium'>Spent time on read: {readingTime} min</h3>
            </div>
            <div className=' bg-gray-300 ml-4 mt-2 p-3'>
            <h2 className="text-xl md:text-3xl font-bold">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;