import React, { ReactNode } from 'react'
interface Props{
    name:string;
    age: number;
    children?:ReactNode;
}

const Header:React.FC<Props> = ({name, age, children}) => {
  return (
    
    <div>
      <h1>This is {name} and age is {age}</h1>
      {children}
      
    </div>
    
  )
}

export default Header
