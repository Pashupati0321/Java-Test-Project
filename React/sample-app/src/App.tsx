import React, { useEffect } from 'react';
import './App.css';
import Header1 from './components/Header1';
import MyFunction from './components/MyFunction';
import MyForm from './components/MyForm';

function App() {
  
  useEffect(() => {
   fetch('https://api.postalpincode.in/pincode/833201').then((response) => response).then((e) => e.json()).then((e) => console.log(e))
  }, []);

  return (
    <div className="App" >
      <Header1 name="Prashant" age={28}/>
      <Header1 name="Raj" age={30}>
        <p>He is good boy</p>
      </Header1>
      <Header1 name="Santosh" age={29}/>
      <MyFunction/>
      <hr/>
      <MyForm/>
    </div>
  );
}

export default App;
