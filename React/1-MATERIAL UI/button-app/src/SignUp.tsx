import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

function SignUp() {

const onClickSignup = () => {
 
 alert('Sign up done');
 console.log("Signup done");

}

  return (
    <>
    <hr/>
    <div className='App'>
        <FormControl>
            <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{margin:2}} required/>
            <TextField id="outlined-basic" label="Middle Name" variant="outlined" sx={{margin:2}} /> 
            <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{margin:2}} required/> <br/>
            <TextField id="outlined-basic" label="Email ID" variant="outlined" sx={{margin:1}} required/> <br/>
            <TextField id="outlined-basic" label="Phone no." variant="outlined" sx={{margin:2}} required/> <br/>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            <TextField id="outlined-basic" label="New Password" variant="outlined" sx={{margin:2}} required/> <br/>
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" sx={{margin:2}} required/> <br/>
            <Checkbox ></Checkbox> <Typography sx={{marginBottom:2, color:'ActiveBorder'}}>Are the information provided correct?</Typography>
            <Button variant="contained" sx={{margin: 2}} onClick={onClickSignup}>Register</Button> 
       </FormControl>
    </div>
    </>
  )
}

export default SignUp
