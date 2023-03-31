import Nav from './Components/Nav';
import RightBody from './Components/Right-Body';
import Noname from './Components/noname';

function App() {
  const handelWatchTime =(time)=> {
    console.log(time);
  }
  return (
    <div className="App max-w-7xl mx-auto">
    <Nav/>
     <div className='flex flex-col md:flex-row'>
     <Noname  handelWatchTime={handelWatchTime}/>   
     {/* Dynamic Left body */}
     <RightBody/>
     </div>
    </div>
  )
}

export default App;
