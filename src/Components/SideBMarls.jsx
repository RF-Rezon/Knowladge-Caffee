import React from "react";
import TitleShows from "./TitleShows";

const SideBMarls = ({bookmark, count}) => {
  
  return (
    <div>
      <div className="bg-gray-100 rounded-lg mt-6 pb-3 drop-shadow-md mx-auto px-6 md:mx-0">
        <p className="text-gray-800 pt-4 pb-2 font-semibold text-lg md:text-xl text-center">Bookmarked Blogs : {count}</p>
       {bookmark.map(e=> <TitleShows e={e.blog_title} key={e.id}/>)}
      </div>
    </div>
  );
};


export default SideBMarls;

{/* {bookmark.map(e=> <p>{e.blog_title}</p>)} */}
// {bookmark.map(e=> <TitleShows e={e}/>)}