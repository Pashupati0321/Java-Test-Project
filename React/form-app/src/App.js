import './App.css';
import {useState} from 'react';

function App() {

  /*const [name, setName] = useState('')

  function handleSubmit(event){
    event.preventDefault();
    alert('A name was submitted' + name)
  }
  return (
    <div className="App">

        <h1>Forms</h1>
        <label>Name: </label>
        <input type='text' name="nameInput" 
        value={name} onChange = {e => setName(e.target.value)}></input>
       <p>Your name is: {name}</p>
    </div>
  );
  */
const DEFAULT_FIRST_NAME = 'Prashant';
const DEFAULT_LAST_NAME = 'Chaudhary';
const DEFAULT_LANGUAGE = 'JS';
const DEFAULT_LIKES_CODING = true;

  const [formData, setFormData] = useState({
    firstName: DEFAULT_FIRST_NAME,
    lastName: DEFAULT_LAST_NAME,
    language: DEFAULT_LANGUAGE,
    likesCoding: DEFAULT_LIKES_CODING
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    language: 'Java',
  
  });

  
  const handleSubmit = () => {
    let valid = true;
    const tempErrors = {
    firstName: formData.firstName ? '' : 'First name required',
    lastName: formData.lastName ? '' : 'Last name required',
    language: formData.language ? '' : 'Language required', 
  }

  for(const error in tempErrors){
    if(tempErrors[error]) valid = false
  }
  setErrors(tempErrors)
  if(valid){
    alert('Form submitted');
  }
  };


  const handleChange = (e) => {
    const {name, type, value, checked} = e.target
    const inputValue = type === "checkbox" ? checked : value;
    setErrors(prevErrors => ({...prevErrors, [name]:''}))
    setFormData(prevState => ({...prevState, [name]:inputValue}))
  }
  return (
    <div className='App'>
      <input type='text'
        name = "firstName"
        value = {formData.firstName}
        onChange={handleChange}/>
        {errors.firstName && <p className='error'>{errors.firstName}</p>}
       <br/>
      <input type='text'
        name = "lastName"
        value = {formData.lastName}
        onChange={handleChange}/>
        {errors.lastName && <p className='error'>{errors.lastName}</p>}

       <br/>
      <select name='language' value={formData.language} onChange={handleChange}>
        <option value='JS'>Js</option>
        <option value='Python'>Python</option>
        <option value='Java'>Java</option>
        <option value='Ruby'>Ruby</option>
      </select>
      {errors.language && <p className='error'>{errors.language}</p>}

      <br/>
      <label>
        <input type='checkbox'
        name='likesCoding'
        checked={formData.likesCoding}
        onChange={handleChange}
        /> Do you like coding?
      </label>
      <br/>
       <button onClick={handleSubmit}>Submit</button>
      <p>Your full name is : {formData.firstName} {formData.lastName}</p>
      <p>Preferred language : {formData.language}</p>
      <p>Likes Coding: {formData.likesCoding ? 'Yes' : 'False'} </p>
    </div>
  );

}

export default App;
