import React from 'react'

const MyFunction = () => {

    const onClickHandle = () =>{
        
        console.log("Button clicked");
        

    }
    
  return (
    <div>
      <button onClick={onClickHandle}>Click</button>
    </div>
  )
}

export default MyFunction
