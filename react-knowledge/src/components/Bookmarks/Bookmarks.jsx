import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  // console.log(bookmarks);
  return (
    <div className="md:w-1/3 bg-neutral-300 ml-4 mt-5 p-4 rounded-xl">
      <h2 className="text-3xl text-center">Reading Time:{readingTime} </h2>
      <div className="mt-4">
        <h2 className="text-3xl text-center">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
