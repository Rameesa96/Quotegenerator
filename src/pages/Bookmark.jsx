import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { useSelector } from 'react-redux';
function Bookmark() {
    const {bookmarkList}=useSelector((state) => state.data)
  return (
    <div>
    <div className='header'>
    <Link to='/'><p className='Home'>Home</p></Link>
       <p className='bookmark'>Bookmark</p>
    </div>
    <div className='card'> {bookmarkList.map((random)=>(  
    <Card className='cardcontent' sx={{ minWidth: 275 }}>
   <CardContent>
    
    <Typography sx={{color:"white"}} variant="h5" component="div">
      {random.text}
    </Typography>
    <Typography sx={{ mb: 1.5 ,color:"white"}} className="author" color="text.secondary">
     -{random.author}
    </Typography>
   
  </CardContent>
  <CardActions>
 
  </CardActions>
</Card>
   
 ))} </div>
   
    
</div>
  )
}

export default Bookmark