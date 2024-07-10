import React from 'react';
import { Container, Grid } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import AllCourse from './components/Courses'; // Corrected import to match your `AllCourse` component
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Menus />
            </Grid>
            <Grid item xs={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourse />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </div>
  );
};

export default App;
