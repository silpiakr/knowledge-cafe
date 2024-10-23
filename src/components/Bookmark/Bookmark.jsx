import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 mt-4 rounded-lg'>
            <h3 className='text-xl font-bold'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;