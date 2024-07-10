import { useState } from 'react';
import './App.css';


function App() {
  const ConvertToUppercase = () => {
    console.log("Uppercase clicked"+text);
    const convertedText = text.toUpperCase();
    setText(convertedText);
  }
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter the text');

  return (
    <div className="App">
    <textarea class='txt' value={text} onChange={handleOnChange}></textarea>
    <br/>
    <button className="primary" onClick={ConvertToUppercase} >Convert</button>

    </div>
  );
}

export default App;
