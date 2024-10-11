import PropTypes from 'prop-types';
import './Blog.css'

const Blog = ({blog, handleBookmark}) => {
    const {title, cover_img, author_img, author_name, published_date, reading_time, hash_tags} = blog;

    
    return (
        <div className='p-5 border-2 bg-slate-50 mb-4 mr-2 rounded-md'>
            <img className='w-full blog-cover' src={cover_img} alt={`Cover Picture of the title of ${title}`} />
            <div className='flex justify-between mt-4 mb-4'>
                <div className='flex'>
                    <div>
                        <img className='w-14 h-14 rounded-full' src={author_img} alt="Author Image" />
                    </div>
                    <div className='ml-6'>
                        <h3 className='text-2xl '>{author_name}</h3>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex align-middle'>
                    <p className='reading-time'>{reading_time} min to read</p>
                    <button onClick={()=> handleBookmark(blog)} className='ml-3'><p className='border-2 rounded-md border-green-400 bg-green-50 p-2'>Bookmark</p></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className='text-blue-600'>
                {
                    hash_tags.map( (hash, idx) => <span key={idx}><a href="">#{hash}  </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default Blog;