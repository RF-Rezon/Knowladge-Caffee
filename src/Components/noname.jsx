import React, { useEffect, useState } from 'react';

const Noname = () => {
    const [count, setCount] = useState([]); 
    useEffect(()=>{
        fetch("../../fakeJson.json")
        .then(res => res.json())
        .then(data => fetchData(data))
    })
    function fetchData (info){
      console.log(info)
    }
    return (
        <div>
            
        </div>
    );
};

export default Noname;