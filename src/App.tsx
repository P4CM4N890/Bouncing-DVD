import React, { useEffect, useState } from 'react';

import './App.css';
import { DVDIcon } from './components/DVDIcon';

function App() {

  // const [ top, setTop ] = useState( 0 );
  // const [ left, setLeft ] = useState( 0 );

  const getDimensions = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  const [ screenSize, setScreenSize ] = useState( getDimensions() );

  useEffect(() => {
    // setTimeout( () => {
    //   move();
    // }, 10 );
    setScreenSize( getDimensions() );
  }, [ screenSize ]);
  
  
  return (
    <div className='App'>
        <DVDIcon width='22vw' color='#60D833' />
    </div>
  );
}

export default App;
