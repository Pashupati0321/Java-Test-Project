import React from 'react';
import { Button, Link, TextField } from '@mui/material';
import { 
    BrowserRouter as Router, Routes, 
    Route 
} from "react-router-dom";
import SignUp from './SignUp';


function Login() {

  const onClickBtn = () => {
   console.log("Login button clicked to open Login component ");
   
  }
  return (
    <div className='App'>
        <TextField id="outlined-basic" label="Email/Phone no." variant="outlined" sx={{margin:1}} required/> <br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" sx={{margin:2}} required/> <br/>
        <Button variant="contained" onClick={onClickBtn}>Login</Button> 
        <Router> 
        <Link href='./SignUp.tsx' underline='hover' sx={{marginLeft: 2}}>Sign Up</Link>
                <Routes> 
                    <Route path="/SignUp"
                        element={<SignUp/>} /> 
                </Routes> 
            </Router> 
         
    </div>
  )
}

export default Login
