import { useState } from 'react';
import Nav from './Components/Nav';
import RightBody from './Components/Right-Body';
import Noname from './Components/noname';

function App() {

  const [watchtime, setWatchtime] = useState("0"); 
  const [bookmark, setBookMark] = useState(); 
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
  const handelBookmarks = (title)=> {
    const previousBookMark = JSON.parse(window.localStorage.getItem("watchBookmark"));
    if(previousBookMark){
     
    }else{
      window.localStorage.setItem("watchBookmark", title);
      setBookMark(title);
    }
    console.log(title)
  }
  return (
    <div className="App max-w-7xl mx-auto">
    <Nav/>
     <div className='flex flex-col md:flex-row'>
     <Noname  handelWatchTime={handelWatchTime} handelBookmarks={handelBookmarks}/>   
     {/* Dynamic Left body */}
     <RightBody watchtime={watchtime} bookmark={bookmark}/>
     </div>
    </div>
  )
}

export default App;
