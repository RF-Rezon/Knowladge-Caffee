import React from "react";

const RightBody = ({watchtime, bookmark}) => {
  // const [time, setTime] = useState(bookmark);

  // useEffect(()=>{
  //   const getWTFLS = localStorage.getItem("watchBookmark");
  //   setTime(getWTFLS);
  // },[bookmark]);
  console.log(bookmark)

  return (
    <div>
      <div className="md:ml-10 cursor-default">
        <div className="flex flex-col-reverse md:flex-col mb-5">
          <div className="h-[70px] w-[400px] rounded-lg border-purple-900 border-2 bg-purple-100 flex items-center justify-center mx-auto md:mx-0 mt-10 md:mt-0 mb-5 md:mb-0" >
            <p className="px-[48px] py-[21px] text-purple-900 font-semibold text-xl">Spent time on read : {watchtime} min</p>
          </div>
          <div className="bg-gray-100 rounded-lg mt-6 drop-shadow-md mx-auto px-6 md:mx-0">
            <p className=" text-gray-800 pt-4 pb-2 pl-8 font-semibold text-2xl">Bookmarked Blogs : 8</p>
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
