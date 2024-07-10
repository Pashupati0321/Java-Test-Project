import logo from './logo.svg';
import './App.css';
import { student } from './StudentList';
/*
function App() {
  const name = "React Js";
  const isUserLoggedIn = false;
  return (
    // Variable => {variable_name}
    // {10+20} 
    <div className="App">
    <a href = 'https://google.com'>Google</a>
     <h1 className='greeting'> Wecome to {name}</h1>
     <p>This is my first react app</p>
     <h2>{isUserLoggedIn ? "Welcome Back": "Please login"}</h2>
    </div>
  );
} */

  /*
function App() {
  const tasks = ["Buy Groceries","Check emails", "A"];
  return (
   <div>
    <h1>
      Tasks for the day:
    </h1>
    {tasks.length > 0 && (
      <ul>
        {tasks.map(task => (
          <li key = {task}>{task}</li>
        ))}
      </ul>
    )}
   </div>
  );
} */
  
 function App()
 {

  return (
    <div>
      <h1> Student Details</h1>
      <ul>
        {student.map(student => 
        <li key = {student.id}>
          <strong>Name:</strong> {student.name} 
          <strong>Age:</strong> {student.age} 
        </li>
        )}
      </ul>
    </div>
  )
 } 
export default App;
