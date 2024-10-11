// className="md:w-1/3 bg-slate-100 ml-2 rounded-md"

import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookMarks}) => {
    let time = 0
    bookMarks.map(bookmark => time += bookmark.reading_time)
    return (
        <div>
            <h3 className="bg-slate-50 p-4 rounded-md mb-2">Spent time on read : {time} min</h3>
            <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="pb-4">Bookmarked Blogs : {bookMarks.length}</h3>
                {
                    bookMarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookMarks: PropTypes.array,
}
export default Bookmarks;