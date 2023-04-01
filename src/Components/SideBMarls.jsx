import React from "react";

const SideBMarls = ({bookmark}) => {
  
  return (
    <div>
      <div className="bg-gray-100 rounded-lg mt-6 drop-shadow-md mx-auto px-6 md:mx-0">
        <p className=" text-gray-800 pt-4 pb-2 pl-8 font-semibold text-2xl">Bookmarked Blogs : 8</p>
        <div className="bg-white rounded-2xl h-[98px] w-[350px] mx-auto my-6 flex justify-center items-center">
          {bookmark.map(e=> <div>{e.blog_title}</div>)}
        </div>
      </div>
    </div>
  );
};


export default SideBMarls;
// className=" text-gray-800 p-5 font-semibold text-xl"