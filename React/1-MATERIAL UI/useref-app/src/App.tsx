import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const  count = useRef(0);

  useEffect(() =>{
   count.current = count.current+1;
  })

  return (
  <>
  <div className='App'>
  <button onClick={()=> setValue(prev => prev-1)}>-1</button>
  <h1>{value}</h1>
  <button onClick={()=> setValue(prev => prev+1)}>+1</button>
  <h1>Render count: {count.current}</h1>
  </div>
  </>
  );
}

export default App;
