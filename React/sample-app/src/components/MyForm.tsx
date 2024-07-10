import React from 'react'

const MyForm:React.FC = () => {
    const onSelectOpen = () => {
       alert("Selected")
    }
  return (
    <div>
        <input type="text" value="Enter your first name" ></input><br/>
        <input type="text" value="Enter your last name"></input> <br/>
        <select style={{ width: '100px', margin:4, height: '30px' }}>
            <option value="C" onSelect={onSelectOpen}>C</option>
            <option value="Java" selected >Java</option>
            <option value="Python">Python</option>
            <option value="DSA">DSA</option>
        </select><br/>
        <input type='checkbox'>Male</input>
        <input type='checkbox'>Female</input>

        <button>Click</button>

      
    </div>
  )
}

export default MyForm
