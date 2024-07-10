import * as React from 'react';
import { useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Home() {
    useEffect(() => {
        document.title="Home || Prashant Learning";
       }, []);
       
  return (
    <Card sx={{ maxWidth: '100%', bgcolor: '#F7C2B7'}}>
    <CardActionArea >
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center', margin: 5}}>
          Prashant Learning
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', margin: 2}}>
          This is Prashant website
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="medium" color="primary" variant='contained' sx={{margin:2, marginLeft:40}}>
        Click
      </Button>
    </CardActions>
  </Card>
    
  )
}

export default Home
