import React from 'react';


const TitleShows = ({e}) => {
    return (
        <div>
            <div className="bg-white rounded-2xl h-[98px] w-[350px] mx-auto my-6 flex justify-center items-center">
        <p className=" text-gray-800 p-5 font-semibold text-xl text-center">
            {e}
          </p>
        </div>
        </div>
    );
};

export default TitleShows;
