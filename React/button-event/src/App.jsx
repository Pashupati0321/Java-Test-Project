import './App.css';
import {useState} from 'react';
import { Button, InputLabel, TextField} from '@mui/material';

function App() {
 
  //Calculator Logic here
  //Addition
    const add = () =>{
      if (firstNumber === '' || secondNumber === ''){
        setInputLabel("***Please enter the blank field(s)");
        console.log("Result Status: Addition clicked: Please enter the blank input field(s)");
      } else {
      const result = parseInt(firstNumber) + parseInt(secondNumber);
      setTotalResult(result.toString());
      console.log("Result : Addition " + parseInt(result));
      }
  }

  //Subtraction
    const subtract = () =>{
      if (firstNumber === '' || secondNumber === ''){
        setInputLabel("***Please enter the blank field(s)");
        console.log("Result Status: Subtraction clicked : Please enter the blank input field(s)");
      } else {
      const result = parseInt(firstNumber) - parseInt(secondNumber);
      setTotalResult(result.toString());
      console.log("Result : Subtraction : " + parseInt(result));
      }
      }

  //Multiplication
      const multiply = () =>{
        if (firstNumber === '' || secondNumber === ''){
          setInputLabel("***Please enter the blank field(s)");
          console.log("Result Status: Multiplication clicked : Please enter the blank input field(s)");
        } else {
        const result = parseInt(firstNumber) * parseInt(secondNumber);
        setTotalResult(result.toString());
        console.log("Result : Multiplication : " + parseInt(result));
        }
        }
    //Division
        const divide = () =>{
          if (firstNumber === '' || secondNumber === ''){
            setInputLabel("***Please enter the blank field(s)");
            console.log("Result Status: Division clicked : Please enter the blank input field(s)");
          } else {
          const result = parseInt(firstNumber) / parseInt(secondNumber);
          setTotalResult(result.toString());
          console.log("Result : Division : " + parseInt(result));
          }
          }

    //Modulus
         const modulus = () =>{
          if (firstNumber === '' || secondNumber === ''){
            setInputLabel("***Please enter the blank field(s)");
            console.log("Result Status: Modulus clicked : Please enter the blank input field(s)");
          } else {
          const result = parseInt(firstNumber) % parseInt(secondNumber);
          setTotalResult(result.toString());
          console.log("Result : Modulus :" + parseInt(result));
          }
          }

    //Factorial
    const factorial = () => {
      if (firstNumber === '') {
        setInputLabel("***Please enter the blank field");
        console.log("Result Status: Factorial clicked : Please enter the blank input field");
      } else {
        let number = parseInt(firstNumber);
        if (number < 0) {
          setInputLabel("***Factorial of a negative number is undefined");
          console.log("Result Status: Factorial clicked : Factorial of a negative number is undefined");
        } else {
          let fact = 1;
          for (let i = 1; i <= number; i++) {
            fact = fact * i;
          }
          setTotalResult(fact.toString());
          console.log("Result : Factorial :" + fact);
        }
      }
    };

    //To check even-odd
    const toCheckEvenOdd = () =>{
      if (firstNumber === '') {
        setInputLabel("***Please enter the blank field");
        console.log("Result Status: Even/Odd clicked : Please enter the blank input field");
      } else {
        let number = parseInt(firstNumber);
        {(number%2===0) ? 
          setInputLabel("'" + number + "' is Even") : setInputLabel("'" + number +"' is Odd");}
      }
      }
    //Clear
          const clear = (e) =>{
            setFirstNumber('');
            setSecondNumber('');
            setTotalResult('');
            setInputLabel('');
            console.log("Fields Status : Clear clicked : All fields are cleared!!!" );
          
            }
  //OnChange calls
  const OnChangeFirst = (e) => {
    console.log("On change first");
    setFirstNumber(e.target.value);

  }
  const OnChangeSecond = (e) => {
    console.log("On change second");
    setSecondNumber(e.target.value);
  }
 
//useState 
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [totalResult, setTotalResult] = useState('');
  const [inputLabel, setInputLabel] = useState('');

  
  return (
    //Form structure
    <div className="App">
    <hr/>
    <br/>
    <div className='inputOutputDiv' sx={{margin: 2}} variant="contained">
    <TextField type = 'number' id="outlined-basic" label="Enter 1st number (Use: 0 to 9)" variant="outlined"  
    value = {firstNumber} onChange={OnChangeFirst}/>
    <br/> <br/>
    <TextField type = 'number' id="outlined-basic" label="Enter 2nd number (Use: 0 to 9)" variant="outlined" 
    value={secondNumber} onChange={OnChangeSecond}/>
    <br/><br/>
    <TextField
          type='text'
          variant="outlined"
          value={totalResult}
          label="Your Result here"
          InputProps={{
            readOnly: true,
          }}
          sx={{ margin: 1 }}
        />
    <InputLabel sx={{ fontWeight: 'bold', fontFamily:'unset' ,marginTop: 2, marginBottom: -4, color: 'error.main' }}> {inputLabel} </InputLabel>

    </div>
    
     <br/><br/>
    <div className='buttonDiv' sx={{margin: 2}} variant="contained">
    <Button sx={{ margin: 2, fontWeight: 'bold'}} variant="contained" color="primary"   onClick={add}>+</Button>
    <Button sx={{ margin: 2, fontWeight: 'bold'}} variant="contained" color="secondary" onClick={subtract}>-</Button>
    <Button sx={{ margin: 2, fontWeight: 'bold'}} variant="contained" color="success" onClick={multiply}>*</Button>
    <Button sx={{ margin: 2, fontWeight: 'bold'}} variant="contained" color="info" onClick={divide}>/</Button>
    <Button sx={{ margin: 2, fontWeight: 'bold'}} variant="contained" color="warning" onClick={modulus}>%</Button>
    <Button sx={{ margin: 2, fontWeight: 'bold'}} variant="contained" color="inherit" onClick={factorial}>Factorial</Button>
    <Button sx={{ margin: 2, fontWeight: 'bold'}} variant="contained" color="secondary" onClick={toCheckEvenOdd}>Even/Odd</Button>
    <Button sx={{ margin: 2, fontWeight: 'bold'}} variant="contained" color="error" onClick={clear}>Clear</Button>
    <br/><br/>
    <hr/>
    </div>

    </div>
  );
}

export default App;
