import React from "react";

const RightBody = () => {
  return (
    <div>
      <div className="ml-7">
        <div className="flex flex-col-reverse md:flex-col mb-5">
          <div className="h-[80px] w-[410px] rounded-lg border-purple-900 border-2 bg-purple-100 flex items-center justify-center" >
            <p className="px-[48px] py-[21px] text-purple-900 font-semibold text-2xl">Spent time on read : 177 min</p>
          </div>
          <div className="bg-gray-100 rounded-lg mt-5 drop-shadow-md">
            <p className=" text-gray-800 pt-4 pl-8 font-semibold text-2xl">Bookmarked Blogs : 8</p>
            <div className="bg-white rounded-2xl h-[98px] w-[350px] mx-auto my-6 flex justify-center items-center">
                <p className=" text-gray-800 p-5 font-semibold text-xl">Master Microsoft Power Platform and Become an In-Demand!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBody;
