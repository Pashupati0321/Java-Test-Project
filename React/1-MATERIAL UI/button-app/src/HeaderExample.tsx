import React from 'react'

interface Props{
    name:string;
    title:string;
}
function Header(props:Props) {
  return (
    <div>
      <h1>Header : {props.title}</h1>
      <p>This is {props.name}</p>
    </div>
  )
}

export default Header


/* App.tsx file

import React from 'react';
import Header from './HeaderExample';
    
function App() {
  return (
 
    <div style={{backgroundColor:'red'}}>
      <Header name="PNC" title="First card"/>
      <hr/>
      <Header name="XYZ" title="Second card"/>
      <hr/>
      <p>Prashant is good boy</p>
      <hr/>
      <Header name="ABC" title="third card"/>
    </div>
    
    
  );
}

export default App;

*/

