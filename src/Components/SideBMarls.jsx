import React from "react";
import TitleShows from "./TitleShows";

const SideBMarls = ({bookmark}) => {
  
  return (
    <div>
      <div className="bg-gray-100 rounded-lg mt-6 pb-3 drop-shadow-md mx-auto px-6 md:mx-0">
        <p className=" text-gray-800 pt-4 pb-2 pl-8 font-semibold text-2xl">Bookmarked Blogs : 8</p>
       {bookmark.map(e=> <TitleShows e={e.blog_title} key={e.id}/>)}
      </div>
    </div>
  );
};


export default SideBMarls;

{/* {bookmark.map(e=> <p>{e.blog_title}</p>)} */}
// {bookmark.map(e=> <TitleShows e={e}/>)}