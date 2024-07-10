import React from 'react';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
//import Course from './components/Course';
import AllCourse from './components/Courses'; // Changed import to match your `AllCourse` component
import AddCourse from './components/AddCourse';
// Uncomment the following imports as needed
/*
import ButtonComponent from './ButtonComponent';
import './App.css';
import { Grid, Typography } from '@mui/material';
import Blogs from './Blog';
import Events from './Events';
import SimpleDialogDemo from './SimpleDialog';
import CheckBox from './CheckBox';
import AppBar1 from './AppBar';
import Login from './Login';
import SignUp from './SignUp';
*/

const App1: React.FC = () => {
  const btnHandle = () => {
    toast('This is my first message');
    toast.success('Done');
  };

  return (
    <div>
      <Home />
      <AllCourse />
      <hr/>
      <AddCourse/>
      <hr/>
      {/*<Course course={{name:"Web", desc:"web learning" }}/>*/}
      {/*<ToastContainer />
      <h1>Prashant Website</h1>
      <Button variant="outlined" color="secondary" onClick={btnHandle}>
        Click
      </Button> */}
    </div>
  );
};

export default App1;
