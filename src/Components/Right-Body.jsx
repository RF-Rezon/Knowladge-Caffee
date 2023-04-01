import React, { useEffect, useState } from "react";
import SideBMarls from "./SideBMarls";

const RightBody = ({ watchtime, bookmark, count}) => {

  const [time, setTime] = useState(watchtime);

  useEffect(() => {
    const x = window.localStorage.getItem("watchtime");
    if (x) {
      setTime(x);
    } else {
      setTime(0);
    }
  }, [watchtime]);

  useEffect(() => {
    return window.localStorage.clear();
  }, []);

  return (
    <div>
      <div className="md:ml-10 cursor-default">
        <div className="flex flex-col-reverse md:flex-col mb-5">
          <div className="h-[70px] w-[400px] rounded-lg border-gray-900 border-2 bg-gray-200 flex items-center justify-center mx-auto md:mx-0 mt-10 md:mt-0 mb-5 md:mb-0">
            <p className="px-[48px] py-[21px] text-gray-900 font-semibold text-lg md:text-xl text-center">Spent time on read : {time} min</p>
          </div>
          <SideBMarls bookmark={bookmark} count={count}/>
        </div>
      </div>
    </div>
  );
};

export default RightBody;
