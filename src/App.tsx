import React, { useEffect, useState } from 'react';

import './App.css';
import { DVDIcon } from './components/DVDIcon'; 
import { useDimensions } from './hooks/useDimensions';

function App() {

  const { color, top, left } = useDimensions();

  return (
    <div className='App'>
      <DVDIcon width='200px' color={ color } top={ top } left={ left } />
    </div>
  );
}

export default App;
