import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Components/Nav';
import RightBody from './Components/Right-Body';
import Blog from './Components/blog';
import Noname from './Components/noname';

function App() {
  
  const [watchtime, setWatchtime] = useState("0"); 
  const [bookmark, setBookmark] = useState([]);
 

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

    const handelBookmarks = (eU) => {
      const exitId = bookmark.find(e=> e.id == eU.id);
     
      if(exitId) { 
        {toast("You Have Already Bookmarked This Blog")} 
      }else{
        let newBookMark = [...bookmark, eU];
        setBookmark(newBookMark);
      }
    };
  
  return (
    <div className="App max-w-7xl mx-auto">

    <Nav/>
     <div className='flex flex-col md:flex-row'>
     <Noname  handelWatchTime={handelWatchTime} handelBookmarks={handelBookmarks}/>   
     {/* Dynamic Left body */}
     <RightBody watchtime={watchtime} bookmark={bookmark}/>
     </div>
     <Blog/>
     <ToastContainer></ToastContainer>
    </div>
  )
  }
export default App;
