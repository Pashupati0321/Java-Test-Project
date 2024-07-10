import React from 'react';
import { MenuList, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Menus: React.FC = () => {
  return (
    <div>
      <MenuList>
        <MenuItem component={Link} to="/" key="home">
          Home
        </MenuItem>
        <MenuItem component={Link} to="/about" key="about">
          About
        </MenuItem>
        <MenuItem component={Link} to="/add-course" key="add-course">
          Add Course
        </MenuItem>
        <MenuItem component={Link} to="/view-courses" key="view-courses">
          View Course
        </MenuItem>
        <MenuItem component={Link} to="/contact" key="contact">
          Contact
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default Menus;
