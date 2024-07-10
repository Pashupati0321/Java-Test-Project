import { Button, TextField } from '@mui/material'
import React from 'react'

function Events() {
    const appHit = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Clicked"+event.target);
    }
    const changeText = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log("Change clicked"+event.target);
        
    }
  return (
    <>
    <div className='App'>
      <Button variant="outlined" color="secondary" sx={{margin: 4}} onClick={(event) => appHit(event)}>Ok</Button>
      
      <TextField onChange={changeText} sx={{margin: 2}}></TextField>
    </div>
    
    </>
  )
}

export default Events
