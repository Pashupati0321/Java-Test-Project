// ButtonComponent.tsx
import React from 'react';
import Button from '@mui/material/Button';

interface ButtonComponentProps {
  title: string;
}


function onClick(){
alert('Can you please click ok');

}
const ButtonComponent: React.FC<ButtonComponentProps> = ({ title}) => {
  return (
    <>
    <Button variant="contained" color="primary" onClick={onClick}>
      {title}
    </Button>
    </>
  );
}

export default ButtonComponent;
