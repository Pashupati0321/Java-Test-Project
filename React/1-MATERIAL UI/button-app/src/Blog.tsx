import { Typography } from '@mui/material';
import React from 'react'

interface Props{
  Array:Array<string>,

  list: {
  name: string,
  id: number,
  age: number
  }[],

  address: {
    city: string,
    pin: number
  }
  children:React.ReactNode; //syntax for children from parent App.tsx
}
function Blogs(props:Props){
    return(
        <>
   <div className="App">
    <Typography>Blog component</Typography>
    <Typography>{props.Array[1]}</Typography>
    <Typography>Name: {props.list[0].name}, ID: {props.list[0].id}, age: {props.list[0].age}  </Typography>
    <Typography>{props.address.city} & {props.address.pin}</Typography>
    <Typography>Children: {props.children}</Typography>
    </div>
    </>
    )
}
export default Blogs;