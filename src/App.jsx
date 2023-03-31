import { useState } from 'react';
import Nav from './Components/Nav';
import RightBody from './Components/Right-Body';
import Noname from './Components/noname';

function App() {

  const [watchtime, setWatchtime] = useState("0"); 
  const handelWatchTime =(time)=> {

    const previousWatchTime = JSON.parse(window.localStorage.getItem("watchtime"));
    if(previousWatchTime){
      const sum = previousWatchTime + time;
      window.localStorage.setItem("watchtime", sum);
      setWatchtime(sum);
    }else{
      window.localStorage.setItem("watchtime", time);
      setWatchtime(time);
    }
  }
  return (
    <div className="App max-w-7xl mx-auto">
    <Nav/>
     <div className='flex flex-col md:flex-row'>
     <Noname  handelWatchTime={handelWatchTime}/>   
     {/* Dynamic Left body */}
     <RightBody watchtime={watchtime}/>
     </div>
    </div>
  )
}

export default App;
