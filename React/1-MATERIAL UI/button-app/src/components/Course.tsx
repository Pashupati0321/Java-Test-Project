import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props{
    course: {
    name: string;
    desc: string;
}}
const Course: React.FC<Props> = ({ course }) =>  {
  return (
    <Card sx={{ maxWidth: '100%', marginTop: 5, bgcolor: 'ButtonFace' }}>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center', margin: 2}}>
          {course.name} Learning
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', margin: 2}}>
          This is {course.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' color='success' sx={{textAlign:'center', margin:2, marginLeft:82}}>Update</Button>
        <Button size="small" variant='contained' color='error' sx={{textAlign:'center', margin:2, marginLeft:80}}> Delete</Button>
      </CardActions>
    </Card>
  );
}
export default Course;