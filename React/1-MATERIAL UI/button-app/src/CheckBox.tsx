import { Checkbox } from '@mui/material'
import React from 'react'

const label = { 
    inputProps: 
    { 
        'aria-label': 'Checkbox demo',
         
     } 
   };

const checkboxClicked = (event:React.ChangeEvent<HTMLInputElement>) =>{
console.log("Checkbox clicked: " +event.target);
alert('Checked')
}
function CheckBox() {
  return (
    <div className='App'>
      <Checkbox {...label} onChange={checkboxClicked}></Checkbox>
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  )
}

export default CheckBox
