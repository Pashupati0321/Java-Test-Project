import React, {useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormControl, FormLabel, TextField } from '@mui/material'

const AddCourse: React.FC = () => {
    const btnAddHandle = () => {
        toast.success('Course Added');
      };
      const btnClearHandle = () => {
        toast('Course details cleared!');
      };

      useEffect(() => {
       document.title="Add course || Prashant Learning";
      }, []);

  return (
    <div className='App' >
    <FormControl sx={{textAlign:'center', margin: 2}}>
        <h2>Fill Course Details</h2>
        <TextField id="outlined-basic" color="secondary"  label="Enter the course name" variant="outlined" sx={{marginTop:2, margin:2}} focused/>
        <TextField id="outlined-basic" color="warning" label="Enter the course id" variant="outlined" sx={{margin:2}} required focused/> 
        <TextField fullWidth color="info" label="Enter course description" id="fullWidth" sx={{margin: 2}} focused/>
        <ToastContainer />
       <Button variant="contained" sx={{margin: 2}} onClick={btnAddHandle} >Add Course</Button> 
       <Button variant="contained" color="error" sx={{margin: 2}} onClick={btnClearHandle}>Clear</Button> 
   </FormControl>
</div>
  );
};

export default AddCourse;
