import React, { useEffect, useState } from 'react';

import './App.css';
import { DVDIcon } from './components/DVDIcon';

interface Size {
  width: number,
  height: number,
}

interface Collision {
  right: number,
  bottom: number,
}

function App() {

  const [ top, setTop ] = useState( 10 );
  const [ left, setLeft ] = useState( 10 );

  const [ size, setSize ] = useState< Size >({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [ collision, setCollision ] = useState< Collision >({
    right: window.innerWidth - 200,
    bottom: window.innerHeight - 90,
  });

  const getDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
    
    setCollision({
      right: width - 200,
      bottom: height - 90,
    });
  }

  useEffect(() => {
      // Event listener when the window is resize
    window.addEventListener( 'resize', getDimensions );

      // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener( 'resize', getDimensions );
    }
  }, []);
  
  
  return (
    <div className='App'>
        <DVDIcon 
          width='200px' 
          color='#60D833' 
          top={ top }
          left={ left }
        />
        <p style={{ color: 'white' }}>{ size?.width }</p>
        <p style={{ color: 'white' }}>{ collision?.right }</p>
    </div>
  );
}

export default App;
