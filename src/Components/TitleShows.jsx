import React, { useEffect, useState } from 'react';


const TitleShows = ({e}) => {
    
    console.log(e)
    const [title, setTitle] = useState([]);
    useEffect(()=>{
    
    },[])



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
