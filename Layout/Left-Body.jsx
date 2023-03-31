import React from "react";

const LeftBody = () => {
  return (
    <div className="h-[821px] w-[845px]">
      <div id="card" className="basis-1/3 flex flex-col rounded-md bg-gray-100 pb-5 drop-shadow-xl">
        <div className="basis-1/2 h-full w-full rounded-md border-gray-800 border-2"><img className="h-[450px] w-[845px] object-cover"  src="../src/img/sample.jpg" alt="" /></div>
        <div className="basis-1/2">
        <div className="flex justify-between items-center my-3 mt-5">
          <div className="flex h-16 items-center">
            <img className="w-12 h-12 object-cover rounded-full ml-4" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"  alt="image" />
            <div className=" mx-5">
              <p className="font-bold text-2xl my-3">Mr.Raju</p>
              <p className="text-gray-500 text-sm  font-semibold  mr-2">Mar 14 (4 Days ago)</p>
            </div>
          </div>
          <div className="flex items-center mr-4">
            <span className="text-gray-500 text-base font-normal p-1 mr-2">05 min read</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(107 114 128)"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4">
            <p className="font-bold text-4xl my-1 mb-5 pt-3">How to get your first job as a self-taught programmer</p>
            <span className="text-gray-500 text-sm underline font-semibold  mr-2">#biginners</span>{" "}
            <span className="text-gray-500 text-sm underline font-semibold p-3 mr-2">#programming</span> <br />
            <div className="my-3">
                <a href="#" className="text-purple-700 text-sm underline font-semibold">
                  Mark as read
                </a>
            </div>
        </div>
        </div>
        
       
      </div>
      <hr className="py-4 my-8"/>
    </div>
  );
};

export default LeftBody;
