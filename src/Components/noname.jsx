import React, { useEffect, useState } from 'react';
import LeftBody from './Left-Body';

const Noname = ({handelWatchTime}) => {
    const [user, setUser] = useState([]); 
    useEffect(()=>{
        fetch("../../fakeJson.json")
        .then(res => res.json())
        .then(data => setUser(data.data))
    },[]);

    

    const fetchData = user.map(eU => 
        <LeftBody key={eU.id} eU={eU} handelWatchTime={handelWatchTime}></LeftBody>
        );
    
    return (
        <div>
        {fetchData}
        
           
        </div>
    );
};

export default Noname;