import { useState } from 'react';
import Noname from './Components/noname';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App max-w-7xl mx-auto">
     {/* <Header />
     <div className='flex'>
    <LeftBody/>
    <RightBody />
     </div> */}
     <Noname />
    </div>
  )
}

export default App;
